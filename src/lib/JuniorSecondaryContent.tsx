"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion-wrapper";
import { ExamCard } from "../../type/ExamCard";
import SuccessToolkit1 from "../components/dasnboard/tutordashboard/SuccessToolkit1";

type TabProps = {
  examCards: ExamCard[];
  displayedCards: ExamCard[];
  handleButtonClick: (card: ExamCard) => void;
};

type SubjectKey = "Mathematics" | "English" | "Science";

const topicData: Record<
  SubjectKey,
  {
    topics: { name: string; subTopics?: string[] }[];
    totalTopics: number;
    totalQuizzes: number;
  }
> = {
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
};

const tabContent = {
  overview:
    "Master Junior Secondary curriculum with engaging lessons, quizzes, and practice tests tailored for your level.",
  resources: ["Interactive Lessons", "Practice Quizzes", "Revision Notes"],
};

export const JuniorSecondaryTab: React.FC<TabProps> = ({
  examCards,
  displayedCards,
  handleButtonClick,
}) => {
  const [selectedCard, setSelectedCard] = useState<ExamCard | null>(null);

  const isValidSubject = (subject: string): subject is SubjectKey =>
    ["Mathematics", "English", "Science"].includes(subject);

  const handleCardClick = (card: ExamCard) => {
    handleButtonClick(card);
    if (isValidSubject(card.title)) {
      setSelectedCard(card); // Only store if it's a valid subject
    }
  };

  // If valid subject is selected, render SuccessToolkit1
  if (selectedCard && isValidSubject(selectedCard.title)) {
    const subjectData = topicData[selectedCard.title];
    return (
      <SuccessToolkit1
        subject={selectedCard.title}
        topics={subjectData.topics}
        tabContent={tabContent}
        totalTopics={subjectData.totalTopics}
        totalQuizzes={subjectData.totalQuizzes}
      />
    );
  }

  // Default card grid view
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {displayedCards.map((card, i) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <Card className="h-[320px] w-full overflow-hidden rounded-2xl border border-[#E4E4E7] shadow-md flex flex-col justify-between">
            <CardHeader className={`p-0 ${card.color}`}>
              <div className="h-[120px] flex items-center justify-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-md">
                  <span className="text-2xl">{card.icon}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-4 pb-2 flex-grow flex flex-col justify-between">
              <div>
                <CardTitle className="text-[14px] font-bold text-foreground">
                  {card.title}
                </CardTitle>
                <p className="text-[13px] text-muted-foreground mt-1 line-clamp-2">
                  {card.description}
                </p>
              </div>
              <div className="mt-4">
                <div className="w-full h-1.5 bg-[#E4E4E7] rounded-full">
                  <div
                    className="h-full bg-[#FEC84B] rounded-full"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {card.progress}%
                </p>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button
                variant="outline"
                size="sm"
                className={`w-fit text-sm rounded-full font-semibold p-4 ${
                  card.status === "continue"
                    ? "border-2 border-purple-600 text-purple-600"
                    : "border-2 border-[#D0D5DD] text-[#344054]"
                }`}
                onClick={() => handleCardClick(card)}
              >
                {card.status === "continue" ? "Continue" : "Start"}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
