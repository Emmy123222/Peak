'use client';

import { User } from '../chats/chat-layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MediaLinks } from '../chats/MediaLinks';

interface GroupInfoProps {
  isOpen: boolean;
  onClose: () => void;
  groupName: string;
  participants: User[];
  groupAvatar?: string;
}

export function GroupInfo({ isOpen, onClose, groupName, participants, groupAvatar }: GroupInfoProps) {
  const [isMediaLinksExpanded, setIsMediaLinksExpanded] = useState(false);

  return (
    <div className={cn(
      "fixed inset-y-0 right-0 w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-out z-50",
      isOpen ? "translate-x-0" : "translate-x-full"
    )}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-6 py-4 ">
          <div className="flex items-center gap-3">
            {isMediaLinksExpanded && (
              <button
                onClick={() => setIsMediaLinksExpanded(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            <h1 className="font-semibold text-base">
              {isMediaLinksExpanded ? 'Media links' : 'Group info'}
            </h1>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 w-[35px] h-[35px] rounded-full border border-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isMediaLinksExpanded ? (
          <MediaLinks
            isOpen={isMediaLinksExpanded}
            onToggle={() => setIsMediaLinksExpanded(false)}
          />
        ) : (
          <div className="flex flex-col h-full overflow-auto">
            <div className="flex flex-col items-center pt-8 px-6">
              <Avatar className="h-20 w-20 mb-4 ring-2 ring-purple-100">
                <AvatarImage src={groupAvatar} alt={groupName} />
                <AvatarFallback className="bg-purple-100 text-purple-700">
                  {groupName.split(' ').map(word => word[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold mb-1">{groupName}</h2>
              <p className="text-sm text-gray-500">{participants.length} Members</p>
            </div>

            <div className="flex-1 mt-8 flex flex-col">
              <div className="px-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Group description</h3>
                <p className="text-sm text-gray-600 mb-8">PeakSchool Community</p>
              </div>

              <div className="px-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-900">Media</h3>
                  <button
                    onClick={() => setIsMediaLinksExpanded(true)}
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                  >
                    See all
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {Array(3).fill(undefined).map((_, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </div>

              <div className="px-6 flex-1">
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  {participants.length} Members
                </h3>
                <div className="space-y-4">
                  {participants.map((participant) => (
                    <div key={participant.id} className="flex items-center group cursor-pointer">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={participant.avatar} alt={participant.name} />
                        <AvatarFallback className="bg-purple-100 text-purple-700">
                          {participant.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                          {participant.name}
                        </p>
                        {participant.role && (
                          <p className="text-xs text-gray-500">{participant.role}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-8 mb-6 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium">
                  Leave group
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}