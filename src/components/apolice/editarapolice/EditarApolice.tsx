import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Apolice from "../../../models/Apolice";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function formatarDataInput(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toISOString().slice(0, 10);
}

function EditarApolice() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [apolice, setApolice] = useState<Apolice>({} as Apolice);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Buscar apólice + categorias
  useEffect(() => {
    if (id) {
      buscar(`/apolices/${id}`, setApolice);
    }

    buscar("/categorias", setCategorias);
  }, [id]);

  // REMOVIDO O useEffect QUE ESTAVA CAUSANDO CONFLITO

  // Atualização de inputs comuns
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = e.target;

   setApolice((prev) => ({
    ...prev,
    [name]:
      type === "number"
        ? value === ""
          ? "" // ← mantém o campo vazio se apagado
          : Number(value)
        : value,
  }));
  }

  // Atualização exclusiva do select de categoria
  function selecionarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const idCat = e.target.value;
    
    if (!idCat) {
      setApolice((prev) => ({
        ...prev,
        categoria: undefined,
      }));
      return;
    }

    const cat = categorias.find((c) => String(c.id) === idCat);

    if (cat) {
      setApolice((prev) => ({
        ...prev,
        categoria: cat,
      }));
    }
  }

  // Enviar PUT
  async function enviarFormulario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!id) {
      ToastAlerta("ID da apólice não encontrado!", "erro");
      return;
    }

    console.log('=== ENVIANDO ATUALIZAÇÃO ===');
    console.log('Dados completos:', JSON.stringify(apolice, null, 2));

    setIsLoading(true);

    try {
      // Tentar com /apolices (sem ID) passando o ID no body
      await atualizar(`/apolices`, apolice, () => {});
      ToastAlerta("Apólice atualizada com sucesso!", "sucesso");
      navigate("/apolices");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("=== ERRO AO ATUALIZAR ===");
      console.error("Erro completo:", err);
      console.error("URL tentada:", err.config?.url);
      console.error("Método:", err.config?.method);
      console.error("Resposta do servidor:", err.response?.data);
      console.error("Status:", err.response?.status);
      
      const mensagemErro = err.response?.data?.message || err.message || "Erro desconhecido";
      ToastAlerta(`Erro ao atualizar apólice: ${mensagemErro}`, "erro");
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
         value={apolice.valor_premio || apolice.valor_premio === 0 ? apolice.valor_premio : ""}
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
            setApolice((prev) => ({
              ...prev,
              data: new Date(e.target.value).toISOString(),
            }))
          }
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        {/* SELECT DE CATEGORIA */}
        <select
          name="categoria"
          value={String(apolice.categoria?.id ?? "")}
          onChange={selecionarCategoria}
          className="border-2 border-gray-300 p-3 rounded-lg"
        >
          <option value="">Selecione a categoria...</option>

          {categorias.map((cat) => (
            <option key={cat.id} value={String(cat.id)}>
              {cat.nome}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 rounded-lg flex justify-center"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            "Salvar Alterações"
          )}
        </button>
      </form>
    </div>
  );
}

export default EditarApolice;