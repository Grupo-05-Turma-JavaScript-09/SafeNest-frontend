const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 text-xl font-bold mb-4">
              <span>👻</span>
              <span>SafeNest</span>
            </div>
            <p className="text-white/90 leading-relaxed">
              Cuidando do seu bem-estar emocional com tecnologia e acolhimento.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-[#36BFB1] font-semibold mb-4 text-lg">Navegação</h4>
            <div className="space-y-2">
              <a href="/sobre-nos" className="block text-white/90 hover:text-white transition-colors duration-300">
                Sobre Nós
              </a>
              <a href="/categoria" className="block text-white/90 hover:text-white transition-colors duration-300">
                Categoria
              </a>
              <a href="/apolice" className="block text-white/90 hover:text-white transition-colors duration-300">
                Apólice
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-[#36BFB1] font-semibold mb-4 text-lg">Contato</h4>
            <div className="space-y-2 text-white/90">
              <p>contato@safenest.com</p>
              <p>(11) 99999-9999</p>
              <div className="flex space-x-4 mt-3">
                <button className="hover:scale-110 transition-transform duration-300 text-xl">
                  📱
                </button>
                <button className="hover:scale-110 transition-transform duration-300 text-xl">
                  💬
                </button>
                <button className="hover:scale-110 transition-transform duration-300 text-xl">
                  📧
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/80">
            &copy; 2024 SafeNest. Todos os direitos reservados.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;