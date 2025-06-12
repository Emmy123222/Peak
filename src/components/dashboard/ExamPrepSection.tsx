"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { tabConfig } from "@/lib/tabConfig";
import { examCards } from "@/lib/examCards";
import Link from "next/link";
import SuccessToolkit from "@/components/dashboard/tutordashboard/SuccessToolkit";
import { ExamCard } from "../../../type/type";
// import { ExamCard } from "../../../../../../type/type";

export default function ExamPrepSection() {
  const pathname = usePathname();
  const showAll = pathname === "/dashboard/tutordashboard/exams-subjects";
  const displayedCards = showAll ? examCards : examCards.slice(0, 7);
  const [selectedExam, setSelectedExam] = useState<ExamCard | null>(null);

  const handleButtonClick = (card: ExamCard) => setSelectedExam(card);
  const handleCloseToolkit = () => setSelectedExam(null);

  return (
    <div className="space-y-4">
      {selectedExam ? (
        <div className="relative">
          <button
            onClick={handleCloseToolkit}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            Close
          </button>
          <SuccessToolkit
            examName={selectedExam.title}
            description={selectedExam.description}
            features={selectedExam.features}
            icon={selectedExam.icon}
            color={selectedExam.color}
          />
        </div>
      ) : (
        <Tabs defaultValue="exam-prep" className="h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Exam Prep</h3>
            {!showAll && (
              <Link
                href="/dashboard/tutordashboard/exams-subjects"
                className="flex items-center gap-1 text-sm text-muted-foreground"
              >
                See all <ChevronRight className="h-4 w-4" />
              </Link>
            )}
          </div>
          <TabsList className="bg-[#F3F5F9] rounded-[26px]">
            {tabConfig?.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabConfig?.map((tab: any) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-4">
              {tab.content(examCards, displayedCards, handleButtonClick)}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
