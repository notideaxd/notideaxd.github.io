# Cómo usar este paquete

1. Copia todo el contenido de esta carpeta a la carpeta de tu repositorio (junto al README.md).
2. Rellena DATOS.md con lo que sepas. Puedes hacerlo después; lo que falte sale como marcador.
3. En GitHub Desktop: commit "Agrega plan y contexto" y Push origin.
4. Abre Claude Code en VS Code y pega el prompt de abajo.
5. Al final de cada fase, prueba con `npm run dev`, abre la dirección que te indique y, si te gusta, responde "aprobado, sigue". Luego haz Push origin en GitHub Desktop.
6. Tras la fase 1: en github.com, dentro del repositorio, Settings → Pages → Source: GitHub Actions.

Si una sesión se pone muy larga, escribe /clear y vuelve a pegar el prompt: el plan recuerda en qué fase vas porque las casillas quedan marcadas.

## Prompt para Claude Code

```
Lee CLAUDE.md, PLAN.md, DATOS.md y los archivos de referencia/.

Vas a construir mi portafolio siguiendo PLAN.md. Empieza por la primera fase que no esté marcada con [x].

Para cada fase:
1. Muéstrame un plan corto de lo que vas a hacer y espera mi aprobación.
2. Hazla.
3. Comprueba que npm run build funciona.
4. Marca la fase en PLAN.md y haz el commit indicado.
5. Dime qué cambió y cómo verlo, y espera a que te diga "aprobado, sigue" antes de pasar a la siguiente.

Soy nuevo en Git y en la terminal: cuando tenga que ejecutar algo, explícalo en una línea.
```
