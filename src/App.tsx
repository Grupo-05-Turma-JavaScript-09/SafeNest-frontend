import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import ListaApolice from "./components/apolice/listaapolice/ListaApolice"
import FormApolice from "./components/apolice/formapolice/FormApolice"
import DeletarApolice from "./components/apolice/deletarapolice/DeletarApolice"
import Footer from "./components/footer/Footer"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/categorias" element={<ListaCategorias />}/>
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/apolices" element={<ListaApolice />} />
            <Route path="/cadastrarapolice" element={<FormApolice />} />
            <Route path="/editarapolice/:id" element={<FormApolice />} />
            <Route path="/deletarapolice/:id" element={<DeletarApolice />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
