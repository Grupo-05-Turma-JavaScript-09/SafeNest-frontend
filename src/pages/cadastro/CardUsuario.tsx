import type Usuario from "../../models/Usuario";

interface CardUsuarioProps {
  usuario: Usuario;
}

function CardUsuario({ usuario }: CardUsuarioProps) {
  return (
    <div className="group">
      <div className="bg-white rounded-2xl border-l-4 border-[#36BFB1] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#02735E] p-6">
        
        {/* Header minimalista */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#36BFB1] to-[#02735E] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {usuario.nome?.charAt(0).toUpperCase() || "U"}
            </span>
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-[#014034] text-lg">
              {usuario.nome}
            </h3>
            <p className="text-[#02735E] text-sm">Usuário #{usuario.id}</p>
          </div>
        </div>

        {/* Informações em lista limpa */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-[#36BFB1] rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">📧</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-[#014034] font-medium text-sm">{usuario.usuario}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-[#02735E] rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">🎂</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Idade</p>
              <p className="text-[#014034] font-medium text-sm">
                {usuario.idade ? `${usuario.idade} anos` : "—"}
              </p>
            </div>
          </div>
        </div>

        {/* Badge de status */}
        <div className="mt-4 flex justify-between items-center">
          <span className="bg-[#36BFB1]/10 text-[#014034] px-3 py-1 rounded-full text-xs font-medium">
            ✅ Ativo no sistema
          </span>
          <span className="text-2xl text-[#36BFB1] group-hover:text-[#02735E] transition-colors">
            👆
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardUsuario;