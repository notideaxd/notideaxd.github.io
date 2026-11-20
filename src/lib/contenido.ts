// Ayudas para leer el contenido de src/content/.
import { getCollection, getEntry } from 'astro:content';

/** Un texto entre corchetes, como "[URL]", es un marcador pendiente de completar. */
export const esMarcador = (valor: string | undefined) => !valor || /^\[.*\]$/.test(valor.trim());

/** El perfil vive en src/content/perfil/perfil.yaml. */
export async function obtenerPerfil() {
  const entrada = await getEntry('perfil', 'perfil');
  if (!entrada) throw new Error('Falta src/content/perfil/perfil.yaml');
  return entrada.data;
}

export interface EnlaceContacto {
  id: 'github' | 'correo' | 'linkedin' | 'cv';
  etiqueta: string;
  abreviatura: string;
  url: string;
  pendiente: boolean;
}

/** Enlaces de contacto en el orden de la barra lateral. */
export async function obtenerContacto(): Promise<EnlaceContacto[]> {
  const { enlaces } = await obtenerPerfil();
  const lista = [
    { id: 'github', etiqueta: 'GitHub', abreviatura: 'GH', valor: enlaces.github },
    { id: 'correo', etiqueta: 'Correo', abreviatura: '@', valor: enlaces.correo },
    { id: 'linkedin', etiqueta: 'LinkedIn', abreviatura: 'IN', valor: enlaces.linkedin },
    { id: 'cv', etiqueta: 'Currículum', abreviatura: 'CV', valor: enlaces.cv },
  ] as const;
  return lista.map(({ valor, ...resto }) => {
    const pendiente = esMarcador(valor);
    const url = pendiente || resto.id !== 'correo' ? valor : `mailto:${valor}`;
    return { ...resto, url, pendiente };
  });
}

/** Colección ordenada por su campo `orden` (o por número, en proyectos). */
export async function coleccionOrdenada<
  C extends 'historial' | 'cursos' | 'arsenal' | 'favoritos',
>(nombre: C) {
  const entradas = await getCollection(nombre);
  return entradas.sort((a, b) => a.data.orden - b.data.orden);
}

export async function proyectosOrdenados() {
  const entradas = await getCollection('proyectos');
  return entradas.sort((a, b) => a.data.numero.localeCompare(b.data.numero));
}

/** Número romano para ciclos y niveles (1–39 es suficiente aquí). */
export function aRomano(n: number): string {
  const tabla: [number, string][] = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  let resto = n;
  let salida = '';
  for (const [valor, letra] of tabla) {
    while (resto >= valor) {
      salida += letra;
      resto -= valor;
    }
  }
  return salida;
}

/** Dos dígitos: 4 → "04". */
export const dosDigitos = (n: number) => String(n).padStart(2, '0');

/** Cifras que se repiten en varias pantallas: contadores, estandartes y barra superior. */
export async function obtenerResumen() {
  const [perfil, proyectos, certificados, arsenal, favoritos] = await Promise.all([
    obtenerPerfil(),
    getCollection('proyectos'),
    getCollection('certificados'),
    getCollection('arsenal'),
    getCollection('favoritos'),
  ]);
  return {
    ciclo: perfil.ciclo,
    ciclosTotales: perfil.ciclos_totales,
    avanceCarrera: Math.round((perfil.ciclo / perfil.ciclos_totales) * 100),
    proyectos: proyectos.length,
    hackathons: proyectos.filter((p) => p.data.tipo === 'hackathon').length,
    // Solo cuentan los elementos con datos reales, no los marcadores pendientes.
    certificados: certificados.filter((c) => !esMarcador(c.data.titulo)).length,
    herramientas: arsenal.filter((a) => !esMarcador(a.data.nombre)).length,
    favoritos: favoritos.length,
  };
}

/** Usuario de GitHub a partir de la URL del perfil: https://github.com/notideaxd → notideaxd. */
export function usuarioGithub(url: string): string {
  if (esMarcador(url)) return url;
  return url.replace(/\/+$/, '').split('/').pop() ?? url;
}
