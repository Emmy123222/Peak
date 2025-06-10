'use client';

import { useRef, useEffect } from 'react';
import { User, Message } from '../chats/chat-layout';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Check, CheckCheck } from 'lucide-react';

interface ChatMessagesProps {
  messages: Message[];
  currentUser: User;
  participants: User[];
}

export function ChatMessages({ messages, currentUser, participants }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getUserById = (id: string): User | undefined => {
    if (id === currentUser.id) return currentUser;
    return participants.find(p => p.id === id);
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Group messages by date
  const messagesByDate: Record<string, Message[]> = {};
  const today = new Date().toLocaleDateString();

  messages.forEach(message => {
    const messageDate = new Date(message.timestamp).toLocaleDateString();
    if (!messagesByDate[messageDate]) {
      messagesByDate[messageDate] = [];
    }
    messagesByDate[messageDate].push(message);
  });

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30">
      {Object.keys(messagesByDate).map(date => (
        <div key={date} className="space-y-4">
          <div className="flex justify-center">
            <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
              {date === today ? 'Today' : date}
            </span>
          </div>

          {messagesByDate[date].map(message => {
            const sender = getUserById(message.senderId);
            const isSentByCurrentUser = message.senderId === currentUser.id;
            const initials = sender ? sender.name.split(' ')
              .map(part => part[0])
              .join('')
              .slice(0, 2)
              .toUpperCase() : '??';

            return (
              <div 
                key={message.id}
                className={cn(
                  "flex items-end space-x-2", 
                  isSentByCurrentUser ? "flex-row-reverse space-x-reverse" : "flex-row"
                )}
              >
                {!isSentByCurrentUser && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={sender?.avatar} alt={sender?.name} />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                )}
                
                <div className={cn(
                  "max-w-[70%] break-words rounded-lg p-3 text-sm",
                  isSentByCurrentUser 
                    ? "bg-[#9333EA] text-white rounded-br-none" 
                    : "bg-white text-foreground rounded-bl-none shadow-sm"
                )}>
                  {message.content}
                  <div className={cn(
                    "text-xs mt-1 flex justify-end items-center space-x-1",
                    isSentByCurrentUser ? "text-purple-200" : "text-muted-foreground"
                  )}>
                    <span>{formatTime(message.timestamp)}</span>
                    {isSentByCurrentUser && message.status && (
                      message.status === 'read' ? (
                        <CheckCheck className="h-3 w-3" />
                      ) : (
                        <Check className="h-3 w-3" />
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}