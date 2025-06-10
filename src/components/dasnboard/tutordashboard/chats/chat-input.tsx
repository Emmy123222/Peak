'use client';

import { KeyboardEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Smile, Paperclip, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatInputProps {
  message: string;
  onChange: (value: string) => void;
  onSend: (value: string) => void;
}

export function ChatInput({ message, onChange, onSend }: ChatInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend(message);
    }
  };

  return (
    <div className="p-4 border-t border-[#E4E4E4] bg-background">
      <div className={cn(
        "flex items-end space-x-2 rounded-lg bg-muted/50 p-2",
        isFocused && "ring-2 ring-ring ring-offset-2 ring-offset-background"
      )}>
        <Button 
          type="button" 
          size="icon" 
          variant="ghost" 
          className="h-8 w-8 rounded-full text-muted-foreground hover:bg-transparent"
        >
          <Paperclip className="h-5 w-5" />
        </Button>
        
        <Textarea
          value={message}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter message"
          className="flex-1 resize-none border-0 bg-transparent p-2 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[40px] max-h-40"
          rows={1}
        />
        
        <div className="flex items-center space-x-2">
          <Button 
            type="button" 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 rounded-full text-muted-foreground hover:bg-transparent"
          >
            <Smile className="h-5 w-5" />
          </Button>
          
          <Button 
            type="button"
            onClick={() => onSend(message)}
            size="icon"
            className="h-8 w-8 rounded-full bg-[#9333EA] text-white hover:bg-[#7e22ce]"
            disabled={!message.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}