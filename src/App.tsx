import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// Categoria Components
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import EditarCategoria from './components/categoria/editarcategoria/EditarCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';

// Apólice Components
import ListaApolices from './components/apolice/listaapolice/ListaApolice';
import FormApolice from './components/apolice/formapolice/FormApolice';
import EditarApolice from './components/apolice/editarapolice/EditarApolice';
import DeletarApolice from './components/apolice/deletarapolice/DeletarApolice';

// Pages
import Home from './pages/home/Home';
import SobreNos from './pages/sobrenos/SobreNos';
import CategoriaPagina from './pages/categoria/Categoriapagina';
import CadastroPagina from './pages/cadastro/Cadastropagina';
import Cadastro from './pages/cadastro/Cadastro';
import ListarUsuarios from './pages/cadastro/ListarUsuarios';
import { default as ApolicePagina } from './pages/apolice/Apolicepagina';
import { default as Apolice } from './pages/apolice/Apolicepagina';

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* 🏠 home e sobre noss */}
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />

            {/* 📋 Categoria */}
            <Route path="/categoria" element={<CategoriaPagina />} />
            <Route path="/categoria/listar" element={<ListaCategorias />} />
            <Route path="/categoria/cadastrar" element={<FormCategoria />} />
            
            {/* 👥 Usuários */}
            <Route path="/cadastro" element={<CadastroPagina />} />
            <Route path="/cadastro/usuario" element={<Cadastro />} />
            <Route path="/cadastro/listar" element={<ListarUsuarios />} />

            {/* 📄 Apólice */}
            <Route path="/apolices" element={<ApolicePagina />} />
            <Route path="/apolice" element={<Apolice />} />
            <Route path="/apolices/listar" element={<ListaApolices />} />
            <Route path="/apolices/cadastrar" element={<FormApolice />} />
            <Route path="/apolices/editar/:id" element={<EditarApolice />} />
            <Route path="/apolices/deletar/:id" element={<DeletarApolice />} />

            {/* 🔄 Rotas Legadas (Compatibilidade) */}
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/editarcategoria/:id" element={<EditarCategoria />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;