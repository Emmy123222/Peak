"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WelcomeHeader } from "../Welcome/Welcomes";
import ExamPrepSection from "../exams-subjects/page";
import { PerformanceSection } from "../Performance/Performance";
import { WeeklyStreak } from "../weekly/Weekly";
import { SubjectProgressTracker } from "../Subject/Subjects";
import { PracticeQuestions } from "../practice/Practise";

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <WelcomeHeader />

      {/* First Row: Exam Prep and Performance Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 shadow-md rounded-[26px] bg-white p-6">
          <Tabs defaultValue="exam-prep" className="h-full">
            <TabsList className="bg-[#F3F5F9] rounded-[26px]">
              <TabsTrigger value="exam-prep">Exam prep</TabsTrigger>
              <TabsTrigger value="junior-secondary">Junior secondary</TabsTrigger>
              <TabsTrigger value="senior-secondary">Senior secondary (High school - SSCE)</TabsTrigger>
              <TabsTrigger value="primary">Primary (KG2)</TabsTrigger>
            </TabsList>
            <TabsContent value="exam-prep" className="mt-4">
              <ExamPrepSection />
            </TabsContent>
            <TabsContent value="junior-secondary" className="mt-4">
              <div className="rounded-md border p-6 h-[200px] flex items-center justify-center">
                <p className="text-muted-foreground">
                  Junior secondary content will appear here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="senior-secondary" className="mt-4">
              <div className="rounded-md border p-6 h-[200px] flex items-center justify-center">
                <p className="text-muted-foreground">
                  Senior secondary content will appear here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="primary" className="mt-4">
              <div className="rounded-md border p-6 h-[200px] flex items-center justify-center">
                <p className="text-muted-foreground">
                  Primary content will appear here
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="md:col-span-1">
          <PerformanceSection />
        </div>
      </div>

      {/* Second Row: Weekly Streak and Subject Progress Tracker */}
      <div className="grid gap-6 md:grid-cols-2">
  {/* Left column */}
  <div className="flex flex-col gap-6">
    <WeeklyStreak />
    <PracticeQuestions />
  </div>

  {/* Right column */}
  <div>
    <SubjectProgressTracker />
  </div>
</div>

      {/* Third Row: Practice Questions */}
      {/* <div className="grid gap-6">
        <div className="col-span-1">
          <PracticeQuestions />
        </div>
      </div> */}
    </div>
  );
}