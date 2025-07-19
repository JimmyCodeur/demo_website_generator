import { useState } from "react";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MessageBell = () => {
  const navigate = useNavigate(); // ✅ Pour la redirection

  // ✅ Suppression du menu déroulant, on redirige vers "/messages" au clic
  const goToMessages = () => {
    navigate("/messages");
  };

  return (
    <div className="relative cursor-pointer" onClick={goToMessages}>
      {/* ✅ Icône statique sans animation */}
      <Mail size={28} className="text-gray-700" />

      {/* ✅ Badge rouge si messages non lus */}
      <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
        3 {/* ➜ Ici, tu peux remplacer par ton nombre réel de messages non lus */}
      </span>
    </div>
  );
};

export default MessageBell;
