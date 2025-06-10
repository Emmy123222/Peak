"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import PDF from "./PDF";
import VideoDashboard from "@/components/dasnboard/tutordashboard/VideoDashboard";
import QuestionView from "./QuestionViews";

interface SuccessToolkitProps {
  examName: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  className?: string;
}

export default function SuccessToolkit({
  examName,
  description,
  features,
  icon,
  color,
  className,
}: SuccessToolkitProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showVideoDashboard, setShowVideoDashboard] = useState(false);
  const [showQuestionView, setShowQuestionView] = useState(false);
  const [pastQuestionTitle, setPastQuestionTitle] = useState<string>("");

  const resources = {
    title1: "Video solution",
    title: `Nail ${examName} with adaptive mock tests, syllabus-focused drills, and`,
    badges: [
      { label: "130+ Topics", icon: "/icons/file1.png" },
      { label: "109+ Videos", icon: "/icons/file2.png" },
      { label: "900+ Solved questions", icon: "/icons/file3.png" },
    ],
    items: Array.from({ length: 24 }, (_, i) => ({
      title: `${2000 + i} Past questions`,
      link: `#past-questions-${2000 + i}`,
    })),
  };

  const handleVideoPastQuestionClick = (title: string) => {
    setPastQuestionTitle(title);
    setShowVideoDashboard(true);
  };

  const handlePdfPastQuestionClick = (title: string) => {
    setPastQuestionTitle(title);
    setShowQuestionView(true);
  };

  const handleYearChange = (newTitle: string) => {
    setPastQuestionTitle(newTitle);
  };

  const handleBackToResources = () => {
    setShowVideoDashboard(false);
    setShowQuestionView(false);
    setPastQuestionTitle("");
  };

  function cn(...classes: (string | undefined | false | null)[]): string {
    return classes.filter(Boolean).join(" ");
  }

  // Conditionally render QuestionView or VideoDashboard full screen
  if (showQuestionView) {
    return (
      <QuestionView
        examName={examName}
        pastQuestionTitle={pastQuestionTitle}
        onBack={handleBackToResources}
      />
    );
  }

  if (showVideoDashboard) {
    return (
      <VideoDashboard
        examName={examName}
        pastQuestionTitle={pastQuestionTitle}
        onBack={handleBackToResources}
        onYearChange={handleYearChange}
      />
    );
  }

  return (
    <div className={cn("space-y-6 flex flex-col h-full w-full", className)}>
      <div className={`relative ${color} rounded-2xl h-40 flex items-center justify-center flex-shrink-0`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">{icon}</span>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full flex-1 flex flex-col">
        <TabsList className="rounded-2xl p-1 flex-shrink-0 justify-start">
          <TabsTrigger value="overview" className="rounded-xl">Overview</TabsTrigger>
          <TabsTrigger value="resources" className="rounded-xl">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4 flex-1 overflow-auto">
          <div className="space-y-4 h-full">
            <h2 className="text-xl font-semibold text-foreground">{examName} Success Toolkit</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
            <h3 className="text-lg font-medium text-foreground">Why Us?</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground h-full overflow-auto">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-4 flex-1 overflow-auto">
          <div className="space-y-8 h-full">
            <h3 className="text-lg font-semibold text-foreground">
              Resources for {examName}
            </h3>

            <div className="space-y-4 mt-4 h-full flex flex-col">
              <div className="p-4 bg-white rounded-xl border border-[#E4E4E7] flex-1 flex flex-col">
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
                  <span className="text-sm text-muted-foreground">
                    {resources.title}
                  </span>
                  <div className="flex mt-2 gap-4 justify-start">
                    {resources.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-purple-800 text-xs rounded-full flex items-center gap-2"
                      >
                        <img src={badge.icon} alt={badge.label} className="w-[20px] h-[20px]" />
                        <span className="text-sm font-medium text-gray-700">{badge.label}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {!isCollapsed && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 flex-1 overflow-auto">
                    {resources.items.map((resource, index) => (
                      <button
                        key={index}
                        onClick={() => handleVideoPastQuestionClick(resource.title)}
                        className="flex items-center p-3 rounded-xl border border-[#E4E4E7] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left"
                      >
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-foreground">
                            {resource.title}
                          </h4>
                        </div>
                        <div className="mr-3">
                          <img src="/icons/file4.png" alt="" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <PDF examName={examName} onPastQuestionClick={handlePdfPastQuestionClick} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
