import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Apolice from "../../../models/Apolice";
import type Categoria from "../../../models/Categoria";
import type Usuario from "../../../models/Usuario";
import { cadastrar, buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormApolice() {
  const navigate = useNavigate();

  const [apolice, setApolice] = useState<Apolice>({
    id: 0,
    numero_apolice: "",
    valor_premio: undefined,
    cobertura: undefined,
    data: new Date().toISOString(),
    categoria: undefined,
  } as Apolice);

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Buscar categorias e usuários ao carregar
  useEffect(() => {
    buscar("/categorias", setCategorias);
    buscar("/usuarios", setUsuarios);
  }, []);

  // Atualiza campos simples
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = e.target;
    setApolice((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? undefined : Number(value)) : value,
    }));
  }

  // Atualização do select de categoria
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

  // Atualização do select de usuário
  function selecionarUsuario(e: ChangeEvent<HTMLSelectElement>) {
    const idUser = e.target.value;

    if (!idUser) {
      setApolice((prev) => ({
        ...prev,
        usuario: undefined,
      }));
      return;
    }

    const user = usuarios.find((u) => String(u.id) === idUser);

    if (user) {
      setApolice((prev) => ({
        ...prev,
        usuario: user,
      }));
    }
  }

  // Enviar formulário
  async function enviarFormulario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await cadastrar("/apolices", apolice, () => {});
      ToastAlerta("Apólice cadastrada com sucesso!", "sucesso");
      navigate("/apolices");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Erro ao cadastrar apólice:", err);
      const mensagemErro = err.response?.data?.message || err.message || "Erro desconhecido";
      ToastAlerta(`Erro ao cadastrar apólice: ${mensagemErro}`, "erro");
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
          value={new Date(apolice.data).toISOString().slice(0, 10)}
          onChange={(e) =>
            setApolice((prev) => ({
              ...prev,
              data: new Date(e.target.value).toISOString(),
            }))
          }
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        {/* SELECT DE USUÁRIO */}
        <select
          name="usuario"
          value={String(apolice.usuario?.id ?? "")}
          onChange={selecionarUsuario}
          className="border-2 border-gray-300 p-3 rounded-lg"
        >
          <option value="">Selecione o usuário...</option>

          {usuarios.map((user) => (
            <option key={user.id} value={String(user.id)}>
              {user.nome} ({user.usuario})
            </option>
          ))}
        </select>

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
            "Cadastrar Apólice"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormApolice;