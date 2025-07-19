const ChatWindow = ({ selectedChat, messages }) => {
    return (
      <div className="w-2/3 flex flex-col h-full bg-gray-50">
        <div className="p-4 border-b bg-white flex items-center">
          <img src={selectedChat.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
          <h2 className="text-lg font-semibold">{selectedChat.name}</h2>
        </div>
  
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
              <div className={`p-3 rounded-lg max-w-xs ${msg.isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ChatWindow;
  