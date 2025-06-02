"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { tabConfig } from "@/lib/tabConfig";
import { examCards } from "@/lib/examCards";
import Link from "next/link";
import SuccessToolkit from "@/components/dasnboard/tutordashboard/SuccessToolkit";
import { ExamCard } from "../../../../../../type/ExamCard";

export default function ExamPrepSection() {
  const pathname = usePathname();
  const showAll = pathname === "/dashboard/tutordashboard/exams-subjects";
  const displayedCards = showAll ? examCards : examCards.slice(0, 7);
  const [selectedExam, setSelectedExam] = useState<ExamCard | null>(null);

  const handleButtonClick = (card: ExamCard) => {
    setSelectedExam(card); // Set the selected exam to show SuccessToolkit
  };

  const handleCloseToolkit = () => {
    setSelectedExam(null); // Clear the selected exam to return to the card list
  };

  return (
    <div className="space-y-4 px-2 sm:px-4">
      {selectedExam ? (
        <div className="relative w-full">
          <button
            onClick={handleCloseToolkit}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground text-xs sm:text-sm"
          >
            Close
          </button>
          <SuccessToolkit
            examName={selectedExam.title}
            description={selectedExam.description}
            features={selectedExam.features}
            icon={selectedExam.icon}
            color={selectedExam.color}
            className="w-full"
          />
        </div>
      ) : (
        <Tabs defaultValue="exam-prep" className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-4 space-y-2 sm:space-y-0">
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Exam Prep</h3>
            {!showAll && (
              <Link
                href="/dashboard/tutordashboard/exams-subjects"
                className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                See all <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            )}
          </div>
          <TabsList className="bg-[#F3F5F9] rounded-[20px] flex flex-col sm:flex-row overflow-x-auto p-1 sm:p-2">
            {tabConfig.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 flex-1 sm:flex-none min-w-[80px] sm:min-w-[120px] text-center"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabConfig.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="mt-2 sm:mt-4 w-full"
            >
              <div className="space-y-2 sm:space-y-4">
                {tab.content(examCards, displayedCards, handleButtonClick)}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}