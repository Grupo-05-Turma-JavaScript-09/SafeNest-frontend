
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, atualizar } from "../../../services/Service";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

function EditarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      alert("Erro ao buscar categoria.");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function enviarFormulario(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsLoading(true);

  try {
    await atualizar(`/categorias/${id}`, categoria, setCategoria );
    alert("Categoria atualizada com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);
    alert("Erro ao atualizar categoria.");
  }

  setIsLoading(false);
  retornar();

  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Editar Categoria</h1>

      <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
        
        <input
          type="text"
          name="nome"
          placeholder="Nome da categoria"
          value={categoria.nome || ""}
          onChange={atualizarEstado}
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        <textarea
          name="descricao"
          placeholder="Descrição"
          value={categoria.descricao || ""}
          onChange={atualizarEstado}
          className="border-2 border-gray-300 p-3 rounded-lg h-32"
        />

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

export default EditarCategoria;
