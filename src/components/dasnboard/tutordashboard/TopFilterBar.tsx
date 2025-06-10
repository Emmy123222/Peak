"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TopFilterBarProps {
  subject: string;
  topic: string;
  questionType: string;
  onSubjectChange: (value: string) => void;
  onTopicChange: (value: string) => void;
  onQuestionTypeChange: (value: string) => void;
}

// Configuration arrays for maintainability
const SUBJECT_OPTIONS = ["Mathematics", "Physics", "English"];
const TOPIC_OPTIONS = ["Algebra", "Geometry", "Trigonometry"];
const QUESTION_TYPE_OPTIONS = ["Multiple Choice", "Single Answer"];

export function TopFilterBar({
  subject,
  topic,
  questionType,
  onSubjectChange,
  onTopicChange,
  onQuestionTypeChange,
}: TopFilterBarProps) {
  // Ensure a default value or fallback to placeholder if value is empty
  const getDisplayValue = (value: string, options: string[]) =>
    value && options.includes(value) ? value : undefined;

  const selectClass =
    "w-[180px] border border-[#E4E4E7] rounded-full text-[#1D2939] bg-transparent focus:bg-transparent";

  return (
    <div className="bg-white p-4 border-b border-[#E4E4E7] flex items-center space-x-4">
      <img
        src="/icons/Ai.png"
        alt="Avatar"
        className="w-10 h-10 rounded-full object-cover"
      />

      <Select
        value={getDisplayValue(subject, SUBJECT_OPTIONS)}
        onValueChange={onSubjectChange}
      >
        <SelectTrigger className={selectClass}>
          <SelectValue placeholder="Select subject" />
        </SelectTrigger>
        <SelectContent className="bg-white text-[#484848]">
          {SUBJECT_OPTIONS.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={getDisplayValue(topic, TOPIC_OPTIONS)}
        onValueChange={onTopicChange}
      >
        <SelectTrigger className={selectClass}>
          <SelectValue placeholder="Select topic" />
        </SelectTrigger>
        <SelectContent className="bg-white text-[#484848]">
          {TOPIC_OPTIONS.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={getDisplayValue(questionType, QUESTION_TYPE_OPTIONS)}
        onValueChange={onQuestionTypeChange}
      >
        <SelectTrigger className={selectClass}>
          <SelectValue placeholder="Select question type" />
        </SelectTrigger>
        <SelectContent className="bg-white text-[#484848]">
          {QUESTION_TYPE_OPTIONS.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}