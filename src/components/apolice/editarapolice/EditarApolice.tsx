import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Apolice from "../../../models/Apolice";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar } from "../../../services/Service";

function formatarDataInput(timestamp?: number) {
  if (!timestamp) return "";
  // retorna "YYYY-MM-DD"
  return new Date(timestamp).toISOString().slice(0, 10);
}

function EditarApolice() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [apolice, setApolice] = useState<Apolice>({} as Apolice);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      buscar(`/apolices/${id}`, setApolice);
    }
    // buscar categorias
    buscar("/categorias", setCategorias);
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target as HTMLInputElement;
    setApolice({
      ...apolice,
      [name]: type === "number" ? parseFloat(value) || 0 : value,
    } as Apolice);
  }

  function selecionarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const idCat = Number(e.target.value);
    const cat = categorias.find((c) => c.id === idCat) || null;
    setApolice({ ...apolice, categoria: cat ?? undefined } as Apolice);
  }

  async function enviarFormulario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!id) return;
    setIsLoading(true);
    try {
      // enviar PUT para /apolices/{id}
      await atualizar(`/apolices/${id}`, apolice, () => {});
      alert("Apólice atualizada com sucesso!");
      navigate("/apolices");
    } catch (err) {
      console.error("Erro ao atualizar apólice:", err);
      alert("Erro ao atualizar apólice.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Editar Apólice</h1>

      <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
        <input
          type="text"
          name="numero_apolice"
          placeholder="Número da Apólice"
          value={apolice.numero_apolice || ""}
          onChange={atualizarEstado}
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        <input
          type="number"
          name="valor_premio"
          placeholder="Valor do Prêmio"
          value={apolice.valor_premio ?? ""}
          onChange={atualizarEstado}
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        <input
          type="number"
          name="cobertura"
          placeholder="Cobertura"
          value={apolice.cobertura ?? ""}
          onChange={atualizarEstado}
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        <input
          type="date"
          name="data"
          value={formatarDataInput(apolice.data)}
          onChange={(e) =>
            setApolice({ ...apolice, data: new Date(e.target.value).getTime() })
          }
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        {/* Select de categoria */}
        <select
          name="categoria"
          value={apolice.categoria?.id ?? ""}
          onChange={selecionarCategoria}
          className="border-2 border-gray-300 p-3 rounded-lg"
        >
          <option value="">Selecione a categoria...</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nome}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 rounded-lg flex justify-center"
        >
          {isLoading ? <ClipLoader color="#ffffff" size={24} /> : "Salvar Alterações"}
        </button>
      </form>
    </div>
  );
}

export default EditarApolice;
