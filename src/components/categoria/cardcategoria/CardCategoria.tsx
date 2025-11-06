import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
    return (
        <div className='flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
            <header className='py-4 px-6 bg-gradient-to-r from-[#02735E] to-[#038C73] text-white font-bold text-xl text-center'>
                {categoria.nome}
            </header>
            
            <div className='p-6 bg-gradient-to-b from-gray-50 to-white h-full flex items-center justify-center'>
                <p className='text-gray-700 text-lg text-center font-medium'>
                    {categoria.descricao}
                </p>
            </div>

            <div className="flex border-t border-gray-200">
                <Link 
                    to={`/editarcategoria/${categoria.id}`} 
                    className='w-full text-white bg-[#36BFB1] hover:bg-[#02735E] flex items-center justify-center py-3 transition-all duration-300 hover:scale-105'
                >
                    <button className="font-semibold flex items-center gap-2">
                        <span>✏️</span>
                        Editar
                    </button>
                </Link>

                <Link 
                    to={`/deletarcategoria/${categoria.id}`}
                    className='w-full text-white bg-[#014034] hover:bg-red-600 flex items-center justify-center py-3 transition-all duration-300 hover:scale-105'
                >
                    <button className="font-semibold flex items-center gap-2">
                        <span>🗑️</span>
                        Deletar
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria