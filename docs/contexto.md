# Contexto del proyecto — Atlas Fisioterapia

## Objetivo
Crear una web clara y profesional para un centro de fisioterapia. La web debe explicar sus servicios y facilitar que una persona solicite cita por teléfono o WhatsApp.

## Estado
- Repositorio: https://github.com/jotalessmes/atlas-fisioterapia.git
- Rama inicial de trabajo: `develop`
- Fase actual: preparación de estructura y documentación. La web todavía no está programada.

## Tecnología propuesta
- **Astro** para generar páginas estáticas rápidas con poco JavaScript en el navegador.
- **TypeScript** para los componentes y la configuración del proyecto.
- **CSS** para estilos propios y controlados; incorporar una biblioteca visual solo si el diseño lo justifica.
- Despliegue estático en un proveedor compatible con Astro (por ejemplo, Vercel o Netlify), a decidir al conocer el dominio y las preferencias del propietario.

La reserva inicial se resolverá con enlaces `tel:` y `wa.me`; no se prevé base de datos, inicio de sesión ni formulario que recoja datos personales. Esto reduce coste y mantenimiento para el alcance descrito.

## Público y propuesta
Personas que buscan atención de fisioterapia y necesitan entender rápidamente qué trata el centro, dónde está y cómo pedir cita. El tono debe transmitir confianza, cercanía y claridad, sin prometer resultados clínicos.

## Información pendiente del centro
- Dirección, zona de servicio y horario.
- Teléfono y número de WhatsApp en formato internacional.
- Servicios y tratamientos realmente ofrecidos.
- Equipo, titulaciones y fotografías con autorización.
- Tarifas, seguros, idiomas y accesibilidad, si se desean publicar.
- Dominio, identidad visual y proveedor de alojamiento.

Usar marcadores provisionales durante el diseño y no inventar datos, credenciales, reseñas, precios ni afirmaciones médicas.

## Estructura prevista
- `src/pages/`: rutas y páginas.
- `src/layouts/`: estructura compartida de página y metadatos.
- `src/components/`: navegación, llamadas a la acción y componentes reutilizables.
- `src/styles/`: estilos globales y diseño adaptable.
- `src/assets/`: imágenes y recursos fuente procesados por Astro.
- `public/`: recursos públicos servidos tal cual (favicon, robots.txt, etc.).
- `docs/`: documentación del proyecto.

## Alcance inicial sugerido
Inicio, servicios, equipo/centro, contacto y ubicación. La navegación y las páginas definitivas se concretarán antes de implementarlas.

## Información pública localizada (pendiente de validación por el centro)

La búsqueda del 14 de noviembre de 2026 encontró estas referencias sobre Atlas en Córdoba. Son una base para preparar contenidos, no sustituyen la confirmación directa del centro.

### Datos coincidentes
- Nombre usado en directorios: **Clínica de Fisioterapia Atlas**; una ficha basada en el Registro General de Centros Sanitarios (REGCESS) la identifica como **Clínica de Fisioterapia Atlas, S.L.L.**
- Ubicación: **Avenida/Calle Al-Nasir, 21, bajo/local, 14006 Córdoba**. Las fichas sitúan la clínica en Córdoba capital, zona Norte-Sierra.
- Teléfono publicado por CH Salud: **957 402 791**.
- Servicios que figuran en la ficha de CH Salud: **fisioterapia, rehabilitación, osteopatía y acupuntura**. La ficha indica que son servicios concertados para sus afiliados.

### Datos con discrepancias o antigüedad
- Otro directorio, TodoFisios, publica el teléfono **+34 672 173 303** y el correo **mameluki-cordoba@hotmail.com**; su ficha declara estar basada en REGCESS y actualizada el 24 de octubre de 2026. No coincide con el teléfono de CH Salud. Confirmar cuál es el teléfono general actual antes de poner enlaces de llamada.
- CH Salud publica horario de lunes a viernes de **08:00–14:00 y 16:00–21:00**. Otros directorios muestran **08:00–21:30 de lunes a jueves y 08:00–15:00 los viernes**. Confirmar el horario vigente.
- Una ficha de Volvemos.org contiene una descripción más antigua que menciona terapia manual, fisioterapia pediátrica, rehabilitación traumatológica y neurológica, punción seca, EPI, pilates suelo, hipopresivos y distintas técnicas electroterapéuticas. Validar cada servicio con el centro antes de publicarlo.
- CH Salud lista tres profesionales y números de colegiación; confirmar que siguen formando parte del equipo y que autorizan publicar sus nombres antes de incluirlos.
- No se ha encontrado confirmación fiable de que alguno de los teléfonos acepte WhatsApp. No crear el enlace de WhatsApp hasta validar el número y el canal.

### Fuentes consultadas
- [Ficha de Clínica Fisioterapia Atlas en CH Salud](https://chsalud.es/site/page/clinica/1734/clinica-fisioterapia-atlas) — dirección, teléfono, horario, servicios concertados y profesionales.
- [Ficha de Clínica de Fisioterapia Atlas, S.L.L. en TodoFisios](https://www.todofisios.es/cordoba/clinica-de-fisioterapia-atlas-s-l-l/) — identidad legal, dirección, teléfono y correo; atribuye la ficha a datos de REGCESS.
- [Perfil de Atlas en Volvemos a Córdoba](https://cordoba.volvemos.org/atlas-clinica-fisioterapia) — descripción y lista ampliada de servicios; tratar como referencia histórica y verificar.
- [Ficha de Atlas en Cylex](https://www.cylex.es/cordoba/atlas-11371482.html) — dirección, teléfono y horarios publicados por un directorio.

### Contenido base posible, sujeto a aprobación
> Atlas es un centro de fisioterapia en Córdoba, ubicado en la zona de Al-Nasir. Ofrece fisioterapia y rehabilitación, además de osteopatía y acupuntura según la información publicada por CH Salud. Para conocer disponibilidad y reservar, contacta directamente con el centro.

No afirmar que el equipo tiene una experiencia determinada, que garantiza resultados o que ofrece una técnica concreta sin confirmación actual del centro.
