// src/app/(protected)/dashboard/tutordashboard/dashboard/Dashboard.tsx
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WelcomeHeader } from "../Welcome/Welcomes";
import { PerformanceSection } from "../Performance/Performance";
import { WeeklyStreak } from "../weekly/Weekly";
import { SubjectProgressTracker } from "../Subject/Subjects";
import { PracticeQuestions } from "../practice/Practise";
import { tabConfig } from "@/lib/tabConfig";
import { examCards } from "@/lib/examCards";
import { ChevronRight } from "lucide-react";
import { ExamCard } from "../../../../../../type/ExamCard";
import Link from "next/link";
import VideoDashboard from "@/components/dasnboard/tutordashboard/VideoDashboard";
import SuccessToolkit from "@/components/dasnboard/tutordashboard/SuccessToolkit";
import { Button } from "@/components/ui/button";

export function DashboardContent() {
  const [selectedExam, setSelectedExam] = useState<ExamCard | null>(null); // Track selected exam for SuccessToolkit

  const displayedCards = examCards.slice(0, 3); // Show only 3 cards on dashboard

  const handleExamCardClick = (card: ExamCard) => {
    console.log("Exam card clicked:", card.title); // Debug log
    setSelectedExam(card); // Show SuccessToolkit when an exam card is clicked
    console.log("After clicking exam card - selectedExam:", card); // Debug log
  };

  const handleBackToDashboard = () => {
    console.log("handleBackToDashboard called"); // Debug log
    setSelectedExam(null); // Return to default dashboard view
    console.log("After back to dashboard - selectedExam:", null); // Debug log
  };

  // Render SuccessToolkit if an exam card is clicked
  if (selectedExam) {
    console.log("Rendering SuccessToolkit for exam:", selectedExam.title); // Debug log
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

  // Default dashboard view
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

  return (
    <div className="space-y-6">
      <WelcomeHeader />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 shadow-md rounded-[26px] bg-white p-6">
          <Tabs defaultValue="exam-prep" className="h-full">
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
                {tab.value === "exam-prep"
                  ? tab.content(examCards, displayedCards, renderButton)
                  : tab.content(examCards, displayedCards, renderButton)}
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="md:col-span-1">
          <PerformanceSection />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <WeeklyStreak />
          <PracticeQuestions />
        </div>
        <div>
          <SubjectProgressTracker />
        </div>
      </div>
    </div>
  );
}