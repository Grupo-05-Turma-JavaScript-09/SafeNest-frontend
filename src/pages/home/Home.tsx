import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleVerApolices = () => {
    navigate("/apolice");
  };

  return (
    <div className="min-h-screen bg-[#36BFB1]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Text Content */}
            <div className="flex-1 text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Protegendo seu 
                <span className="block text-[#014034] drop-shadow-lg">amanhã, hoje!</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                Suas apólices organizadas, sua vida mais tranquila. 
                <span className="block text-[#014034] font-semibold">Ou pelo menos tentando...</span>
              </p>

              {/* Stats with Humor */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-[#02735E] backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">📈</div>
                  <div className="text-sm">Menos dor de cabeça</div>
                  <div className="text-xs opacity-75">(prometemos!)</div>
                </div>
                <div className="bg-[#02735E] backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">🕒</div>
                  <div className="text-sm">Mais tempo livre</div>
                  <div className="text-xs opacity-75">(para netflix)</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleVerApolices}
                  className="bg-white text-[#02735E] px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
                >
                  🚀 Ver Minhas Apólices
                </button>
              </div>

              {/* Humor Section */}
              <div className="mt-8 bg-[#014034] backdrop-blur-sm rounded-2xl p-6">
                <p className="text-center text-lg">
                  <span className="text-[#36BFB1] font-bold">💡 Sabia?</span> Suas apólices conosco estão 
                  <span className="font-bold"> mais seguras</span> que aquele café que você esqueceu em cima do carro...
                </p>
              </div>
            </div>

            {/* GIF Section */}
            <div className="flex-1 flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-3">
                  <img 
                    src="https://i.imgur.com/0V9MTBX.gif" 
                    alt="Gestão de seguros simplificada"
                    className="rounded-xl w-full max-w-md"
                  />
                </div>
              </div>

              {/* Frase com destaque */}
              <div className="text-center">
                <div className="inline-flex items-center bg-[#014034] text-white px-6 py-3 rounded-2xl shadow-lg border-2 border-white/20">
                  <span className="text-xl mr-2">👻</span>
                  <span className="font-semibold text-lg">Paz para você e seu fantasma!</span>
                  <span className="text-xl ml-2">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#02735E] mb-16">
            Por que ser organizado é 
            <span className="text-[#36BFB1]"> tão bom?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-[#014034] mb-3">Tudo em Um Lugar</h3>
              <p className="text-gray-600">
                Suas apólices reunidas, sem aquela busca desesperada no fundo da gaveta...
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#014034] mb-3">Acesso Instantâneo</h3>
              <p className="text-gray-600">
                Mais rápido que lembrar onde guardou a chave do carro!
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-6xl mb-4">😴</div>
              <h3 className="text-xl font-bold text-[#014034] mb-3">Paz de Espírito</h3>
              <p className="text-gray-600">
                Durma tranquilo sabendo que tudo está sob controle. Ou quase tudo...
              </p>
            </div>
          </div>

          {/* Bottom Humor */}
          <div className="mt-16 text-center">
            <div className="bg-[#36BFB1] text-white rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-2xl font-bold mb-4">
                🎯 "A vida já é complicada demais..."
              </p>
              <p className="text-lg opacity-90">
                Deixe que a gente cuida da parte chata. Você cuida da parte divertida!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;