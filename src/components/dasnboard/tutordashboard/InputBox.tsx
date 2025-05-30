"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface InputBoxProps {
  onSendMessage: (message: string) => void;
}

export function InputBox({ onSendMessage }: InputBoxProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-[#E4E4E7]">
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your answer..."
          className="flex-1 p-2 border border-[#E4E4E7] rounded-full focus:outline-none focus:ring-2 focus:ring-[#7F56D9] text-[#1D2939]"
        />
        <Button
          type="submit"
          variant="outline"
          className="text-[#7F56D9] rounded-full"
          disabled={!input.trim()}
        >
          Choose Your Answer
        </Button>
      </div>
    </form>
  );
}