import { useNavigate } from "react-router-dom";

const SobreNos = () => {
  const navigate = useNavigate();

  const handleComecarAgora = () => {
    navigate("/cadastro");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#36BFB1] to-[#02735E] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Sobre o SafeNest 👻
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            <strong>"Protegendo seu amanhã, hoje!"</strong> - Porque o futuro merece 
            tanto cuidado quanto o presente, mesmo que seu fantasma interno precise de 
            uma ajudinha para se organizar...
          </p>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Missão */}
          <div className="bg-[#014034] rounded-2xl p-8 border border-[#36BFB1]/30 hover:bg-[#014034]/90 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Nossa Missão</h3>
            <p className="text-white/90 text-center">
              Simplificar a gestão de seguros de vida, transformando complexidade em 
              tranquilidade. Porque papéis perdidos deveriam existir só nos filmes de terror.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-[#014034] rounded-2xl p-8 border border-[#36BFB1]/30 hover:bg-[#014034]/90 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🔭</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Nossa Visão</h3>
            <p className="text-white/90 text-center">
              Ser a plataforma mais confiável e descomplicada para gerenciar sua 
              segurança financeira. Menos sustos, mais proteção!
            </p>
          </div>

          {/* Valores */}
          <div className="bg-[#014034] rounded-2xl p-8 border border-[#36BFB1]/30 hover:bg-[#014034]/90 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">💎</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Nossos Valores</h3>
            <ul className="text-white/90 space-y-2 text-center">
              <li>• Transparência (sem fantasmas nos detalhes)</li>
              <li>• Inovação (tecnologia a favor da paz)</li>
              <li>• Confiança (seu descanso é nossa prioridade)</li>
            </ul>
          </div>

        </div>

        {/* História */}
        <div className="relative mb-16">
          <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text Content */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#014034] mb-6">
                  Nossa Jornada 🚀
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    <span className="font-bold text-[#02735E]">2018</span> - A ideia nasceu 
                    ao perceber que gerenciar seguros era mais complicado que decifrar 
                    hieróglifos egípcios...
                  </p>
                  <p className="text-lg leading-relaxed">
                    <span className="font-bold text-[#02735E]">2020</span> - Primeiro protótipo: 
                    uma planilha Excel que assustava mais que filme de terror.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <span className="font-bold text-[#02735E]">2023</span> - SafeNest ganha vida: 
                    tecnologia de ponta com um toque de humor fantasmagórico.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold text-[#014034]">
                    Hoje - Transformando sustos em sorrisos, um seguro de cada vez!
                  </p>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="bg-gradient-to-br from-[#36BFB1] to-[#014034] flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <img 
                    src="https://i.imgur.com/lN3Nq72.png" 
                    alt="SafeNest Growth" 
                    className="w-40 h-40 mx-auto mb-4 rounded-lg object-cover"
                  />
                  <p className="text-xl font-bold">+10k</p>
                  <p className="text-white/80">vidas protegidas</p>
                  <div className="w-24 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
                  <p className="text-white/80 mt-2">e crescendo...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time/Equipe */}
        <div className="bg-[#014034] rounded-2xl p-8 border border-[#36BFB1]/30">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Nosso Time 👥
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="text-center group">
              <div className="bg-[#36BFB1] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h4 className="text-white font-semibold">Desenvolvedores</h4>
              <p className="text-white/80 text-sm">Os magos do código</p>
            </div>

            <div className="text-center group">
              <div className="bg-[#36BFB1] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-white font-semibold">Designers</h4>
              <p className="text-white/80 text-sm">Artistas da experiência</p>
            </div>

            <div className="text-center group">
              <div className="bg-[#36BFB1] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-white font-semibold">Especialistas</h4>
              <p className="text-white/80 text-sm">Gurus dos seguros</p>
            </div>

            <div className="text-center group">
              <div className="bg-[#36BFB1] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👻</span>
              </div>
              <h4 className="text-white font-semibold">Fantasma Chefe</h4>
              <p className="text-white/80 text-sm">O verdadeiro inspirador</p>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-[#014034] text-white rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para transformar sua experiência com seguros?
            </h3>
            <p className="text-white/90 mb-6">
              Junte-se a milhares de pessoas que já dormem mais tranquilos sabendo 
              que suas apólices estão em boas mãos (e bons servidores!).
            </p>
            <button 
              onClick={handleComecarAgora}
              className="bg-[#36BFB1] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#02735E] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🚀 Começar Agora
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SobreNos;