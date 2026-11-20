// Estructura del menú: qué pantallas existen, su ruta y su ambiente.
// Es configuración del sitio, no contenido; el contenido va en src/content/ (fase 2).

export type IdPantalla = 'inicio' | 'proyectos' | 'trayectoria' | 'arsenal' | 'favoritos';

export interface Pantalla {
  id: IdPantalla;
  ruta: string;
  etiqueta: string;
  fondo: string;
  acento: string;
  /** Frase corta bajo el nombre de la pantalla en los estandartes del Inicio. */
  lema: string;
}

export const pantallas: Pantalla[] = [
  { id: 'inicio', ruta: '/', etiqueta: 'INICIO', fondo: '#0B1016', acento: '#FF5B5B', lema: 'Lobby' },
  { id: 'proyectos', ruta: '/proyectos', etiqueta: 'PROYECTOS', fondo: '#0F1A22', acento: '#FF5B5B', lema: 'Hackathons y personales' },
  { id: 'trayectoria', ruta: '/trayectoria', etiqueta: 'TRAYECTORIA', fondo: '#101A2E', acento: '#F2C14E', lema: 'Historial, certificados y cursos' },
  { id: 'arsenal', ruta: '/arsenal', etiqueta: 'ARSENAL', fondo: '#16233A', acento: '#5CC8FF', lema: 'Tecnologías y herramientas' },
  { id: 'favoritos', ruta: '/favoritos', etiqueta: 'FAVORITOS', fondo: '#1B1424', acento: '#FF4FD8', lema: 'Anime, deporte, música y más' },
];

export function obtenerPantalla(id: IdPantalla): Pantalla {
  const pantalla = pantallas.find((p) => p.id === id);
  if (!pantalla) throw new Error(`Pantalla desconocida: ${id}`);
  return pantalla;
}
