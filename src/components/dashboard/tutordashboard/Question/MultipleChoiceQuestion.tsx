"use client";

interface MultipleChoiceQuestionProps {
  options: { id: string; text: string }[];
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
}

export const MultipleChoiceQuestion = ({ 
  options, 
  selectedAnswer, 
  onSelectAnswer 
}: MultipleChoiceQuestionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((option) => (
        <button
          key={option.id}
          className={`
            p-4 border rounded-lg text-left transition-all
            ${selectedAnswer === option.id 
              ? 'border-purple-500 bg-purple-50' 
              : 'border-gray-200 hover:border-gray-300'}
          `}
          onClick={() => onSelectAnswer(option.id)}
        >
          <span className="flex items-center">
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center mr-3">
              {option.id}
            </span>
            <span>{option.text}</span>
          </span>
        </button>
      ))}
    </div>
  );
};