import type { Apolice } from "./Apolice";


export default interface Categoria {
  nome: string;
  descricao: string;
  apolices: Apolice[] | null;
}