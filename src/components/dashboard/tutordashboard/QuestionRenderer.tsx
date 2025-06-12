"use client";

interface Question {
  text: string;
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
}

interface QuestionRendererProps {
  question: Question;
  onAnswerSelect: (answer: string) => void;
  userAnswer: string | null;
  questionType: string;
}

export function QuestionRenderer({
  question,
  onAnswerSelect,
  userAnswer,
  questionType,
}: QuestionRendererProps) {
  if (questionType === "Multiple Choice" && question.options) {
    return (
      <div className="space-y-2">
        <p className="font-medium text-[#1D2939]">{question.text}</p>
        <ul className="list-disc list-inside space-y-1">
          {question.options.map((option) => (
            <li
              key={option}
              className={`cursor-pointer ${
                userAnswer === option ? "font-bold text-[#7F56D9]" : "text-[#1D2939]"
              }`}
              onClick={() => onAnswerSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="space-y-2">
        <p className="font-medium text-[#1D2939]">{question.text}</p>
        <input
          type="text"
          placeholder="Type your answer..."
          className="w-full p-2 border border-[#E4E4E7] rounded-full focus:outline-none focus:ring-2 focus:ring-[#7F56D9] text-[#1D2939]"
          onChange={(e) => onAnswerSelect(e.target.value)}
        />
      </div>
    );
  }
}