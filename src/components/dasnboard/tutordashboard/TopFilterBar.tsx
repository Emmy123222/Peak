"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TopFilterBarProps {
  subject: string;
  topic: string;
  questionType: string;
  onSubjectChange: (value: string) => void;
  onTopicChange: (value: string) => void;
  onQuestionTypeChange: (value: string) => void;
}

export function TopFilterBar({
  subject,
  topic,
  questionType,
  onSubjectChange,
  onTopicChange,
  onQuestionTypeChange,
}: TopFilterBarProps) {
  return (
    <div className="bg-white p-4 border-b border-[#E4E4E7] flex space-x-4">
      <Select onValueChange={onSubjectChange} value={subject}>
        <SelectTrigger className="w-[180px] border border-[#E4E4E7] rounded-full text-[#1D2939]">
          <SelectValue placeholder="Select subject" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="Mathematics">Mathematics</SelectItem>
          <SelectItem value="Physics">Physics</SelectItem>
          <SelectItem value="English">English</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={onTopicChange} value={topic}>
        <SelectTrigger className="w-[180px] border border-[#E4E4E7] rounded-full text-[#1D2939]">
          <SelectValue placeholder="Select topic" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="Algebra">Algebra</SelectItem>
          <SelectItem value="Geometry">Geometry</SelectItem>
          <SelectItem value="Trigonometry">Trigonometry</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={onQuestionTypeChange} value={questionType}>
        <SelectTrigger className="w-[180px] border border-[#E4E4E7] rounded-full text-[#1D2939]">
          <SelectValue placeholder="Select question type" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="Multiple Choice">Multiple Choice</SelectItem>
          <SelectItem value="Single Answer">Single Answer</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}