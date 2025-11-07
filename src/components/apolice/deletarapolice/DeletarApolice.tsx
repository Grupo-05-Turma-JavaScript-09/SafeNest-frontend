/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Apolice from "../../../models/Apolice";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarApolice() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [apolice, setApolice] = useState<Apolice | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);

  async function buscarPorId(idParam: string) {
  try {
    await buscar(`/apolices/${idParam}`, (data: any) => setApolice(data));
  } catch (err) {
    console.error("Erro ao buscar apólice:", err);
    ToastAlerta("Erro ao carregar apólice.", "erro");
  }
}

  async function deletarApolice() {
    if (!id) return;
    setIsLoading(true);
    try {
      await deletar(`/apolices/${id}`);
      ToastAlerta("Apólice excluída com sucesso!", "sucesso");
      navigate("/apolices");
    } catch (err) {
      console.error("Erro ao deletar apólice:", err);
      ToastAlerta("Erro ao deletar apólice.", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  if (!apolice) {
    return (
      <div className="container w-1/3 mx-auto text-center py-8">
        <p>Carregando apólice...</p>
      </div>
    );
  }

  const dataFormatada = apolice.data
    ? new Date(apolice.data).toLocaleDateString("pt-BR")
    : "--";

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Apólice</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar esta apólice?
      </p>

      <div className="flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-[#02735E] text-white font-bold text-2xl text-center">
          Apólice Nº {apolice.numero_apolice ?? "--"}
        </header>

        <div className="p-8 bg-slate-100 text-lg space-y-2">
          <p>
            <span className="font-semibold text-[#02735E]">Valor do Prêmio:</span>{" "}
            R$ {(Number(apolice.valor_premio) || 0).toFixed(2)}
          </p>
          <p>
            <span className="font-semibold text-[#02735E]">Cobertura:</span>{" "}
            R$ {(Number(apolice.cobertura) || 0).toFixed(2)}
          </p>
          <p>
            <span className="font-semibold text-[#02735E]">Data:</span> {dataFormatada}
          </p>
          <p>
            <span className="font-semibold text-[#02735E]">Categoria:</span>{" "}
            {apolice.categoria?.nome ?? "--"}
          </p>
          <p>
            <span className="font-semibold text-[#02735E]">Usuário:</span>{" "}
            {apolice.usuario?.nome ?? "--"}
          </p>
        </div>

        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={() => navigate("/apolices")}
          >
            Não
          </button>

          <button
            className="w-full text-slate-100 bg-[#02735E] hover:bg-[#014034] flex items-center justify-center py-2"
            onClick={deletarApolice}
            disabled={isLoading}
          >
            {isLoading ? <ClipLoader color="#ffffff" size={24} /> : <span>Sim</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarApolice;
