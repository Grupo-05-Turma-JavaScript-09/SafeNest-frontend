import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import Home from './pages/home/Home';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import CategoriaPagina from './pages/categoria/Categoriapagina';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import SobreNos from './pages/sobrenos/SobreNos';
import ApolicePagina from './pages/apolice/Apolicepagina';
import Apolice from './pages/apolice/Apolicepagina';


// Páginas simples para teste

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
            
            {/* Categoria */}
            <Route path="/categoria" element={<CategoriaPagina />} /> 
            <Route path="/categoria/listar" element={<ListaCategorias />} />
            <Route path="/categoria/cadastrar" element={<FormCategoria />} />

            {/* Apólice */}
            <Route path="/apolice" element={<ApolicePagina />} />
            
            {/* Rotas antigas (mantidas) */}
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            
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