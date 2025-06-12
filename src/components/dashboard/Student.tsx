"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { WelcomeHeader } from "../Welcome/Welcomes";
// import { PerformanceSection } from "../Performance/Performance";
// import { WeeklyStreakTabs } from "../weekly/Weekly";
// import { SubjectProgressTracker } from "../Subject/Subjects";
// import { PracticeQuestions } from "../practice/Practise";
import { tabConfig } from "@/lib/tabConfig";
import { examCards } from "@/lib/examCards";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
// import VideoDashboard from "@/components/dasnboard/tutordashboard/VideoDashboard";
import SuccessToolkit from "@/components/dashboard/tutordashboard/SuccessToolkit";
import { Button } from "@/components/ui/button";
import { ExamCard } from "../../../type/type";
import { WelcomeHeader } from "@/app/(protected)/dashboard/student/Welcome/Welcomes";
import { PerformanceSection } from "@/app/(protected)/dashboard/student/Performance/Performance";
import { WeeklyStreakTabs } from "@/app/(protected)/dashboard/student/weekly/Weekly";
import { PracticeQuestions } from "@/app/(protected)/dashboard/student/practice/Practise";
import { SubjectProgressTracker } from "@/app/(protected)/dashboard/student/Subject/Subjects";
// import { ExamCard } from "../../../../../../type/type";


export function StudentDashboard() {
  const [selectedExam, setSelectedExam] = useState<ExamCard | null>(null); // Track selected exam for SuccessToolkit
  const [showWeeklyAll, setShowWeeklyAll] = useState(false); // Track "View all" for WeeklyStreak

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

  const handleWeeklyViewAll = () => {
    console.log("Weekly View all clicked"); // Debug log
    setShowWeeklyAll(true); // Trigger full view
  };

  const handleWeeklyBack = () => {
    console.log("Back to dashboard from Weekly View all"); // Debug log
    setShowWeeklyAll(false); // Return to dashboard view
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

  // Render WeeklyStreak full view if "View all" is triggered
  if (showWeeklyAll) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Weekly Streak - All Items</h2>
          <Button variant="outline" onClick={handleWeeklyBack} className="text-[#7F56D9] flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        <Tabs defaultValue="weekly-streak" className="w-full">
          <TabsList className="bg-transparent flex space-x-2 mb-4 justify-start">
            <TabsTrigger
              value="weekly-streak"
              className="rounded-full px-4 py-2 text-sm bg-[#7F56D9] text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#6B7280]"
            >
              Weekly streak
            </TabsTrigger>
            <TabsTrigger
              value="my-achievement"
              className="rounded-full px-4 py-2 text-sm bg-transparent text-[#6B7280] data-[state=active]:bg-[#7F56D9] data-[state=active]:text-white"
            >
              My achievement
            </TabsTrigger>
            <TabsTrigger
              value="my-certificates"
              className="rounded-full px-4 py-2 text-sm bg-transparent text-[#6B7280] data-[state=active]:bg-[#7F56D9] data-[state=active]:text-white"
            >
              My certificates
            </TabsTrigger>
          </TabsList>
          <TabsContent value="weekly-streak">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold text-[#1D2939] mb-4">Weekly streak 0/5</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Array.from({ length: 15 }, (_, i) => i + 1)
                  .slice(0, 5)
                  .map((index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center">
                        <img
                          src={`/icons/badges/badge${index}.png`}
                          alt={`Badge ${index}`}
                          className="h-10 w-10"
                        />
                      </div>
                      <div className="mt-1 text-xs text-center text-[#6B7280]">
                        Complete 5 full course
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="my-achievement">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold text-[#1D2939] mb-4">My Achievements</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {Array.from({ length: 10 }, (_, i) => i)
                  .map((index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className={`flex h-12 w-12 items-center justify-center  ${index % 2 === 0 ? '' : ''}`}>
                        <img
                          src={`/icons/badges/badge${index + 1}.png`}
                          alt={`Achievement Badge ${index + 1}`}
                          className="h-10 w-10"
                        />
                      </div>
                      <div className="mt-1 text-xs text-center text-[#6B7280]">
                        Complete 5 full course
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="my-certificates">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold text-[#1D2939] mb-4">My Certificates</h2>
              <p className="text-[#6B7280]">No certificates yet.</p>
            </div>
          </TabsContent>
        </Tabs>
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
            {tabConfig.map((tab:any) => (
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
          <WeeklyStreakTabs onViewAll={handleWeeklyViewAll} />
          <PracticeQuestions />
        </div>
        <div>
          <SubjectProgressTracker />
        </div>
      </div>
    </div>
  );
}