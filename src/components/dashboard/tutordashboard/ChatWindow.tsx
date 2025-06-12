"use client";

import { MessageBubble } from "./MessageBubble";
import { InputBox } from "./InputBox";
import { QuestionRenderer } from "./QuestionRenderer";

interface ChatWindowProps {
  messages: { text: string; isUser: boolean; timestamp: string; question?: any; userAnswer?: string }[];
  onSendMessage: (message: string) => void;
}

export function ChatWindow({ messages, onSendMessage }: ChatWindowProps) {
  return (
    <div className="flex-1 flex flex-col bg-[#F9FAFB]">
      <div className="flex-1 p-6 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index}>
            {message.text && (
              <MessageBubble
                text={message.text}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            )}
            {message.question && (
              <div className="max-w-[70%] p-3 mb-4 rounded-lg bg-white text-[#1D2939] border border-[#E4E4E7]">
                <QuestionRenderer
                  question={message.question}
                  onAnswerSelect={(answer: string) => {}}
                  userAnswer={message.userAnswer || null}
                  questionType="Multiple Choice"
                />
                <p className="text-xs text-[#6B7280] mt-1">{message.timestamp}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <InputBox onSendMessage={onSendMessage} />
    </div>
  );
}