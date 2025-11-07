import { useEffect, useState } from "react";
import type Usuario from "../../models/Usuario";
import { buscar } from "../../services/Service";
import CardUsuario from   "./CardUsuario";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../utils/ToastAlerta";

function ListarUsuarios() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    buscarUsuarios();
  }, []);

  async function buscarUsuarios() {
    try {
      setIsLoading(true);
      await buscar("/usuarios", setUsuarios);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("401")) {
        ToastAlerta("Erro servidor", "erro");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#36BFB1] to-[#02735E] py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Lista de Usuários
        </h1>
        
        {isLoading && (
          <div className="flex justify-center w-full my-8">
            <SyncLoader color="#ffffff" size={32} />
          </div>
        )}

        <div className="flex justify-center w-full">
          <div className="container flex flex-col">
            {!isLoading && usuarios.length === 0 && (
              <span className="text-2xl text-white text-center my-8">
                Nenhum Usuário foi encontrado
              </span>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usuarios.map((usuario) => (
                <CardUsuario
                  key={usuario.id}
                  usuario={usuario}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListarUsuarios;