# Plan de construcción del portafolio

Seguir las fases en orden. Al terminar cada fase:

1. Comprobar que `npm run build` termina sin errores.
2. Marcar la casilla de la fase en este archivo (`[x]`).
3. Hacer commit con el mensaje indicado.
4. Explicar a Fabio en pocas líneas qué cambió y cómo verlo con `npm run dev`.
5. **Detenerse y esperar su aprobación** antes de empezar la fase siguiente.

No adelantar trabajo de fases futuras. Si una fase necesita un dato que no está en `DATOS.md` ni en `CLAUDE.md`, usar un marcador entre corchetes y seguir.

---

## [ ] Fase 1: Base del sitio

- Inicializar Astro + Tailwind en la carpeta actual. Ya existe un repositorio git: no reiniciarlo ni borrar `CLAUDE.md`, `AGENTS.md`, `PLAN.md`, `DATOS.md`, `referencia/` ni `README.md`.
- Cargar las fuentes Barlow y Barlow Condensed y definir los colores de `CLAUDE.md` como tokens de Tailwind.
- Layout común: barra superior (pestaña inclinada INICIO con el monograma FV y las pestañas PROYECTOS, TRAYECTORIA, ARSENAL, FAVORITOS, con la pestaña activa marcada) y barra lateral derecha de contacto. Guía: `referencia/Inicio.dc.html`.
- Cinco rutas (`/`, `/proyectos`, `/trayectoria`, `/arsenal`, `/favoritos`), cada una con su fondo y acento y solo un título provisional.
- View Transitions de Astro activadas.
- Workflow de GitHub Actions que publique en GitHub Pages al hacer push a `main`. El sitio vive en la raíz del dominio (`https://notideaxd.github.io`), sin `base`.
- En celular: la barra superior se desplaza en horizontal y la lateral pasa abajo.

Commit: `Fase 1: base del sitio y menú`

## [ ] Fase 2: Contenido

- Colecciones de contenido de Astro en `src/content/` con esquema validado:
  - `proyectos`: titulo, numero, tipo (hackathon | personal | universidad), evento, estado, descripcion, rol, stack[], demo?, codigo?, imagen?, destacado.
  - `historial`: anio, titulo, detalle, categoria, resultado.
  - `certificados`: titulo, institucion, anio, imagen?, enlace?.
  - `cursos`: titulo, plataforma, estado (completado | en_curso | pendiente), avance.
  - `arsenal`: nombre, categoria (lenguajes | web_movil | bases_de_datos | herramientas | ia | idiomas), nivel.
  - `favoritos`: nombre, universo (anime | juegos | futbol | f1 | musica | comics), origen, por_que, momento, imagen?.
  - `perfil`: un archivo con nombre, titulo de jugador, ciudad, carrera, universidad, ciclo, sobre_mi, enlaces (github, correo, linkedin, cv).
- Llenarlas con `DATOS.md`. Lo que falte, con marcadores entre corchetes.

Commit: `Fase 2: archivos de contenido`

## [ ] Fase 3: Inicio

Guía: `referencia/Inicio.dc.html`.

- Fondo con franjas diagonales doradas.
- Cabecera: "Temporada 2026 // Ciclo IV", barra de avance de la carrera y contadores (hackathons, certificados) leídos del contenido.
- Columna izquierda: estado "Disponible", Descargar CV, Copiar correo (copia al portapapeles y muestra confirmación), GitHub.
- Centro: tarjeta de jugador grande (foto, nivel, nombre, título) flanqueada por cuatro estandartes con punta inferior que llevan a Proyectos, Trayectoria, Arsenal y Favoritos, cada uno con su número y color. Botón EMPEZAR que lleva a Proyectos.
- Derecha: el proyecto marcado como destacado y "Notas de la versión".

Commit: `Fase 3: pantalla de Inicio`

## [ ] Fase 4: Proyectos

