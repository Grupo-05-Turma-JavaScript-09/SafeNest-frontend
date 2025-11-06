import type Categoria from "./Categoria";
import type Usuario from "./Usuario";


export interface Apolice {
  id: number;
  numero_apolice: string;
  valor_premio: number
  cobertura: number;
  data: number;
  usuario?: Usuario[] | null;
  categoria?: Categoria[] | null;
}