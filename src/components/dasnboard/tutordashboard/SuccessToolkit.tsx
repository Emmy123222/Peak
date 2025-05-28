"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import PDF from "./PDF";
import VideoDashboard from "@/components/dasnboard/tutordashboard/VideoDashboard"; // Correct the path if needed

interface SuccessToolkitProps {
  examName: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
}

export default function SuccessToolkit({
  examName,
  description,
  features,
  icon,
  color,
}: SuccessToolkitProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showVideoDashboard, setShowVideoDashboard] = useState(false); // State to toggle VideoDashboard
  const [pastQuestionTitle, setPastQuestionTitle] = useState<string>(""); // Track past question title

  const resources = {
    title1: "Video solution",
    title: `Nail ${examName} with adaptive mock tests, syllabus-focused drills, and`,
    badges: [
      { label: "130+ Topics", icon: "📚" },
      { label: "109+ Videos", icon: "🎥" },
      { label: "900+ Solved questions", icon: "✅" },
    ],
    items: Array.from({ length: 24 }, (_, i) => ({
      title: `${2000 + i} Past questions`, // Years from 2001 to 2024
      link: `#past-questions-${2000 + i}`,
    })),
  };

  const handleVideoPastQuestionClick = (title: string) => {
    console.log("Video past question clicked in SuccessToolkit:", title); // Debug log
    setPastQuestionTitle(title); // Set the past question title
    setShowVideoDashboard(true); // Show VideoDashboard
    console.log("After setting state - pastQuestionTitle:", title, "showVideoDashboard:", true); // Debug log
  };

  const handleYearChange = (newTitle: string) => {
    console.log("Year changed to:", newTitle); // Debug log
    setPastQuestionTitle(newTitle); // Update the past question title
  };

  const handleBackToResources = () => {
    console.log("handleBackToResources called"); // Debug log
    setShowVideoDashboard(false); // Return to SuccessToolkit view
    setPastQuestionTitle(""); // Reset past question title
    console.log("After back to resources - showVideoDashboard:", false, "pastQuestionTitle:", ""); // Debug log
  };

  // Render VideoDashboard if a past question is clicked in the Video solution section
  if (showVideoDashboard) {
    console.log("Rendering VideoDashboard with title:", pastQuestionTitle); // Debug log
    return (
      <VideoDashboard
        examName={examName}
        pastQuestionTitle={pastQuestionTitle}
        onBack={handleBackToResources}
        onYearChange={handleYearChange} // Pass the year change callback
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className={`relative ${color} rounded-2xl h-40 flex items-center justify-center`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">{icon}</span>
        </div>
      </div>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-gray-100 rounded-2xl p-1">
          <TabsTrigger value="overview" className="rounded-xl">
            Overview
          </TabsTrigger>
          <TabsTrigger value="resources" className="rounded-xl">
            Resources
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{examName} Success Toolkit</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
            <h3 className="text-lg font-medium text-foreground">Why Us?</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="resources" className="mt-4 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Resources for {examName}</h3>
            <div className="space-y-4 mt-4">
              <div className="p-4 bg-white rounded-xl border border-[#E4E4E7]">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-[18px] leading-[28px] font-[Montserrat]">
                      {resources.title1}
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsCollapsed(!isCollapsed)}
                      className="text-purple-600 w-[100px] h-[36px] border border-[#640789] rounded-[26px]"
                    >
                      {isCollapsed ? "Expand" : "Collapse"}
                    </Button>
                  </div>
                  <span className="text-sm text-muted-foreground">{resources.title}</span>
                  <div className="flex mt-2 gap-4 justify-start">
                    {resources.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full flex items-center"
                      >
                        {badge.icon} {badge.label}
                      </span>
                    ))}
                  </div>
                </div>
                {!isCollapsed && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {resources.items.map((resource, index) => (
                      <button
                        key={index}
                        onClick={() => handleVideoPastQuestionClick(resource.title)}
                        className="flex items-center p-3 rounded-xl border border-[#E4E4E7] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left"
                      >
                        <div className="mr-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-foreground">{resource.title}</h4>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <PDF examName={examName} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}