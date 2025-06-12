'use client';

import { useState } from 'react';
import { User, Conversation } from './chat-layout';
import { ChatHeader } from './chat-header';
import { ChatMessages } from './chat-messages';
import { ChatInput } from './chat-input';
import { GroupInfo } from './group-info';

interface ChatMainProps {
  conversation: Conversation;
  currentUser: User;
  onSendMessage: (message: string) => void;
}

export function ChatMain({ conversation, currentUser, onSendMessage }: ChatMainProps) {
  const [showGroupInfo, setShowGroupInfo] = useState(false);
  const otherParticipants = conversation.participants.filter(p => p.id !== currentUser.id);
  const [message, setMessage] = useState('');

  const handleSendMessage = (value: string) => {
    if (value.trim()) {
      onSendMessage(value);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      <ChatHeader 
        isGroup={conversation.isGroup}
        groupName={conversation.groupName}
        participants={otherParticipants}
        onGroupInfoClick={() => setShowGroupInfo(true)}
      />
      
      <ChatMessages 
        messages={conversation.messages}
        currentUser={currentUser}
        participants={conversation.participants}
      />
      
      <ChatInput 
        message={message}
        onChange={setMessage}
        onSend={handleSendMessage}
      />

      <GroupInfo
        isOpen={showGroupInfo}
        onClose={() => setShowGroupInfo(false)}
        groupName={conversation.groupName || ''}
        participants={conversation.participants}
        groupAvatar={conversation.isGroup ? '/group-avatar.png' : undefined}
      />
    </div>
  );
}