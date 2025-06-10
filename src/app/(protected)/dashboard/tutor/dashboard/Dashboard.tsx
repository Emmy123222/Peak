"use client";

import { useState } from "react";
import { WelcomeHeader } from "../Welcome/Welcomes";
import { PerformanceSection } from "../Performance/Performance";
import WeeklyStreakSection  from "../week/page";
import { SubjectProgressTracker } from "../Subject/Subjects";
import { PracticeQuestions } from "../practice/Practise";
import { tabConfig } from "@/lib/tabConfig";
import { examCards } from "@/lib/examCards";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import VideoDashboard from "@/components/dasnboard/tutordashboard/VideoDashboard";
import SuccessToolkit from "@/components/dasnboard/tutordashboard/SuccessToolkit";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExamCard } from "../../../../../../type/type";

export function DashboardContent() {
  const [selectedExam, setSelectedExam] = useState<ExamCard | null>(null);

  const displayedCards = examCards.slice(0, 3);

  const handleExamCardClick = (card: ExamCard) => {
    setSelectedExam(card);
  };

  const handleBackToDashboard = () => {
    setSelectedExam(null);
  };

  if (selectedExam) {
    return (
      <div>
        <Button variant="outline" onClick={handleBackToDashboard} className="mb-4">
          Back to Dashboard
        </Button>
        <SuccessToolkit
          examName={selectedExam.title}
          description={selectedExam.description}
          features={["Adaptive learning", "Detailed analytics", "24/7 support"]}
          icon={selectedExam.icon}
          color={selectedExam.color}
        />
      </div>
    );
  }

  const renderButton = (card: ExamCard) => (
    <button
      onClick={() => handleExamCardClick(card)}
      className={`w-full text-sm rounded-full font-semibold ${
        card.status === "continue"
          ? "border-2 border-purple-600 text-purple-600"
          : "border-2 border-[#D0D5DD] text-[#344054]"
      }`}
    >
      {card.status === "continue" ? "Continue" : "Start"}
    </button>
  );

  function handleButtonClick(card: ExamCard): void {
    handleExamCardClick(card);
  }
  return (
    <div className="space-y-6">
      <WelcomeHeader />
      <div className="grid gap-6 md:grid-cols-3 w-full">
        <div className="md:col-span-2 shadow-md rounded-[26px] bg-white p-6 w-full">
          <Tabs defaultValue="exam-prep" className="h-full w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Exam Prep</h3>
              <Link
                href="/dashboard/tutor/exams-subjects"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                See all <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <TabsList className="bg-[#F3F5F9] rounded-[26px]">
              {tabConfig.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabConfig.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-4">
                <tab.Component
      examCards={examCards}
      displayedCards={displayedCards}
      handleButtonClick={handleButtonClick}
    />
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="md:col-span-1 w-full">
          <PerformanceSection />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <WeeklyStreakSection />
          <PracticeQuestions />
        </div>
        <div>
          <SubjectProgressTracker />
        </div>
      </div>
    </div>
  );
}
