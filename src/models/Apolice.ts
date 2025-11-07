import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Apolice {
  id: number | string;
  numero_apolice: string;
  valor_premio: number;
  cobertura: number;
  data: string; 

  usuario?: Usuario | null;   
  categoria?: Categoria | null; 
}