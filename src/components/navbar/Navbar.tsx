import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#02735E] to-[#038C73] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white text-xl font-bold"
          >
            <span>👻</span>
            <span>SafeNest</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Home
            </Link>
            <Link 
              to="/sobre-nos" 
              className="text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Sobre Nós
            </Link>
            <Link 
              to="/categoria" 
              className="text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Categoria
            </Link>
            <Link 
              to="/apolice" 
              className="text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Apólice
            </Link>
            <Link 
              to="/cadastro" 
              className="bg-[#36BFB1] text-white px-4 py-2 rounded-full border-2 border-[#36BFB1] hover:bg-transparent hover:border-white transition-all duration-300 hover:-translate-y-0.5 font-semibold"
            >
              Cadastro
            </Link>
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <div className="space-y-1">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-[#014034] to-[#02735E]">
            <Link 
              to="/" 
              className="text-white block px-3 py-2 hover:bg-[#36BFB1]/20 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/sobre-nos" 
              className="text-white block px-3 py-2 hover:bg-[#36BFB1]/20 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/categoria" 
              className="text-white block px-3 py-2 hover:bg-[#36BFB1]/20 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categoria
            </Link>
            <Link 
              to="/apolice" 
              className="text-white block px-3 py-2 hover:bg-[#36BFB1]/20 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Apólice
            </Link>
            <Link 
              to="/cadastro" 
              className="bg-[#36BFB1] text-white block px-3 py-2 rounded-md text-center font-semibold hover:bg-[#36BFB1]/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cadastro
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;