Guía: `referencia/Proyectos.dc.html`.

- Filtros (Todos, Hackathon, Personal, USAT) que filtran de verdad.
- Cuadrícula de proyectos más tres casillas con candado.
- Centro: captura grande del proyecto seleccionado, con el número gigante detrás.
- Derecha: ficha con nombre, evento, tipo y estado; pestañas INFO, ROL, STACK, RETOS; botones Ver demo y Ver código (ocultos si no hay enlace).
- Al seleccionar otro proyecto la ficha cambia sin recargar la página, y el proyecto queda en la URL (`/proyectos?p=terrasonic` o similar) para poder compartirlo.

Commit: `Fase 4: pantalla de Proyectos`

## [ ] Fase 5: Trayectoria

Guía: `referencia/Trayectoria.dc.html`.

- Sub-pestañas HISTORIAL, CERTIFICADOS, CURSOS que funcionan.
- Historial: tarjeta de jugador y "Sobre mí" a la izquierda, lista de eventos en el centro (verde para hackathons, dorado para universidad), rango "Ciclo 4" a la derecha.
- Certificados: insignias hexagonales; al hacer clic se abre el certificado en grande (ventana modal accesible, se cierra con Escape). Una insignia final "Por desbloquear".
- Cursos: "Pase de aprendizaje 2026", un nivel por curso con su estado y barra de avance.

Commit: `Fase 5: pantalla de Trayectoria`

## [ ] Fase 6: Arsenal y Favoritos

Guías: `referencia/Arsenal.dc.html` y `referencia/Favoritos.dc.html`.

- Arsenal: columnas por categoría con las tarjetas de herramientas y la vista previa de la tarjeta de jugador.
- Favoritos: filtros por universo, cuadrícula de retratos, arte grande al centro con el universo en texto gigante detrás, ficha a la derecha (por qué es mi favorito, momento favorito, lo que me dejó) y botón Siguiente.

Commit: `Fase 6: Arsenal y Favoritos`

## [ ] Fase 7: Imágenes

- Crear `public/img/` con subcarpetas `perfil/`, `proyectos/`, `certificados/` y `favoritos/`, cada una con un `LEEME.txt` que diga qué archivo va ahí, su nombre exacto y el tamaño recomendado.
- Todas las imágenes con el componente de imagen de Astro (optimización y `alt`), y un marcador visible si el archivo todavía no existe.
- No descargar ni generar arte de personajes, logos o marcas: Fabio pone esos archivos.

Commit: `Fase 7: estructura de imágenes`

## [ ] Fase 8: Animaciones

Con GSAP, solo `transform` y `opacity`, y todas desactivadas con `prefers-reduced-motion`.

- Cambio de pantalla: barrido diagonal del color de acento.
- Al entrar a cada pantalla: los elementos aparecen escalonados.
- Inicio: la tarjeta de jugador entra desde abajo y los estandartes se despliegan hacia abajo.
- Proyectos y Favoritos: al cambiar de selección, el número o texto gigante se desliza y la imagen entra con un corte diagonal.
- Pestañas y botones: estado hover y foco con una línea del color de acento.
- Dejar preparado un componente de secuencia de imágenes para el fondo del Inicio que lea los frames de `public/img/secuencia/` (WebP numerados) y los reproduzca; si la carpeta está vacía no muestra nada.

Commit: `Fase 8: animaciones`

## [ ] Fase 9: Pulido

- Revisar las cinco pantallas en 375 px, 768 px y 1440 px y corregir lo que se rompa.
- Contraste AA, foco visible y navegación completa con teclado.
- `title` y descripción por pantalla, favicon con el monograma FV e imagen para compartir.
- Página 404 con el estilo del sitio.
- Reescribir `README.md`: qué es, cómo ejecutarlo, cómo agregar un proyecto, certificado o favorito editando solo `src/content/`.

Commit: `Fase 9: pulido y README`
