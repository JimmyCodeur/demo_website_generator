import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ChatList from "../components/Messages_page/ChatList";
import ChatWindow from "../components/Messages_page/ChatWindow";
import MessageInput from "../components/Messages_page/MessageInput";

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const conversations = [
    { id: 1, name: "John Doe", avatar: "https://via.placeholder.com/40", lastMessage: "Salut, comment ça va ?" },
    { id: 2, name: "L'IA Chat", avatar: "https://via.placeholder.com/40", lastMessage: "Tu veux t'améliorer aujourd'hui ?" },
  ];

  const selectConversation = (chat) => {
    setSelectedChat(chat);
    setMessages([
      { text: "Salut !", isUser: false },
      { text: "Comment vas-tu ?", isUser: false }
    ]);
  };

  const sendMessage = (text) => {
    setMessages((prev) => [...prev, { text, isUser: true }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Je suis un bot ! 🤖", isUser: false }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-white border-b flex items-center space-x-3">
        <button onClick={() => navigate("/dashboard")} className="flex items-center text-gray-700 hover:text-blue-500 transition">
          <ArrowLeft size={24} />
          <span className="ml-2 text-lg font-medium">Retour à l'accueil</span>
        </button>
      </div>

      <div className="flex flex-1">
        <ChatList conversations={conversations} selectConversation={selectConversation} />
        {selectedChat ? (
          <div className="w-2/3 flex flex-col">
            <ChatWindow selectedChat={selectedChat} messages={messages} />
            <MessageInput sendMessage={sendMessage} />
          </div>
        ) : (
          <div className="w-2/3 flex items-center justify-center text-gray-500">
            Sélectionnez une conversation pour commencer à discuter.
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
