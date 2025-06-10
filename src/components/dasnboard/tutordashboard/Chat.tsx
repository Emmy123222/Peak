import React, { useRef } from 'react';
import { Send } from 'lucide-react';

interface Message {
  text: string;
  time: string;
  isSentByUser: boolean;
}

interface User {
  name: string;
  avatar?: string;
  status?: string;
  communityJoin?: () => void;
}

interface ChatInterfaceProps {
  user: User;
  messages: Message[];
  onSendMessage?: (text: string) => void;
}

// Define default props separately
const defaultProps: Partial<ChatInterfaceProps> = {
  user: {
    name: 'Unknown User',
    avatar: '/icons/matthew.png',
    status: 'Online',
  },
  messages: [],
  onSendMessage: () => {},
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  user,
  messages,
  onSendMessage = defaultProps.onSendMessage,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (inputRef.current && onSendMessage) {
      const text = inputRef.current.value.trim();
      if (text) {
        onSendMessage(text);
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[90vh]">
        {/* Chat Header */}
        <div className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <img
              src={user.avatar || defaultProps.user?.avatar}
              alt={`${user.name}'s Avatar`}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
              <p className="text-xs text-green-500">{user.status || defaultProps.user?.status}</p>
            </div>
          </div>
          {user.communityJoin && (
            <button
              className="bg-[#8100C5] text-white text-sm px-4 py-1.5 rounded-full hover:bg-purple-800 transition-colors"
              onClick={user.communityJoin}
            >
              Join community
            </button>
          )}
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-4 overflow-y-auto bg-[#F8F9FA]">
         <div className="flex items-start gap-3  py-4 px-2 bg-white relative shadow-sm h-[100px]">
  <img src="/icons/matthew.png" alt="User Avatar" className="w-9 h-9 rounded-full object-cover" />
  <div className="flex-1">
    <h4 className="text-sm font-semibold text-gray-800 leading-none">{user.name}</h4>
    <p className="text-xs text-gray-500 mb-1">Tutor</p>
    <p className="text-xs text-gray-400">Your conversation with {user.name} begins here</p>
  </div>
  <img src="/icons/fetti.png" alt="Decoration" className="absolute  right-2 top-2 w-[151.81px] h-auto" />
</div>

          
          {messages.length === 0 ? (
            <p className="text-center text-gray-400">No messages yet.</p>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-center mt-4">
                <span className="bg-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">Today</span>
              </div>

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${message.isSentByUser ? 'flex justify-end' : 'flex justify-start'}`}
                >
                  <div className="max-w-[70%]">
                    <div
                      className={`p-3 rounded-lg ${
                        message.isSentByUser
                          ? 'bg-[#8100C5] text-white rounded-tr-none'
                          : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                    <div className={`text-xs text-gray-400 mt-1 ${message.isSentByUser ? 'text-right' : 'text-left'}`}>
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex items-center bg-gray-50 rounded-full pr-1 border border-gray-200">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter message"
              className="flex-1 p-3 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && onSendMessage) handleSend();
              }}
            />
            <button
              className="bg-[#8100C5] text-white p-2 rounded-full hover:bg-purple-800 transition-colors"
              onClick={handleSend}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;