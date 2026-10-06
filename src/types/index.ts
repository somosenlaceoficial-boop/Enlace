export interface Proyecto {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  url: string;
  boton: string;
  activo: boolean;
  orden: number;
  destacado: boolean;
}

export type Service = {
  num: string;
  title: string;
  desc: string;
};

export type BusinessType = {
  label: string;
};

export type Step = {
  num: string;
  title: string;
  desc: string;
};
