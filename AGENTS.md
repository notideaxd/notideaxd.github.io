# Portafolio personal de Fabio Vasquez

Sitio web personal publicado en GitHub Pages (`notideaxd.github.io`). El sitio entero se comporta como el menú de un videojuego táctico: no es una página con scroll y secciones, sino pantallas que cambian con transiciones.

Idioma de toda la interfaz y del contenido: español.

## Stack

- Astro (sitio estático, una ruta por pantalla)
- Tailwind CSS
- GSAP para animaciones; View Transitions de Astro para el cambio entre pantallas
- Despliegue: GitHub Actions hacia GitHub Pages (rama `main`)

No agregar otras dependencias sin preguntar.

## Pantallas

| Ruta | Pantalla | Contenido |
|---|---|---|
| `/` | Inicio (lobby) | Tarjeta de jugador al centro, cuatro estandartes de acceso a las otras pantallas, un proyecto destacado, botón EMPEZAR |
| `/proyectos` | Proyectos | Cuadrícula de proyectos a la izquierda, captura grande al centro, ficha a la derecha (qué es, mi rol, stack, demo, código) |
| `/trayectoria` | Trayectoria | Sub-pestañas: Historial, Certificados (insignias hexagonales), Cursos (niveles con avance) |
| `/arsenal` | Arsenal | Tecnologías y herramientas en columnas por categoría |
| `/favoritos` | Favoritos | Cuadrícula de retratos, arte grande al centro, ficha a la derecha |

Elementos comunes a todas: barra superior con pestaña inclinada de INICIO y las otras cuatro pestañas; barra lateral derecha con enlaces de contacto (GitHub, correo, LinkedIn, CV).

Los archivos de `referencia/` son el prototipo de cada pantalla. Son la guía visual: respetar su estructura, proporciones y jerarquía. Están escritos en un formato de prototipo (`.dc.html`); leerlos como HTML con estilos en línea, no copiarlos tal cual ni usar su runtime.

## Diseño

Tipografías (Google Fonts): `Barlow Condensed` 600/700 para títulos, pestañas y etiquetas en mayúsculas; `Barlow` 400/500 para texto.

Colores base:

- Fondo `#0B1016`, panel `#121A23`, panel alto `#18222D`, barra `#141C25`
- Líneas `#2A3642`, borde claro `#56626E`
- Texto `#ECE8E1`, texto secundario `#C9D1D9`
- Estado positivo `#3DDBB4`, dorado `#F2C14E`

Cada pantalla tiene su ambiente (color de fondo y de acento):

| Pantalla | Fondo | Acento |
|---|---|---|
| Inicio | `#0B1016` con franjas diagonales doradas `#C9B37A` | `#FF5B5B` |
| Proyectos | `#0F1A22` | `#FF5B5B` |
| Trayectoria | `#101A2E` | `#F2C14E` |
| Arsenal | `#16233A` | `#5CC8FF` |
| Favoritos | `#1B1424` | `#FF4FD8` |

Formas: esquinas rectas, nunca redondeadas. Pestañas y botones con cortes en diagonal (`clip-path`). Estandartes con punta inferior. Franjas diagonales de borde duro en los fondos, sin degradados suaves. Texto gigante semitransparente detrás del elemento central.

## Reglas

- No usar logos, tipografías, capturas ni arte de ningún videojuego, anime, equipo o marca. El menú toma la estructura del género, no los recursos de nadie.
- Donde vaya arte de personajes o fotos, dejar un componente de imagen con un marcador visible; Fabio pone los archivos después.
- No inventar datos (tecnologías, certificados, resultados, fechas). Lo que falte se deja como marcador entre corchetes.
- Todo el contenido vive en archivos de datos dentro de `src/content/` (proyectos, certificados, cursos, arsenal, favoritos), nunca escrito dentro de los componentes. Agregar un proyecto debe ser agregar un archivo.
- Debe funcionar en celular: las columnas se apilan y la barra superior se vuelve desplazable.
- Accesibilidad: botones y enlaces reales, foco visible, contraste AA, y respetar `prefers-reduced-motion` en todas las animaciones.
- Animaciones con `transform` y `opacity`; nada que cambie el layout.

## Forma de trabajo

- Seguir `PLAN.md` fase por fase, en orden, deteniéndose al final de cada una para esperar la aprobación de Fabio.
- Los datos personales están en `DATOS.md`. Si Fabio lo actualiza, volver a leerlo antes de tocar contenido.
- No tocar pantallas ni archivos que la fase actual no pide.
- Antes de escribir código en cada fase, proponer un plan corto y esperar aprobación.
- Al terminar, decir qué archivos cambiaron y cómo probarlo con `npm run dev`.
- Fabio es nuevo en Git y GitHub: explicar los pasos de terminal en una línea cada uno.

## Datos confirmados

- Fabio Andre Vasquez Torres, Lambayeque, Perú
- Estudiante de Ingeniería de Sistemas, Universidad Católica Santo Toribio de Mogrovejo (USAT), 4.º ciclo
- Certificado de inglés B1 de Oxford
- Proyectos: LeeContigo IA (Hackathon futurX 2026, web de lectura para niños hecha con IA, en equipo); TerraSonic (NASA Space Apps Challenge 2026, sede Chiclayo, reto The Earth Information Jukebox); App de finanzas (personal, en desarrollo)
- Herramientas: VS Code, Git y GitHub, Claude Code, Codex
