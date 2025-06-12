"use client";

import { HelpCircle } from "lucide-react";

interface QuizHeaderProps {
  questionNumber: number;
  totalQuestions: number;
  progress: number; // percent (0 to 100)
  timeRemaining: string;
}

export const QuizHeader = ({
  questionNumber,
  totalQuestions,
  progress,
  timeRemaining,
}: QuizHeaderProps) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const totalSeconds = 30 * 60; // 30 minutes
  const currentSeconds =
    parseInt(timeRemaining.split(":")[0]) * 60 +
    parseInt(timeRemaining.split(":")[1]);
  const strokeDashoffset =
    circumference - (currentSeconds / totalSeconds) * circumference;

  const totalSegments = 40;
  const filledSegments = Math.round((progress / 100) * totalSegments);

  return (
    <div className="bg-[#A855F7] text-white h-[160px] p-4 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h3 className="font-medium">
            Question {questionNumber}/{totalQuestions}
          </h3>
          <HelpCircle className="w-5 h-5 text-purple-200" />
        </div>

        <div className="relative w-[100px] h-[100px]">
          <svg width="100" height="100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#FFFFFF"
              fontSize="16"
              fontWeight="bold"
            >
              {timeRemaining}
            </text>
          </svg>
        </div>
      </div>

      {/* 40-Segment Progress Bar */}
      <div className="mt-4 flex justify-between items-center gap-[2px]">
        {Array.from({ length: totalSegments }).map((_, index) => (
          <div
            key={index}
            className={`h-3 flex-1 rounded-full ${
              index < filledSegments
                ? "bg-yellow-300"
                : "border border-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
