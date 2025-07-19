import { useState } from "react";

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 border-t bg-white flex">
      <input
        type="text"
        className="flex-1 p-3 border rounded-l-lg outline-none"
        placeholder="Écrire un message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <button className="bg-blue-500 text-white px-4 rounded-r-lg" onClick={handleSend}>
        Envoyer
      </button>
    </div>
  );
};

export default MessageInput;
