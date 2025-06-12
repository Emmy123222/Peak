'use client';

import { User } from './chat-layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatHeaderProps {
  isGroup?: boolean;
  groupName?: string;
  participants: User[];
  onGroupInfoClick: () => void;
}

export function ChatHeader({ isGroup, groupName, participants, onGroupInfoClick }: ChatHeaderProps) {
  const displayName = isGroup 
    ? groupName 
    : participants.length > 0 ? participants[0].name : 'Unknown';
  
  const displayAvatar = isGroup 
    ? '/group-avatar.png'
    : participants.length > 0 ? participants[0].avatar : '';
  
  const initials = (displayName ?? '')
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  
  const displayRole = isGroup
    ? `${participants.length} members`
    : participants.length > 0 && participants[0].role ? participants[0].role : '';

  return (
    <header className="flex items-center justify-between p-3 border-b border-[#E4E4E4] bg-background">
      <div className="flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={displayAvatar} alt={displayName} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        
        <div>
          <h2 className="font-medium text-sm">{displayName}</h2>
          {displayRole && (
            <p className="text-xs text-muted-foreground">{displayRole}</p>
          )}
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={onGroupInfoClick}
        className={cn(
          "rounded-full font-semibold text-white bg-[#640789]",
        )}
      >
        <span>Group Info</span>
      </Button>
    </header>
  );
}