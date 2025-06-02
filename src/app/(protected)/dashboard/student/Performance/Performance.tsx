"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { name: "Chemistry", value: 0 },
  { name: "Computer science", value: 0 },
  { name: "Physics", value: 0 },
  { name: "Biology", value: 0 },
  { name: "English language", value: 0 },
  { name: "English language", value: 0 },
  { name: "Chemistry", value: 0 },
  { name: "Physics", value: 0 },
  { name: "Biology", value: 0 },
];

export function PerformanceSection() {
  const [selectedExam, setSelectedExam] = useState("waec");

  // Sample data for quizzes taken and average score
  const totalQuizzes = 52;
  const averageScore = 45;

  // Split data into two columns
  const half = Math.ceil(data.length / 2);
  const leftColumn = data.slice(0, half);
  const rightColumn = data.slice(half);

  return (
    <div className="space-y-4">
      {/* Total Quizzes and Average Score Section */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="rounded-2xl border border-[#E4E4E7] shadow-sm">
          <CardContent className="pt-6 pb-6 flex flex-col items-center">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm font-medium text-[#344054]">
                TOTAL QUIZZES TAKEN
              </span>
              <img src="/icons/book.png" alt="" />
            </div>
            <div className="flex justify-start items-start">
              <span className="text-3xl font-bold text-[#101828] mt-2">
                {totalQuizzes}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border border-[#E4E4E7] shadow-sm">
          <CardContent className="pt-6 pb-6 flex flex-col items-center">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm font-medium text-[#344054]">
                AVERAGE SCORE
              </span>
              <img src="/icons/book.png" alt="" />
            </div>
            <span className="text-3xl font-bold text-[#101828] mt-2">
              {averageScore}
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Performance by Subjects Section */}
      <Card className="rounded-2xl border border-[#E4E4E7] shadow-sm">
        <CardHeader className="pb-0">
          <div className="flex items-center justify-between">
            <CardTitle className="text-[16px] font-semibold text-[#101828]">
              Performance by subjects
            </CardTitle>
            <div className="flex gap-2">
              <Select
                defaultValue={selectedExam}
                onValueChange={setSelectedExam}
              >
                <SelectTrigger className="w-[100px] h-[32px] rounded-md border border-[#D0D5DD] text-sm font-medium text-[#344054] shadow-none">
                  <SelectValue placeholder="Exam" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="waec">WAEC</SelectItem>
                  <SelectItem value="jamb">JAMB</SelectItem>
                  <SelectItem value="neco">NECO</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="monthly">
                <SelectTrigger className="w-[100px] h-[32px] rounded-md border border-[#D0D5DD] text-sm font-medium text-[#344054] shadow-none">
                  <SelectValue placeholder="Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4 pb-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {/* Left Column */}
            <div className="space-y-3">
              {leftColumn.map((subject, index) => (
                <div key={index} className="relative">
                  <div className="w-full h-8 rounded-full bg-[#F2F4F7] flex items-center justify-between px-3">
                    <span className="text-sm font-medium text-[#344054] truncate">
                      {subject.name}
                    </span>
                    <span className="text-sm font-medium text-[#667085]">
                      {subject.value}%
                    </span>
                    <div
                      className="absolute top-0 left-0 h-full rounded-full bg-[#7F56D9] opacity-20"
                      style={{ width: `${subject.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Right Column */}
            <div className="space-y-3">
              {rightColumn.map((subject, index) => (
                <div key={index + half} className="relative">
                  <div className="w-full h-8 rounded-full bg-[#F2F4F7] flex items-center justify-between px-3">
                    <span className="text-sm font-medium text-[#344054] truncate">
                      {subject.name}
                    </span>
                    <span className="text-sm font-medium text-[#667085]">
                      {subject.value}%
                    </span>
                    <div
                      className="absolute top-0 left-0 h-full rounded-full bg-[#7F56D9] opacity-20"
                      style={{ width: `${subject.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}