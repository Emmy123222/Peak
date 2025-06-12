'use client';

import { useState } from 'react';
import { ChatSidebar } from './chat-sidebar';
import { ChatMain } from './chat-main';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export interface User {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  isOnline?: boolean;
}

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  senderId: string;
  status?: 'sent' | 'delivered' | 'read';
}

export interface Conversation {
  id: string;
  participants: User[];
  messages: Message[];
  lastMessageTime: string;
  unread?: boolean;
  isGroup?: boolean;
  groupName?: string;
  avatar?: string;
}

interface ChatLayoutProps {
  currentUser: User;
  conversations: Conversation[];
  onSendMessage?: (conversationId: string, message: string) => void;
  onSelectConversation?: (conversationId: string) => void;
}

export function ChatLayout({ 
  currentUser, 
  conversations, 
  onSendMessage,
  onSelectConversation
}: ChatLayoutProps) {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(
    conversations.length > 0 ? conversations[0].id : null
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter(conversation => {
    const participantNames = conversation.participants
      .filter(p => p.id !== currentUser.id)
      .map(p => p.name.toLowerCase());
    
    if (conversation.isGroup && conversation.groupName) {
      return conversation.groupName.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    return participantNames.some(name => name.includes(searchQuery.toLowerCase()));
  });

  const handleConversationSelect = (id: string) => {
    setSelectedConversation(id);
    if (onSelectConversation) {
      onSelectConversation(id);
    }
  };

  const handleSendMessage = (message: string) => {
    if (selectedConversation && onSendMessage) {
      onSendMessage(selectedConversation, message);
    }
  };

  const activeConversation = conversations.find(c => c.id === selectedConversation) || null;

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="w-full md:w-1/3 lg:w-1/4 border-r border-[#E4E4E4] overflow-hidden flex flex-col p-4">
        <div className="p-3 border-b border-[#E4E4E4]">
          <div className="relative w-full h-[40px] border border-[#E4E4E4] rounded-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="search"
              className="pl-10 bg-muted/50 border-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <ChatSidebar
          conversations={filteredConversations}
          currentUser={currentUser}
          selectedConversationId={selectedConversation}
          onSelectConversation={handleConversationSelect}
        />
      </div>
      <div className="flex-1 overflow-hidden">
        {activeConversation ? (
          <ChatMain
            conversation={activeConversation}
            currentUser={currentUser}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-muted-foreground">Select a conversation to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}
