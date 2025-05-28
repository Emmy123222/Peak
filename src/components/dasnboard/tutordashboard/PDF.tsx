"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuestionView from "./QuestionView"; // Import the QuestionView component

interface PDFProps {
  examName: string;
  onPastQuestionClick?: (title: string) => void;
}

export default function PDF({ examName, onPastQuestionClick }: PDFProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string | null>(null); // Track selected year

  const pdfResources = {
    title: "PDF solution",
    description: `Nail ${examName} with adaptive mock tests, syllabus-focused drills, and`,
    badges: [
      { label: "13 Topics", icon: "📚" },
      { label: "190 Solved questions", icon: "✅" },
    ],
    items: Array.from({ length: 24 }, (_, i) => ({
      title: `${2000 + i} Past questions`, // Years from 2001 to 2024
      link: `#pdf-past-questions-${2000 + i}`,
    })),
  };

  // Sample subject data (expand as needed)
  const subjectData = {
    tutor: { name: "Peter Mathew", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", role: "Tutor" },
    questions: [
      { number: 1, text: "The force F acting on the wings of an aircraft moving through the air of velocity, v and density, ρ, is given by the equation F = kρv²A, where A is a dimensionless constant and A is the surface area of the wings of the aircraft. Use dimensional analysis to determine the values of k and c." },
      { number: 2, text: "Define strain energy.", subparts: ["a. Define strain energy."] },
      { number: 3, text: "Write an expression for the energy stored E, in a stretched wire of original length l, cross-sectional area A, extension x, and Young's modulus Y, of the material of the wire." },
    ],
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-white rounded-xl border border-[#E4E4E7]">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-[18px] leading-[28px] font-[Montserrat]">
              {pdfResources.title}
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-600 w-[100px] h-[36px] border border-[#640789] rounded-[26px]"
            >
              {isExpanded ? "Collapse" : "Expand"}
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">{pdfResources.description}</span>
          <div className="flex gap-4 justify-start">
            {pdfResources.badges.map((badge, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full flex items-center"
              >
                {badge.icon} {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      {isExpanded && !selectedYear && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pdfResources.items.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onPastQuestionClick) onPastQuestionClick(item.title);
                setSelectedYear(item.title); // Set the selected year to trigger QuestionView
              }}
              className="flex items-center p-3 rounded-xl border border-[#E4E4E7] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="mr-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
              </div>
            </a>
          ))}
        </div>
      )}
      {selectedYear && (
        <QuestionView
          examYear={selectedYear.replace(" Past questions", "")} // Extract year (e.g., "2024")
          subject={examName}
          tutor={subjectData.tutor}
          questions={subjectData.questions}
        />
      )}
    </div>
  );
}