"use client";

interface MessageBubbleProps {
  text: string;
  isUser: boolean;
  timestamp: string;
}

export function MessageBubble({ text, isUser, timestamp }: MessageBubbleProps) {
  return (
    <div
      className={`max-w-[70%] p-3 mb-4 rounded-lg ${
        isUser
          ? "bg-[#7F56D9] text-white ml-auto"
          : "bg-white text-[#1D2939] border border-[#E4E4E7]"
      }`}
    >
      <p className="text-sm">{text}</p>
      <p className="text-xs text-[#6B7280] mt-1">{timestamp}</p>
    </div>
  );
}