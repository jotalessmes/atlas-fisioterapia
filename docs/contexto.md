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
