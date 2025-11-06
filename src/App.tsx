import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import Home from './pages/home/Home';

// Páginas simples para teste
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