"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { tabConfig } from "@/lib/tabConfig";
import { examCards } from "@/lib/examCards";
import Link from "next/link";
import SuccessToolkit from "@/components/dasnboard/tutordashboard/SuccessToolkit";
import SuccessToolkit1 from "@/components/dasnboard/tutordashboard/SuccessToolkit1";
import { ExamCard } from "../../../../../../type/ExamCard";

// Subject-specific data for SuccessToolkit1
const topicData = {
  Mathematics: {
    topics: [
      { name: "Algebra" },
      {
        name: "Estimation and Approximation",
        subTopics: ["Rounding", "Significant Figures"],
      },
      { name: "Geometry" },
      { name: "Ratio and Proportion" },
      { name: "Scale Drawings" },
      { name: "Statistics and Probability" },
    ],
    totalTopics: 150,
    totalQuizzes: 1000,
  },
  English: {
    topics: [
      { name: "Comprehension" },
      { name: "Grammar", subTopics: ["Tenses", "Parts of Speech"] },
      { name: "Vocabulary" },
      { name: "Essay Writing" },
    ],
    totalTopics: 120,
    totalQuizzes: 800,
  },
  Science: {
    topics: [
      { name: "Biology Basics" },
      { name: "Physics Fundamentals", subTopics: ["Motion", "Energy"] },
      { name: "Chemistry Introduction" },
    ],
    totalTopics: 100,
    totalQuizzes: 600,
  },
} satisfies Record<string, any>;

const tabContent = {
  overview:
    "Master Junior Secondary curriculum with engaging lessons, quizzes, and practice tests tailored for your level.",
  resources: ["Interactive Lessons", "Practice Quizzes", "Revision Notes"],
};

export default function ExamPrepSection() {
  const pathname = usePathname();
  const showAll = pathname === "/dashboard/tutordashboard/exams-subjects";
  const displayedCards = showAll ? examCards : examCards.slice(0, 7);

  const [selectedExam, setSelectedExam] = useState<ExamCard | null>(null);

  const handleButtonClick = (card: ExamCard) => {
    setSelectedExam(card);
  };

  const handleCloseToolkit = () => {
    setSelectedExam(null);
  };

  // Extract matching subject key for use in SuccessToolkit1
  const subjectKey = (selectedExam &&
    (["Mathematics", "English", "Science"].find((subject) =>
      selectedExam.title.toLowerCase().includes(subject.toLowerCase())
    ) as keyof typeof topicData | undefined)
  );

  const isJuniorSecondarySubject = !!subjectKey;

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

          {isJuniorSecondarySubject ? (
            <SuccessToolkit1
              subject={subjectKey}
              topics={topicData[subjectKey].topics}
              tabContent={tabContent}
              totalTopics={topicData[subjectKey].totalTopics}
              totalQuizzes={topicData[subjectKey].totalQuizzes}
            />
          ) : (
            <SuccessToolkit
              examName={selectedExam.title}
              description={selectedExam.description}
              features={selectedExam.features}
              icon={selectedExam.icon}
              color={selectedExam.color}
              className="w-full"
            />
          )}
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
          <TabsList className="justify-start rounded-[20px] flex flex-col sm:flex-row overflow-x-auto p-1 sm:p-2">
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
            <TabsContent key={tab.value} value={tab.value} className="mt-2 sm:mt-4 w-full">
              <tab.Component
                examCards={examCards}
                displayedCards={displayedCards}
                handleButtonClick={handleButtonClick}
              />
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
