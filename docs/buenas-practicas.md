# Buenas prácticas — Atlas Fisioterapia

## Antes de implementar
- Confirmar los datos reales del centro y quién los aprueba.
- No publicar contenido sanitario, precios, horarios, reseñas, titulaciones ni imágenes sin verificación.
- Acordar el alcance, páginas y llamadas a la acción antes de añadir dependencias.
- Mantener la rama `develop` como rama de integración de trabajo; revisar los cambios antes de incorporarlos a la rama de publicación que se acuerde.

## Tecnología y mantenimiento
- Preferir Astro y renderizado estático mientras el sitio no necesite funciones dinámicas.
- Añadir dependencias solo cuando aporten valor claro; mantenerlas actualizadas y revisar su licencia.
- Mantener componentes pequeños, accesibles y reutilizables, sin abstraer elementos de una sola aparición.
- Guardar configuración y contenido editable de forma clara; no incluir secretos ni credenciales en Git.
- Evitar código de seguimiento, widgets y fuentes externas innecesarios para reducir peso y exposición de datos.

## Accesibilidad y experiencia
- Usar HTML semántico, encabezados en orden, enlaces descriptivos y controles utilizables con teclado.
- Asegurar contraste suficiente, foco visible, texto legible y alternativas textuales útiles para imágenes.
- Diseñar primero para móvil; comprobar que teléfono y WhatsApp se pueden activar fácilmente.
- Las llamadas a la acción deben indicar qué ocurrirá. Usar `tel:` para llamadas y `https://wa.me/` con número internacional sin `+`, espacios ni guiones.
- No usar color o iconos como única forma de comunicar información.

## SEO local y contenido
- Definir título y descripción únicos y precisos en cada página.
- Publicar dirección, horario, teléfono y zona solo cuando hayan sido confirmados y mantenerlos coherentes.
- Añadir datos estructurados de negocio local únicamente con información real y campos válidos.
- Crear sitemap y reglas de rastreo cuando estén definidas las URL de producción.
- Escribir en lenguaje claro; evitar garantías de curación o resultados y afirmaciones médicas no aprobadas.

## Privacidad y seguridad
- No solicitar información sobre lesiones, diagnósticos u otros datos de salud en la web inicial.
- Abrir WhatsApp únicamente tras una acción explícita de la persona y explicar que continuará en ese servicio.
- Si se incorporan formularios, analítica, cookies no esenciales o integraciones, revisar antes sus requisitos de privacidad y consentimiento aplicables.
- Usar HTTPS en producción, actualizar dependencias y no exponer claves en el cliente.

## Rendimiento y medios
- Optimizar imágenes y servir tamaños adecuados; usar formatos modernos cuando sea posible.
- Definir dimensiones de imagen para evitar saltos de contenido y cargar de forma diferida imágenes fuera de pantalla.
- Evitar vídeo de fondo, animaciones pesadas y JavaScript innecesario.
- Revisar carga y diseño en móvil y conexiones lentas.

## Calidad y cambios
- Mantener cambios pequeños y fáciles de revisar; describir claramente su propósito.
- Verificar los cambios relevantes antes de publicar y no subir archivos generados, dependencias instaladas o secretos.
- Comprobar enlaces, navegación por teclado, presentación móvil, metadatos y enlaces de contacto antes del despliegue.
- Documentar decisiones que afecten a contenido, dependencias, alojamiento o privacidad.
