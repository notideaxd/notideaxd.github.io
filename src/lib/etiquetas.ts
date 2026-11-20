// Textos de interfaz para las categorías de Arsenal y los universos de Favoritos.

export const categoriasArsenal = {
  lenguajes: 'LENGUAJES',
  web_movil: 'WEB Y MÓVIL',
  bases_de_datos: 'BASES DE DATOS',
  herramientas: 'HERRAMIENTAS',
  ia: 'INTELIGENCIA ARTIFICIAL',
  idiomas: 'IDIOMAS',
} as const;

export type CategoriaArsenal = keyof typeof categoriasArsenal;

/** Columnas de la pantalla Arsenal: cada una agrupa una o dos categorías. */
export const columnasArsenal: CategoriaArsenal[][] = [
  ['lenguajes'],
  ['web_movil', 'bases_de_datos'],
  ['herramientas'],
  ['ia', 'idiomas'],
];

export const universos = {
  anime: 'ANIME',
  juegos: 'JUEGOS',
  futbol: 'FÚTBOL',
  f1: 'F1',
  musica: 'MÚSICA',
  comics: 'CÓMICS',
} as const;

export type Universo = keyof typeof universos;
