import type { Service, BusinessType, Step } from '@/types';

export const WHATSAPP_URL =
  'https://wa.me/525632442366?text=' +
  encodeURIComponent(
    'Hola, vi Somos ENLACE y me interesa crear un proyecto para mi negocio. Me gustaría contarles mi idea.'
  );

export const EMAIL = 'info@somosenlace.app';
export const EMAIL_LINK = 'mailto:info@somosenlace.app';
export const PHONE_DISPLAY = '56 3244 2366';

export const SERVICES: Service[] = [
  { num: '01', title: 'Páginas Web', desc: 'Sitios que representan tu negocio y generan clientes.' },
  { num: '02', title: 'Catálogos Digitales', desc: 'Muestra tus productos y servicios en una experiencia clara.' },
  { num: '03', title: 'Aplicaciones', desc: 'Sistemas diseñados para las necesidades reales de tu negocio.' },
  { num: '04', title: 'Pedidos', desc: 'Plataformas para que tus clientes compren directamente.' },
  { num: '05', title: 'Soluciones a Medida', desc: 'Lo que tu negocio necesita, construido desde cero.' },
];

export const BUSINESS_TYPES: BusinessType[] = [
  { label: 'Restaurantes' },
  { label: 'Profesionales' },
  { label: 'Tiendas' },
  { label: 'Negocios Locales' },
  { label: 'Servicios' },
  { label: 'Proyectos Especiales' },
];

export const STEPS: Step[] = [
  { num: '01', title: 'Nos cuentas tu idea', desc: 'Escuchamos lo que necesitas y cómo imaginas tu proyecto.' },
  { num: '02', title: 'Diseñamos', desc: 'Creamos la experiencia visual y la estructura de tu solución.' },
  { num: '03', title: 'Construimos', desc: 'Desarrollamos el producto digital con tecnología real.' },
  { num: '04', title: 'Publicamos', desc: 'Tu proyecto está listo para que el mundo lo vea.' },
];

export const NAV_LINKS = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];
