"use client";

interface TextInputQuestionProps {
  value: string;
  onChange: (value: string) => void;
}

export const TextInputQuestion = ({ value, onChange }: TextInputQuestionProps) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your answer"
        className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
      />
    </div>
  );
};