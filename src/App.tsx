import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from  './components/footer/Footer';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';

// Páginas simples para teste
const Home = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div className="text-center max-w-2xl">
      <h1 className="text-4xl font-bold text-[#02735E] mb-6">SafeNest 👻</h1>
      <p className="text-lg text-gray-600 mb-8">
        Seu espaço seguro para bem-estar emocional
      </p>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-[#038C73] mb-4">
          ✅ Navbar e Footer Funcionando!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div>
            <h3 className="font-semibold text-[#02735E] mb-2">Navegação:</h3>
            <ul className="space-y-1 text-gray-700">
              <li>• Sobre Nós</li>
              <li>• Categoria</li>
              <li>• Apólice</li>
              <li>• Cadastro</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#02735E] mb-2">Recursos:</h3>
            <ul className="space-y-1 text-gray-700">
              <li>• Design Responsivo</li>
              <li>• Cores da Paleta</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SobreNos = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-[#02735E] mb-4">Sobre Nós</h1>
      <p className="text-gray-600">Página em construção</p>
    </div>
  </div>
);

const Apolice = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-[#02735E] mb-4">Apólice</h1>
      <p className="text-gray-600">Página em construção</p>
    </div>
  </div>
);

const Cadastro = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-[#02735E] mb-4">Cadastro</h1>
      <p className="text-gray-600">Página em construção</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/categoria" element={<ListaCategorias />} />
            <Route path="/apolice" element={<Apolice />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;