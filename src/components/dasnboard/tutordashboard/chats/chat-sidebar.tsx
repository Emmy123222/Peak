'use client';

import { User, Conversation } from '../chats/chat-layout';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';

interface ChatSidebarProps {
  conversations: Conversation[];
  currentUser: User;
  selectedConversationId: string | null;
  onSelectConversation: (id: string) => void;
}

export function ChatSidebar({ 
  conversations, 
  currentUser, 
  selectedConversationId,
  onSelectConversation 
}: ChatSidebarProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {conversations.map((conversation: Conversation) => {
        const isGroup: boolean = conversation.isGroup ?? false;
        const otherParticipants: User[] = conversation.participants.filter((p: User) => p.id !== currentUser.id);
        const displayName: string = isGroup 
          ? conversation.groupName ?? 'Unknown'
          : otherParticipants.length > 0 ? otherParticipants[0].name ?? 'Unknown' : 'Unknown';
        
        const displayAvatar: string = isGroup 
          ? '/group-avatar.png'
          : otherParticipants.length > 0 ? otherParticipants[0].avatar : '';
        
        const initials: string = displayName.split(' ')
          .map((part: string) => part[0])
          .join('')
          .slice(0, 2)
          .toUpperCase();
        
        interface Message {
          id: string;
          content: string;
          senderId: string;
          timestamp: string;
        }

        const lastMessage: Message | null = conversation.messages.length > 0 
          ? conversation.messages[conversation.messages.length - 1]
          : null;
        
        return (
          <div
            key={conversation.id}
            className={cn(
              "flex items-center p-3 border-b border-[#E4E4E4] cursor-pointer hover:bg-accent/50 transition-colors",
              selectedConversationId === conversation.id && "bg-accent"
            )}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <Avatar className="h-10 w-10 mr-3 relative">
              <AvatarImage src={displayAvatar} alt={displayName} />
              <AvatarFallback>{initials}</AvatarFallback>
              {isGroup ? (
                <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center border-2 border-background">
                  {otherParticipants.length}
                </div>
              ) : otherParticipants.length > 0 && otherParticipants[0].isOnline && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background"></div>
              )}
            </Avatar>
            
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-sm truncate">{displayName}</h3>
                <span className="text-xs text-muted-foreground">
                  {lastMessage && formatDistanceToNow(new Date(conversation.lastMessageTime), { addSuffix: false })}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground truncate max-w-[200px] overflow-hidden whitespace-nowrap">

                  {lastMessage ? lastMessage.content : 'No messages yet'}
                </p>
                {conversation.unread && (
                  <Badge variant="default" className="ml-1 bg-[#640789] text-white h-5 w-5 flex items-center justify-center rounded-full p-0">
                    2
                  </Badge>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
