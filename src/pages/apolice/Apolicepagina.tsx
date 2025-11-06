import { Link } from "react-router-dom";

const ApolicePagina = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#36BFB1] to-[#02735E] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Minhas Apólices 📄
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Gerencie todas as suas apólices de seguro em um só lugar
          </p>
        </div>

        {/* Cards de Navegação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card Nova Apólice */}
          <Link 
            to="/apolice/cadastrar" 
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#36BFB1] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📝</div>
                <h3 className="text-2xl font-bold text-[#014034] mb-3">
                  Nova Apólice
                </h3>
                <p className="text-gray-600 mb-4">
                  Cadastre uma nova apólice de seguro no sistema
                </p>
                <div className="bg-[#36BFB1] text-white px-6 py-2 rounded-full font-semibold inline-block group-hover:bg-[#02735E] transition-colors">
                  Cadastrar Agora
                </div>
              </div>
            </div>
          </Link>

          {/* Card Listar Apólices */}
          <Link 
            to="/apolice/listar" 
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#02735E] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📋</div>
                <h3 className="text-2xl font-bold text-[#014034] mb-3">
                  Listar Apólices
                </h3>
                <p className="text-gray-600 mb-4">
                  Visualize e gerencie todas as suas apólices cadastradas
                </p>
                <div className="bg-[#36BFB1] text-white px-6 py-2 rounded-full font-semibold inline-block group-hover:bg-[#02735E] transition-colors">
                  Ver Todas
                </div>
              </div>
            </div>
          </Link>

        </div>


        {/* Apólices Recentes (Placeholder) */}
        <div className="bg-[#014034] rounded-2xl p-8 border border-[#36BFB1]/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🕒 Suas Apólices Recentes
          </h3>
          
          <div className="text-center text-white/80 mb-6">
            <p>Nenhuma apólice cadastrada ainda</p>
            <p className="text-sm mt-2">Comece cadastrando sua primeira apólice!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🏠</div>
              <div className="text-white font-semibold">Vida em casa</div>
            
            </div>

            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🚗</div>
              <div className="text-white font-semibold">Dirija com Deus</div>
            </div>

            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
              <div className="text-white font-semibold">Vida</div>  
            </div>
          </div>
        </div>

        {/* Mensagem de Humor */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
            <p className="text-lg font-semibold text-[#014034] mb-2">
              👻 "Suas apólices estão mais organizadas que a gaveta de meias!"
            </p>
            <p className="text-gray-600">
              (E isso é um grande elogio, confia!)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApolicePagina;