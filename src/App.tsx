import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import Home from './pages/home/Home';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import CategoriaPagina from './pages/categoria/Categoriapagina';
import Cadastro from './pages/cadastro/Cadastro';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import SobreNos from './pages/sobrenos/SobreNos';
import ApolicePagina from './pages/apolice/Apolicepagina';
import Apolice from './pages/apolice/Apolicepagina';
import EditarCategoria from './components/categoria/editarcategoria/EditarCategoria';
import CadastroPagina from './pages/cadastro/Cadastropagina';



// Páginas simples para teste


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
            <Route path="/cadastro" element={<CadastroPagina />} />
            <Route path="/cadastro/usuario" element={<Cadastro />} />


            {/* Apólice */}
            <Route path="/apolice" element={<ApolicePagina />} />
            
            {/* Rotas antigas (mantidas) */}
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/editarcategoria/:id" element={<EditarCategoria />} />
            
            
            <Route path="/apolice" element={<Apolice />} />


            <Route path="/cadastro" element={<CadastroPagina />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;