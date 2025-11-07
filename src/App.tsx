import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import EditarCategoria from './components/categoria/editarcategoria/EditarCategoria';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { default as Apolice, default as ApolicePagina } from './pages/apolice/Apolicepagina';
import Cadastro from './pages/cadastro/Cadastro';
import CadastroPagina from './pages/cadastro/Cadastropagina';
import CategoriaPagina from './pages/categoria/Categoriapagina';
import Home from './pages/home/Home';
import SobreNos from './pages/sobrenos/SobreNos';
import DeletarApolice from './components/apolice/deletarapolice/DeletarApolice';
import EditarApolice from './components/apolice/editarapolice/EditarApolice';
import FormApolice from './components/apolice/formapolice/FormApolice';
import ListaApolices from './components/apolice/listaapolice/ListaApolice';
import { ToastContainer } from 'react-toastify';



// Páginas simples para teste


function App() {
  return (
    <Router>
      <ToastContainer />
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
            <Route path="/apolices" element={<ApolicePagina />} />    {/*pagina*/}
            <Route path="/apolice" element={<Apolice />} />           {/*componente*/}
            <Route path="/apolices/listar" element={<ListaApolices />} />
            <Route path="/apolices/cadastrar" element={<FormApolice />} />
            <Route path="/apolices/editar/:id" element={<EditarApolice />} />
            <Route path="/apolices/deletar/:id" element={<DeletarApolice />} />

            
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