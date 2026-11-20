// Busca imágenes en src/assets/img/<carpeta>/ por nombre, sin importar la extensión.
// Astro las optimiza (WebP y varios tamaños) al compilar.
import type { ImageMetadata } from 'astro';

export type CarpetaImagen = 'perfil' | 'proyectos' | 'certificados' | 'favoritos';

const archivos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/img/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

/**
 * Devuelve la imagen `src/assets/img/<carpeta>/<nombre>.<ext>` si existe.
 * `nombre` puede llevar extensión ("foto.png") o no ("foto").
 */
export function buscarImagen(carpeta: CarpetaImagen, nombre: string): ImageMetadata | undefined {
  const base = `/src/assets/img/${carpeta}/`;
  const objetivo = nombre.toLowerCase();
  for (const [ruta, modulo] of Object.entries(archivos)) {
    if (!ruta.startsWith(base)) continue;
    const archivo = ruta.slice(base.length).toLowerCase();
    if (archivo === objetivo || archivo.replace(/\.[^.]+$/, '') === objetivo) return modulo.default;
  }
  return undefined;
}

/** Nombre de imagen de un elemento de contenido: su campo `imagen` o, si no tiene, su id. */
export const nombreImagen = (entrada: { id: string; data: { imagen?: string } }) => entrada.data.imagen ?? entrada.id;
