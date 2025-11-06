import { Link } from "react-router-dom";

const CategoriaPagina = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#36BFB1] to-[#02735E] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Gerenciar Categorias 👻
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Centralize todas as operações de categorias do SafeNest
          </p>
        </div>

        {/* Cards de Navegação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card Cadastrar */}
          <Link 
            to="/categoria/cadastrar" 
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#36BFB1] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">➕</div>
                <h3 className="text-2xl font-bold text-[#014034] mb-3">
                  Cadastrar Nova Categoria
                </h3>
                <p className="text-gray-600 mb-4">
                  Adicione uma nova categoria ao sistema de seguros
                </p>
                <div className="bg-[#36BFB1] text-white px-6 py-2 rounded-full font-semibold inline-block group-hover:bg-[#02735E] transition-colors">
                  Acessar Cadastro
                </div>
              </div>
            </div>
          </Link>

          {/* Card Listar */}
          <Link 
            to="/categoria/listar" 
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#02735E] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📋</div>
                <h3 className="text-2xl font-bold text-[#014034] mb-3">
                  Listar Categorias
                </h3>
                <p className="text-gray-600 mb-4">
                  Visualize, edite e gerencie todas as categorias cadastradas
                </p>
                <div className="bg-[#36BFB1] text-white px-6 py-2 rounded-full font-semibold inline-block group-hover:bg-[#02735E] transition-colors">
                  Ver Lista Completa
                </div>
              </div>
            </div>
          </Link>

        </div>


        {/* Mensagem de Humor */}
        <div className="mt-8 text-center">
          <div className="bg-[#014034] text-white rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold mb-2">
              🎯 "Organizar categorias nunca foi tão fantasmagórico!"
            </p>
            <p className="text-white/80">
              Seu fantasma agradece pela organização! 👻✨
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoriaPagina;