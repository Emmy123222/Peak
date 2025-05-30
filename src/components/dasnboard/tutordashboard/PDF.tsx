"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoDashboard from "@/components/dasnboard/tutordashboard/VideoDashboard"; // Import VideoDashboard

interface PDFProps {
  examName: string;
  onPastQuestionClick?: (title: string) => void;
}

export default function PDF({ examName, onPastQuestionClick }: PDFProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVideoDashboard, setShowVideoDashboard] = useState(false); // State to toggle VideoDashboard
  const [pastQuestionTitle, setPastQuestionTitle] = useState<string>(""); // Track past question title

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

  const handlePastQuestionClick = (title: string) => {
    console.log("PDF past question clicked:", title); // Debug log
    if (onPastQuestionClick) onPastQuestionClick(title); // Notify parent
    setPastQuestionTitle(title); // Set the past question title
    setShowVideoDashboard(true); // Show VideoDashboard
  };

  const handleBackToResources = () => {
    console.log("Back to resources from VideoDashboard in PDF"); // Debug log
    setShowVideoDashboard(false); // Return to PDF view
    setPastQuestionTitle(""); // Reset past question title
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
      {isExpanded && !showVideoDashboard && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pdfResources.items.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePastQuestionClick(item.title); // Trigger VideoDashboard
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
      {showVideoDashboard && (
        <VideoDashboard
          examName={examName}
          pastQuestionTitle={pastQuestionTitle}
          onBack={handleBackToResources}
          onYearChange={(newTitle) => setPastQuestionTitle(newTitle)} // Update title on year change
        />
      )}
    </div>
  );
}