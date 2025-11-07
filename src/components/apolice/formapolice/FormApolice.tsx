import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Apolice from "../../../models/Apolice";
import { cadastrar } from "../../../services/Service";

function FormApolice() {
  const navigate = useNavigate();

  const [apolice, setApolice] = useState<Apolice>({
    id: 0,
    numero_apolice: "",
    valor_premio: 0,
    cobertura: 0,
    data: new Date().getTime(),
    categoria: null,
  });

  const [usuarioId, setUsuarioId] = useState<number>(0);
  const [categoriaId, setCategoriaId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  // Atualiza campos simples
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = e.target;
    setApolice({
      ...apolice,
      [name]: type === "number" ? parseFloat(value) || 0 : value,
    } as Apolice);
  }

  // Enviar formulário
  async function enviarFormulario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Monta o objeto completo para envio
      const novaApolice = {
        ...apolice,
        usuario: usuarioId ? { id: usuarioId } : null,
        categoria: categoriaId ? { id: categoriaId } : null,
      };

      await cadastrar("/apolices", novaApolice, () => {});
      alert("Apólice cadastrada com sucesso!");
      navigate("/apolices");
    } catch (err) {
      console.error("Erro ao cadastrar apólice:", err);
      alert("Erro ao cadastrar apólice.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Cadastrar Apólice</h1>

      <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
        <input
          type="text"
          name="numero_apolice"
          placeholder="Número da Apólice"
          value={apolice.numero_apolice}
          onChange={atualizarEstado}
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        <input
          type="number"
          name="valor_premio"
          placeholder="Valor do Prêmio"
          value={apolice.valor_premio || ""}
          onChange={atualizarEstado}
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        <input
          type="number"
          name="cobertura"
          placeholder="Cobertura"
          value={apolice.cobertura || ""}
          onChange={atualizarEstado}
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        <input
          type="date"
          name="data"
          value={new Date(apolice.data).toISOString().slice(0, 10)}
          onChange={(e) =>
            setApolice({
              ...apolice,
              data: new Date(e.target.value).getTime(),
            })
          }
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        {/* Campo de ID do Usuário */}
        <input
          type="number"
          name="usuarioId"
          placeholder="ID do Usuário"
          value={usuarioId || ""}
          onChange={(e) => setUsuarioId(parseInt(e.target.value) || 0)}
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        {/* Campo de ID da Categoria */}
        <input
          type="number"
          name="categoriaId"
          placeholder="ID da Categoria"
          value={categoriaId || ""}
          onChange={(e) => setCategoriaId(parseInt(e.target.value) || 0)}
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 rounded-lg flex justify-center"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            "Cadastrar Apólice"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormApolice;
