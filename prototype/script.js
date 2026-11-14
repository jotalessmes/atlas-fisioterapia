(() => {
  const frameCount = 90;
  const canvas = document.querySelector('#body-canvas');
  const context = canvas?.getContext('2d', { alpha: false });
  const journey = document.querySelector('.journey');
  const sticky = document.querySelector('.journey__sticky');
  if (!canvas || !context || !journey || !sticky) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const frames = new Map();
  const pending = new Map();
  const chapters = [
    { at: 0.08, frame: 8, kicker: '01 · CABEZA Y CUELLO', title: 'Empieza por hablar.', copy: 'Cuéntanos qué necesitas y pregunta por las opciones disponibles en Atlas.', link: 'Llamar al centro' },
    { at: 0.32, frame: 30, kicker: '02 · ESPALDA Y TORSO', title: 'Cada historia es distinta.', copy: 'Consulta con el centro qué atención puede encajar contigo y cómo pedir una cita.', link: 'Consultar por teléfono' },
    { at: 0.62, frame: 57, kicker: '03 · CADERA Y MOVIMIENTO', title: 'Avanza a tu ritmo.', copy: 'El equipo de Atlas puede orientarte sobre sus servicios y la disponibilidad de citas.', link: 'Escribir por WhatsApp', whatsapp: true },
    { at: 0.86, frame: 83, kicker: '04 · PIERNAS Y PIES', title: 'Tu siguiente paso, en Córdoba.', copy: 'Contacta directamente con Atlas para resolver tus dudas y concertar una visita.', link: 'Ver cómo llegar', map: true },
  ];
  let progress = 0;
  let currentFrame = -1;
  let currentChapter = -1;
  let drawQueued = false;
  let resizeObserver;

  const sourceFor = (number) => `../public/images/body-sequence/frame_${String(number).padStart(3, '0')}.jpg`;

  function loadFrame(number) {
    const index = Math.max(1, Math.min(frameCount, number));
    if (frames.has(index)) return Promise.resolve(frames.get(index));
    if (pending.has(index)) return pending.get(index);
    const request = fetch(sourceFor(index), { priority: 'low' })
      .then((response) => {
        if (!response.ok) throw new Error(`No se pudo cargar el fotograma ${index}`);
        return response.blob();
      })
      .then((blob) => createImageBitmap(blob))
      .then((bitmap) => {
        frames.set(index, bitmap);
        pending.delete(index);
        trimFrames(index);
        if (index === currentFrame) scheduleDraw();
        return bitmap;
      })
      .catch(() => {
        pending.delete(index);
        return null;
      });
    pending.set(index, request);
    return request;
  }

  function trimFrames(keep) {
    if (frames.size <= 12) return;
    const candidates = [...frames.keys()].sort((a, b) => Math.abs(b - keep) - Math.abs(a - keep));
    while (frames.size > 12 && candidates.length) {
      const key = candidates.shift();
      if (key === keep) continue;
      frames.get(key)?.close();
      frames.delete(key);
    }
  }

  function warmFrames(number) {
    const offsets = [0, 1, -1, 2, -2, 4, -4, 7, -7];
    offsets.forEach((offset, order) => {
      const target = Math.max(1, Math.min(frameCount, number + offset));
      if (!frames.has(target) && !pending.has(target)) {
        window.setTimeout(() => loadFrame(target), order * 35);
      }
    });
  }

  function draw() {
    drawQueued = false;
    const bitmap = frames.get(currentFrame);
    if (!bitmap) {
      warmFrames(currentFrame);
      return;
    }
    const width = canvas.width;
    const height = canvas.height;
    const scale = Math.max(width / bitmap.width, height / bitmap.height);
    const drawWidth = bitmap.width * scale;
    const drawHeight = bitmap.height * scale;
    const x = (width - drawWidth) / 2;
    const y = (height - drawHeight) / 2;
    context.drawImage(bitmap, x, y, drawWidth, drawHeight);
    warmFrames(currentFrame);
  }

  function scheduleDraw() {
    if (drawQueued) return;
    drawQueued = true;
    requestAnimationFrame(draw);
  }

  function setChapter(index) {
    if (index === currentChapter) return;
    currentChapter = index;
    const chapter = chapters[index];
    const copy = document.querySelector('.journey__copy');
    copy?.classList.add('is-changing');
    window.setTimeout(() => {
      document.querySelector('#chapter-kicker').textContent = chapter.kicker;
      document.querySelector('#chapter-title').textContent = chapter.title;
      document.querySelector('#chapter-copy').textContent = chapter.copy;
      const link = document.querySelector('#chapter-link');
      link.textContent = chapter.link;
      link.href = chapter.whatsapp
        ? 'https://wa.me/34957402791?text=Hola%2C%20quiero%20pedir%20cita%20en%20Atlas'
        : chapter.map
          ? 'https://www.google.com/maps/search/?api=1&query=Atlas+Fisioterapia+Av.+Al-Nasir+21+C%C3%B3rdoba'
          : 'tel:+34957402791';
      link.target = chapter.whatsapp || chapter.map ? '_blank' : '';
      link.rel = chapter.whatsapp || chapter.map ? 'noreferrer' : '';
      copy?.classList.remove('is-changing');
      document.querySelector('#frame-counter').innerHTML = `${String(index + 1).padStart(2, '0')} <i>/</i> 04`;
      document.querySelectorAll('.journey__nav button').forEach((button, buttonIndex) => {
        if (buttonIndex === index) button.setAttribute('aria-current', 'step');
        else button.removeAttribute('aria-current');
      });
    }, 130);
  }

  function update() {
    const rect = journey.getBoundingClientRect();
    const travel = Math.max(1, journey.offsetHeight - sticky.offsetHeight);
    const stickyInset = Number.parseFloat(getComputedStyle(sticky).top) || 0;
    progress = Math.max(0, Math.min(1, (stickyInset - rect.top) / travel));
    const introOpacity = 1 - Math.min(1, progress / 0.075);
    const intro = document.querySelector('.hero__content');
    const scrollHint = document.querySelector('.hero__scroll');
    const chapterCopy = document.querySelector('.journey__copy');
    if (intro) {
      intro.style.opacity = String(introOpacity);
      intro.style.pointerEvents = introOpacity > 0.1 ? 'auto' : 'none';
    }
    if (scrollHint) scrollHint.style.opacity = String(introOpacity);
    if (chapterCopy) chapterCopy.style.opacity = String(Math.max(0, Math.min(1, (progress - 0.035) / 0.065)));
    const chapterIndex = chapters.reduce((active, chapter, index) => progress >= chapter.at ? index : active, 0);
    const nextFrame = reducedMotion.matches
      ? chapters[chapterIndex].frame
      : 1 + Math.round(progress * (frameCount - 1));
    if (nextFrame !== currentFrame) {
      currentFrame = nextFrame;
      loadFrame(currentFrame).then(scheduleDraw);
    }
    setChapter(chapterIndex);
    document.querySelector('#progress-fill').style.width = `${progress * 100}%`;
  }

  function resizeCanvas() {
    const bounds = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(bounds.width * ratio);
    canvas.height = Math.round(bounds.height * ratio);
    scheduleDraw();
  }

  let scrollQueued = false;
  window.addEventListener('scroll', () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      scrollQueued = false;
      update();
    });
  }, { passive: true });
  window.addEventListener('resize', () => {
    resizeCanvas();
    update();
  }, { passive: true });
  reducedMotion.addEventListener?.('change', update);
  document.querySelectorAll('.journey__nav button').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.jump);
      const chapter = chapters[index];
      const rect = journey.getBoundingClientRect();
      const travel = Math.max(1, journey.offsetHeight - sticky.offsetHeight);
      const stickyInset = Number.parseFloat(getComputedStyle(sticky).top) || 0;
      const targetY = window.scrollY + rect.top + chapter.at * travel - stickyInset;
      window.scrollTo({ top: targetY, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    });
  });
  document.querySelectorAll('a[href="#recorrido"], .hero__scroll').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const rect = journey.getBoundingClientRect();
      const travel = Math.max(1, journey.offsetHeight - sticky.offsetHeight);
      const stickyInset = Number.parseFloat(getComputedStyle(sticky).top) || 0;
      window.scrollTo({ top: window.scrollY + rect.top + 0.09 * travel - stickyInset, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    });
  });

  resizeObserver = new ResizeObserver(resizeCanvas);
  resizeObserver.observe(sticky);
  resizeCanvas();
  update();
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
