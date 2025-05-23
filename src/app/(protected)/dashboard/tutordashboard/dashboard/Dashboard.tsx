// src/app/(protected)/dashboard/tutordashboard/dashboard/Dashboard.tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WelcomeHeader } from "../Welcome/Welcomes";
import { PerformanceSection } from "../Performance/Performance";
import { WeeklyStreak } from "../weekly/Weekly";
import { SubjectProgressTracker } from "../Subject/Subjects";
import { PracticeQuestions } from "../practice/Practise";
import { tabConfig } from "@/lib/tabConfig";
import { examCards } from "@/lib/examCards";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ExamCard } from "../../../../../../type/examCard";

export function DashboardContent() {
  const displayedCards = examCards.slice(0, 3); // Only show first 3 cards on dashboard

  const renderButton = (card: ExamCard) => (
    <Link href={`/dashboard/tutordashboard/exams-subjects/${card.id}`}>
      <button
        className={`w-full text-sm rounded-full font-semibold ${
          card.status === "continue"
            ? "border-2 border-purple-600 text-purple-600"
            : "border-2 border-[#D0D5DD] text-[#344054]"
        }`}
      >
        {card.status === "continue" ? "Continue" : "Start"}
      </button>
    </Link>
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
                href="/dashboard/tutordashboard/exams-subjects"
                className="flex items-center gap-1 text-sm text-muted-foreground"
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