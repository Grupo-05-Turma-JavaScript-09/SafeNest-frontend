import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrar } from "../../services/Service";
import { ClipLoader } from "react-spinners";
import type Usuario from "../../models/Usuario";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {
  const navigate = useNavigate();

  // Estado inicial do usuário
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    idade: undefined as unknown as number, // não exibe 0 no input
  });

  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Atualização do estado (com validação de idade)
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === "idade") {
      const idadeNum = Number(value);

      // Só atualiza se for > 0 ou campo vazio | validação de faixa etária
      if (value === "" || (idadeNum > 0 && idadeNum <= 125)) {
        setUsuario({ ...usuario, idade: idadeNum });
      } else if (idadeNum > 125) {
        ToastAlerta("A idade máxima permitida é 125 anos.", "erro")
      }

      return;
    }

    setUsuario({
      ...usuario,
      [name]: value,
    });
  }

  function retornar() {
    navigate("/apolice");
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (usuario.senha !== confirmarSenha) {
      ToastAlerta("As senhas não coincidem!", "erro")
      setIsLoading(false);
      return;
    }

    try {
      await cadastrar("/usuarios/", usuario, setUsuario);
      ToastAlerta("Usuário cadastrado com sucesso!", "sucesso")
      retornar();
    } catch (error) {
      ToastAlerta("Erro ao cadastrar usuário!", "erro")
    }

    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#36BFB1] to-[#02735E] py-12 px-4 flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center mx-auto max-w-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <span className="text-3xl">👤</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Criar Conta
          </h1>
          <p className="text-white/80">
            Preencha os dados abaixo para criar seu usuário no sistema
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full">
          <form className="flex flex-col gap-6" onSubmit={cadastrarNovoUsuario}>
            
            {/* Nome */}
            <div className="flex flex-col gap-3">
              <label htmlFor="nome" className="text-lg font-semibold text-[#014034]">
                Nome completo
              </label>
              <input
                type="text"
                name="nome"
                value={usuario.nome}
                onChange={atualizarEstado}
                placeholder="Ex: Maria Souza"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-[#36BFB1] focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Usuário */}
            <div className="flex flex-col gap-3">
              <label htmlFor="usuario" className="text-lg font-semibold text-[#014034]">
                Usuário
              </label>
              <input
                type="text"
                name="usuario"
                value={usuario.usuario}
                onChange={atualizarEstado}
                placeholder="Ex: maria@gmail.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-[#36BFB1] focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Idade */}
            <div className="flex flex-col gap-3">
              <label htmlFor="idade" className="text-lg font-semibold text-[#014034]">
                Idade
              </label>
              <input
                type="number"
                name="idade"
                value={usuario.idade || ""} // evita mostrar 0
                onChange={atualizarEstado}
                placeholder="Ex: 25"
                min={1} // bloqueia negativos
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-[#36BFB1] focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Senha */}
            <div className="flex flex-col gap-3">
              <label htmlFor="senha" className="text-lg font-semibold text-[#014034]">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                value={usuario.senha}
                onChange={atualizarEstado}
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-[#36BFB1] focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Confirmar Senha */}
            <div className="flex flex-col gap-3">
              <label htmlFor="confirmarSenha" className="text-lg font-semibold text-[#014034]">
                Confirmar Senha
              </label>
              <input
                type="password"
                name="confirmarSenha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                placeholder="Repita sua senha"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-[#36BFB1] focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Botões */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button
                type="button"
                onClick={retornar}
                className="w-full py-3 border border-gray-300 text-gray-600 rounded-xl font-semibold 
                hover:bg-gray-50 transition-all duration-200"
              >
                ← Voltar para Home
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-[#36BFB1] to-[#02735E] text-white rounded-xl font-bold text-lg 
                hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 
                hover:from-[#2ba89a] hover:to-[#02624f] disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <ClipLoader color="#ffffff" size={20} />
                    <span>Processando...</span>
                  </>
                ) : (
                  <span>Cadastrar</span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Info Footer */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-md">
          <p className="text-white text-center text-sm">
            <span className="font-bold">Dica:</span> Escolha uma senha forte e guarde seus dados com segurança.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
