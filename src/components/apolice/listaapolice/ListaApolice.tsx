/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Apolice from "../../../models/Apolice";
import { buscar } from "../../../services/Service";
import CardApolice from "../cardapolice/CardApolice";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaApolices() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apolices, setApolices] = useState<Apolice[]>([]);

  useEffect(() => {
    buscarApolices();
  }, []);

  async function buscarApolices() {
    try {
      setIsLoading(true);
      await buscar("/apolices", setApolices);
    } catch (error: any) {
      console.error("Erro ao buscar apólices:", error);
      if (error.toString().includes("401")) {
        ToastAlerta("Erro de autenticação. Faça login novamente.", "erro");
      } else {
        ToastAlerta("Erro ao carregar apólices.", "erro");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#ffffff" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && apolices.length === 0 && (
            <span className="text-3xl text-center my-8 text-gray-700">
              Nenhuma apólice foi encontrada
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apolices.map((apolice) => (
              <CardApolice key={apolice.id} apolice={apolice} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaApolices;
