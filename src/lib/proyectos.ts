// Textos de interfaz para los valores de los proyectos.
export const etiquetaTipo = {
  hackathon: 'Hackathon',
  personal: 'Personal',
  universidad: 'USAT',
} as const;

export const etiquetaEstado = {
  completado: 'Completado',
  en_desarrollo: 'En desarrollo',
  pausado: 'Pausado',
} as const;

/** Filtros de la pantalla de Proyectos: "todos" o un tipo. */
export const filtros = [
  { valor: 'todos', etiqueta: 'TODOS' },
  { valor: 'hackathon', etiqueta: 'HACKATHON' },
  { valor: 'personal', etiqueta: 'PERSONAL' },
  { valor: 'universidad', etiqueta: 'USAT' },
] as const;
