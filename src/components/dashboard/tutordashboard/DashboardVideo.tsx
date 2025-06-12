// components/dashboard/tutordashboard/DashboardVideo.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface DashboardVideoProps {
  examName: string;
}

export default function DashboardVideo({ examName }: DashboardVideoProps) {
  const [currentSection, setCurrentSection] = useState("questions-1-10");
  const sections = [
    { id: "introduction", title: "Introduction", duration: "2 min" },
    { id: "introduction-2", title: "Introduction", duration: "2 min" },
    { id: "introduction-3", title: "Introduction", duration: "2 min" },
    { id: "introduction-4", title: "Introduction", duration: "2 min" },
    { id: "questions-1-10", title: "Questions 1 to 10", duration: "20 min", completed: true },
    { id: "questions-11-20", title: "Questions 11 to 20", duration: "20 min", completed: false },
    { id: "questions-21-30", title: "Questions 21 to 30", duration: "20 min", completed: false },
    { id: "questions-31-40", title: "Questions 31 to 40", duration: "20 min", completed: false },
    { id: "questions-41-50", title: "Questions 41 to 50", duration: "20 min", completed: false },
    { id: "questions-51-60", title: "Questions 51 to 60", duration: "20 min", completed: false },
  ];

  const subjects = [
    "Mathematics",
    "English language",
    "Physics",
    "Biology",
    "Chemistry",
    "Further mathematics",
  ];

  return (
    <div className="space-y-6">
      {/* Subject Tabs and Progress */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        {subjects.map((subject) => (
          <Button
            key={subject}
            variant={subject === "Mathematics" ? "secondary" : "outline"}
            className="rounded-full text-sm"
          >
            {subject}
          </Button>
        ))}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>⏱ 2hr 30mins</span>
          <span>📝 90 Solved questions</span>
          <Button variant="secondary" className="rounded-full text-sm">
            View Analytics 📊
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="rounded-full text-sm">
            <span>Prev</span>
          </Button>
          <Button variant="secondary" className="rounded-full text-sm">
            <span>Next</span>
          </Button>
        </div>
      </div>

      {/* Video Player */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/600x400?text=Video+Player"
          alt="Video placeholder"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Play className="h-16 w-16 text-white" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded">
          <div className="flex items-center justify-between">
            <span>0:51</span>
            <span>2:31</span>
            <span className="text-xs">⏸</span>
          </div>
          <div className="w-full bg-gray-300 h-1 rounded">
            <div className="bg-white h-1" style={{ width: "20%" }}></div>
          </div>
        </div>
      </div>

      {/* Content Tabs and Sections */}
      <div className="flex items-start gap-4">
        <div className="w-3/4 space-y-2">
          <div className="flex gap-2">
            <Button variant="secondary" className="rounded-full text-sm">
              Overview
            </Button>
            <Button variant="outline" className="rounded-full text-sm">
              Notes
            </Button>
          </div>
          <div className="p-4 bg-white rounded-lg border border-[#E4E4E7]">
            <div className="flex items-center gap-2">
              <img
                src="https://via.placeholder.com/40?text=Tutor"
                alt="Tutor"
                className="rounded-full"
              />
              <span className="font-medium">Peter Mathew</span>
              <span className="text-muted-foreground text-sm">Tutor</span>
            </div>
          </div>
        </div>
        <div className="w-1/4 space-y-2">
          <div className="space-y-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={currentSection === section.id ? "secondary" : "outline"}
                className="w-full justify-start rounded-full text-sm"
                onClick={() => setCurrentSection(section.id)}
              >
                <span
                  className={`w-2 h-2 rounded-full mr-2 ${
                    section.completed ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></span>
                {section.title} <span className="ml-auto">{section.duration}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge Yourself Section */}
      <div className="p-4 bg-purple-100 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl">💡</div>
          <div>
            <h4 className="font-semibold">Challenge yourself</h4>
            <p className="text-sm text-muted-foreground">Attempt practice questions</p>
          </div>
        </div>
        <Button variant="secondary" className="rounded-full text-sm">
          Attempt practice questions
        </Button>
      </div>
    </div>
  );
}