// Colecciones de contenido del portafolio.
// Cada carpeta de src/content/ es una colección y cada archivo .yaml es un elemento.
// Si un archivo no cumple su esquema, `npm run build` avisa qué archivo y qué campo fallan.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const yaml = (carpeta: string) => glob({ pattern: '**/*.{yaml,yml}', base: `./src/content/${carpeta}` });

// Un texto entre corchetes, como "[URL]", es un marcador pendiente de completar.
const textoOMarcador = z.string().min(1);

const proyectos = defineCollection({
  loader: yaml('proyectos'),
  schema: z.object({
    titulo: z.string(),
    numero: z.string().regex(/^\d{2}$/, 'Usa dos dígitos, por ejemplo "01"'),
    tipo: z.enum(['hackathon', 'personal', 'universidad']),
    evento: textoOMarcador,
    estado: z.enum(['completado', 'en_desarrollo', 'pausado']),
    descripcion: textoOMarcador,
    rol: textoOMarcador,
    stack: z.array(textoOMarcador).min(1),
    retos: textoOMarcador.optional(),
    resultado: textoOMarcador.optional(),
    // Enlaces opcionales: si no existen, los botones "Ver demo" / "Ver código" se ocultan.
    demo: z.url().optional(),
    codigo: z.url().optional(),
    imagen: z.string().optional(),
    destacado: z.boolean().default(false),
  }),
});

const historial = defineCollection({
  loader: yaml('historial'),
  schema: z.object({
    anio: z.string(),
    titulo: z.string(),
    detalle: textoOMarcador,
    categoria: z.enum(['hackathon', 'universidad']),
    resultado: textoOMarcador,
    orden: z.number().int(),
  }),
});

const certificados = defineCollection({
  loader: yaml('certificados'),
  schema: z.object({
    titulo: textoOMarcador,
    institucion: textoOMarcador,
    anio: textoOMarcador,
    insignia: z.string().max(4).optional(),
    imagen: z.string().optional(),
    enlace: z.url().optional(),
  }),
});

const cursos = defineCollection({
  loader: yaml('cursos'),
  schema: z.object({
    titulo: textoOMarcador,
    plataforma: textoOMarcador,
    estado: z.enum(['completado', 'en_curso', 'pendiente']),
    avance: z.number().min(0).max(100),
    orden: z.number().int(),
  }),
});

const arsenal = defineCollection({
  loader: yaml('arsenal'),
  schema: z.object({
    nombre: textoOMarcador,
    categoria: z.enum(['lenguajes', 'web_movil', 'bases_de_datos', 'herramientas', 'ia', 'idiomas']),
    nivel: textoOMarcador,
    orden: z.number().int(),
  }),
});

const favoritos = defineCollection({
  loader: yaml('favoritos'),
  schema: z.object({
    nombre: textoOMarcador,
    universo: z.enum(['anime', 'juegos', 'futbol', 'f1', 'musica', 'comics']),
    origen: textoOMarcador,
    por_que: textoOMarcador,
    momento: textoOMarcador,
    lo_que_me_dejo: textoOMarcador,
    imagen: z.string().optional(),
    orden: z.number().int(),
  }),
});

const perfil = defineCollection({
  loader: yaml('perfil'),
  schema: z.object({
    nombre: z.string(),
    nombre_completo: z.string(),
    titulo_jugador: textoOMarcador,
    ciudad: z.string(),
    carrera: z.string(),
    universidad: z.string(),
    universidad_corta: z.string(),
    ciclo: z.number().int().min(1),
    ciclos_totales: z.number().int().min(1),
    sobre_mi: textoOMarcador,
    enlaces: z.object({
      github: textoOMarcador,
      correo: textoOMarcador,
      linkedin: textoOMarcador,
      cv: textoOMarcador,
    }),
  }),
});

export const collections = { proyectos, historial, certificados, cursos, arsenal, favoritos, perfil };
