const ChatList = ({ conversations, selectConversation }) => {
    return (
      <div className="w-1/3 bg-white border-r overflow-y-auto h-full p-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">📩 Conversations</h2>
        {conversations.map((chat) => (
          <div
            key={chat.id}
            className="p-3 border-b cursor-pointer hover:bg-gray-100 transition flex items-center"
            onClick={() => selectConversation(chat)}
          >
            <img src={chat.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-medium text-gray-800">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate w-48">{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ChatList;
  