import { Link } from "react-router-dom";

const CadastroPagina = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#36BFB1] to-[#02735E] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Cadastros 👥
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Gerencie todos os cadastros do sistema SafeNest
          </p>
        </div>

        {/* Cards de Navegação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card Cadastrar Usuário */}
          <Link 
            to="/cadastro/usuario" 
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#36BFB1] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">👤</div>
                <h3 className="text-2xl font-bold text-[#014034] mb-3">
                  Cadastrar Usuário
                </h3>
                <p className="text-gray-600 mb-4">
                  Adicione um novo usuário ao sistema
                </p>
                <div className="bg-[#36BFB1] text-white px-6 py-2 rounded-full font-semibold inline-block group-hover:bg-[#02735E] transition-colors">
                  Novo Usuário
                </div>
              </div>
            </div>
          </Link>

          {/* Card Listar Usuários */}
          <Link 
            to="/cadastro/listar" 
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#02735E] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📋</div>
                <h3 className="text-2xl font-bold text-[#014034] mb-3">
                  Listar Usuários
                </h3>
                <p className="text-gray-600 mb-4">
                  Visualize e gerencie todos os usuários
                </p>
                <div className="bg-[#36BFB1] text-white px-6 py-2 rounded-full font-semibold inline-block group-hover:bg-[#02735E] transition-colors">
                  Ver Usuários
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* Tipos de Cadastro */}
        <div className="bg-[#014034] rounded-2xl p-8 border border-[#36BFB1]/30 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🎯 Áreas de Cadastro
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h4 className="text-white font-bold text-lg mb-2">Usuários</h4>
              <p className="text-white/80 text-sm">
                Cadastro de clientes, corretores e administradores
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📄</div>
              <h4 className="text-white font-bold text-lg mb-2">Apólices</h4>
              <p className="text-white/80 text-sm">
                Contratos de seguro dos clientes
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-white font-bold text-lg mb-2">Beneficiários</h4>
              <p className="text-white/80 text-sm">
                Pessoas vinculadas às apólices
              </p>
            </div>
          </div>
        </div>

        {/* Mensagem de Humor */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
            <p className="text-lg font-semibold text-[#014034] mb-2">
              👻 "Cadastrar no SafeNest é mais fácil que assustar alguém no Halloween!"
            </p>
            <p className="text-gray-600">
              (E muito mais útil também!)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CadastroPagina;