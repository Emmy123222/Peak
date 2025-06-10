"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export function Sidebar() {
  const sessions = {
    "Today": [
      "Questions on algebra",
      "Questions on algebra",
      "Questions on algebra",
      "Questions on algebra",
    ],
    "Yesterday": [
      "Questions on algebra",
      "Questions on algebra",
      "Questions on algebra",
      "Questions on algebra",
    ],
  };

  return (
    <div className="w-64 bg-white border-l border-[#E0E7FF] p-4 flex flex-col h-screen ">
      <Input
        type="text"
        placeholder="Search"
        className="mb-4 w-full border border-[#E4E4E7] rounded-full focus:ring-2 focus:ring-[#7F56D9]"
      />
      <Button
        variant="outline"
        className="w-full mb-4 text-[#7F56D9] rounded-full flex items-center justify-start"
        asChild
      >
        <Link href="/dashboard/tutor/quiz-with-ai" className="flex items-center">
          <img
            src="/icons/Ai.png" // Replace with ic avatar path
            alt="Avatar"
            className="h-6 w-6 rounded-full mr-2"
          />
          New Chat
        </Link>
      </Button>
      <div className="flex-1 overflow-y-auto ">
        {Object.entries(sessions).map(([date, chats]) => (
          <div key={date} className="mb-4">
            <h3 className="text-sm font-medium text-[#6B7280] mb-2 border-b border-[#E4E4E7] pt-2" >{date}</h3>
            
            {chats.map((chat, index) => (
            
              <div
                key={index}
                className="text-[#6B7280] text-sm py-1 hover:bg-gray-100 rounded-lg cursor-pointer "
              >
                {chat}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}