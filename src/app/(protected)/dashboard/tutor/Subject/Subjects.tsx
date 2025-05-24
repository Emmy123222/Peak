"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ExternalLink } from "lucide-react"; // Icon matching screenshot
import Image from "next/image";

const topics = [
  { name: "Electromagnetism", isWeak: false },
  { name: "Thermodynamics", isWeak: false },
  { name: "Classical mechanics", isWeak: false },
  { name: "Electromagnetism", isWeak: true },
  { name: "Thermodynamics", isWeak: true },
  { name: "Classical mechanics", isWeak: true },
];

export function SubjectProgressTracker() {
  return (
    <Card className="w-full rounded-2xl border border-[#E4E4E7] shadow-sm h-full ">
      <CardHeader className="pb-1">
        <div className="flex flex-col space-y-4">
          <CardTitle className="text-[16px] font-semibold text-[#101828]">
            Subject progress tracker
          </CardTitle>
          <div className="flex gap-2">
            <Select defaultValue="mathematics">
              <SelectTrigger className="w-[120px] h-[32px] rounded-md border border-[#D0D5DD] text-sm font-medium text-[#344054] shadow-none">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
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
        <hr className="my-4 border-[#E4E4E7]" />
      </CardHeader>
 

      <CardContent className="pt-2">
        {/* Topics Mastered */}
        <div className="mb-6 mt-4 ">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium text-[#344054]">Topics mastered</h4>
            <span className="text-sm font-medium text-[#344054]">Score</span>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <div className="min-w-[80px]">
              <img src="/icons/circle.png" alt=""  />
            </div>
            <div className="flex-1 space-y-3">
              {topics
                .filter((topic) => !topic.isWeak)
                .map((topic, index) => (
                  <div key={index} className="flex items-center justify-between text-sm text-[#344054]">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#D1D5DB] bg-white checked:bg-[#7F56D9] checked:border-transparent"
                        disabled
                      />
                      <span>{topic.name}</span>
                    </div>
                    <span className="text-[#667085]">--</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <hr className="my-4 border-[#E4E4E7]" />

        {/* Weak Topics */}
        <div>
          <div className="flex items-center justify-between mb-2 mt-4">
            <h4 className="text-sm font-medium text-[#344054]">Weak topics</h4>
            <span className="text-sm font-medium text-[#344054]">Score</span>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <div className="min-w-[80px]">
              <img src="/icons/circle.png" alt=""  />
            </div>
            <div className="flex-1 space-y-3">
              {topics
                .filter((topic) => topic.isWeak)
                .map((topic, index) => (
                  <div key={index} className="flex items-center justify-between text-sm text-[#344054]">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#D1D5DB] bg-white checked:bg-[#7F56D9] checked:border-transparent"
                        disabled
                      />
                      <span>{topic.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#667085]">--</span>
                    <ExternalLink className="h-4 w-4 text-[#7F56D9] cursor-pointer" /></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
