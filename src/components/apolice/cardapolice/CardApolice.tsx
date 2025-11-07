import { Link } from "react-router-dom";
import type Apolice from "../../../models/Apolice";

interface CardApoliceProps {
  apolice: Apolice;
}

function CardApolice({ apolice }: CardApoliceProps) {
  const dataFormatada = apolice.data
    ? new Date(apolice.data).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "—";

  const premio = Number(apolice.valor_premio) || 0;
  const cobertura = Number(apolice.cobertura) || 0;

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <header className="py-4 px-6 bg-linear-to-r from-[#02735E] to-[#038C73] text-white font-bold text-xl text-center">
        Apólice Nº {apolice.numero_apolice ?? "—"}
      </header>

      <div className="p-6 bg-linear-to-b from-gray-50 to-white h-full flex flex-col justify-center gap-3">
        <p className="text-gray-700 text-lg text-center font-medium">
          <span className="font-semibold text-[#02735E]">Valor do Prêmio:</span>{" "}
          R$ {premio.toFixed(2)}
        </p>

        <p className="text-gray-700 text-lg text-center font-medium">
          <span className="font-semibold text-[#02735E]">Cobertura:</span>{" "}
          R$ {cobertura.toFixed(2)}
        </p>

        <p className="text-gray-700 text-lg text-center font-medium">
          <span className="font-semibold text-[#02735E]">Data:</span> {dataFormatada}
        </p>

        <p className="text-gray-700 text-lg text-center font-medium">
          <span className="font-semibold text-[#02735E]">Categoria:</span>{" "}
          {apolice.categoria?.nome ?? "—"}
        </p>

        <p className="text-gray-700 text-lg text-center font-medium">
          <span className="font-semibold text-[#02735E]">Usuário:</span>{" "}
          {apolice.usuario?.nome ?? "—"}
        </p>
      </div>

      <div className="flex border-t border-gray-200">
        <Link
          to={`/apolices/editar/${apolice.id}`}
          className="w-full text-white bg-[#36BFB1] hover:bg-[#02735E] flex items-center justify-center py-3 transition-all duration-300 hover:scale-105"
        >
          <button className="font-semibold flex items-center gap-2">
            <span>✏️</span>Editar
          </button>
        </Link>

        <Link
          to={`/apolices/deletar/${apolice.id}`}
          className="w-full text-white bg-[#014034] hover:bg-red-600 flex items-center justify-center py-3 transition-all duration-300 hover:scale-105"
        >
          <button className="font-semibold flex items-center gap-2">
            <span>🗑️</span>Deletar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardApolice;
