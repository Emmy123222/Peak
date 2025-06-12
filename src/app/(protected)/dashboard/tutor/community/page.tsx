'use client';

import { ChatLayout, User, Conversation, Message } from '@/components/dashboard/tutordashboard/chats/chat-layout';
import { useState } from 'react';
import { generateId } from '@/lib/utils';

// Mock data
const currentUser: User = {
  id: 'user1',
  name: 'Your Name',
avatar: '/icons/matthew.png',
  isOnline: true
};

const initialUsers: User[] = [
  {
    id: 'user2',
    name: 'Peter Mathew',
    avatar: '/icons/matthew.png',
    role: 'Tutor',
    isOnline: true
  },
  {
    id: 'user3',
    name: 'Emmanuel',
    avatar: '/icons/matthew.png',
    isOnline: false
  },
  {
    id: 'user4',
    name: 'Angeline',
    avatar: '/icons/matthew.png',
    isOnline: true
  },
  {
    id: 'user5',
    name: 'Faith',
    avatar: '/icons/matthew.png',
    isOnline: false
  }
];

// Generate mock conversations
const generateMockConversations = (): Conversation[] => {
  const twoMinutesAgo = new Date(new Date().getTime() - 2 * 60000).toISOString();
  const fiveMinutesAgo = new Date(new Date().getTime() - 5 * 60000).toISOString();
  
  const mockConversations: Conversation[] = [];
  
  // Individual conversations with each user
  initialUsers.forEach((user, index) => {
    const messages: Message[] = [];
    
    // Add sample messages
    messages.push({
      id: generateId(),
      content: 'Hello sir, please I would like you to explain something in your video',
      timestamp: twoMinutesAgo,
      senderId: user.id,
      status: 'read'
    });
    
    messages.push({
      id: generateId(),
      content: 'Hello sir, please I would like you to explain something in your video',
      timestamp: twoMinutesAgo,
      senderId: currentUser.id,
      status: 'read'
    });
    
    mockConversations.push({
      id: `conv${index + 1}`,
      participants: [currentUser, user],
      messages,
      lastMessageTime: twoMinutesAgo,
      unread: index < 2
    });
  });
  
  // Add a group conversation
  mockConversations.push({
  id: 'group1',
  participants: [currentUser, ...initialUsers],
  messages: [
    {
      id: generateId(),
      content: 'Welcome to the PeakSchool Community group!',
      timestamp: fiveMinutesAgo,
      senderId: 'user2',
      status: 'read'
    }
  ],
  lastMessageTime: fiveMinutesAgo,
  isGroup: true,
  groupName: 'PeakSchool Community',
  avatar: '/icons/group-avatar.png', // <-- added group image here
  unread: false
});

  
  return mockConversations;
};

export default function Home() {
  const [conversations, setConversations] = useState<Conversation[]>(generateMockConversations());

  const handleSendMessage = (conversationId: string, messageContent: string) => {
    const now = new Date().toISOString();
    
    const newMessage: Message = {
      id: generateId(),
      content: messageContent,
      timestamp: now,
      senderId: currentUser.id,
      status: 'sent'
    };
    
    setConversations(prev => 
      prev.map(conversation => {
        if (conversation.id === conversationId) {
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage],
            lastMessageTime: now
          };
        }
        return conversation;
      })
    );
  };

  return (
    <div className="h-screen bg-background">
      <ChatLayout
        currentUser={currentUser}
        conversations={conversations}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}