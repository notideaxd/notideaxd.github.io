// Enlaces de contacto de la barra lateral.
// Provisional: en la fase 2 estos datos pasan al archivo de perfil en src/content/.
// Un valor entre corchetes es un marcador: el botón se muestra pero no enlaza a nada.

export interface EnlaceContacto {
  id: 'github' | 'correo' | 'linkedin' | 'cv';
  etiqueta: string;
  abreviatura: string;
  url: string;
}

export const contacto: EnlaceContacto[] = [
  { id: 'github', etiqueta: 'GitHub', abreviatura: 'GH', url: 'https://github.com/notideaxd' },
  { id: 'correo', etiqueta: 'Correo', abreviatura: '@', url: '[CORREO]' },
  { id: 'linkedin', etiqueta: 'LinkedIn', abreviatura: 'IN', url: '[URL]' },
  { id: 'cv', etiqueta: 'Currículum', abreviatura: 'CV', url: '[CV]' },
];

export const esMarcador = (valor: string) => valor.startsWith('[') && valor.endsWith(']');
