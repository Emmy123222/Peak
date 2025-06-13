"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion-wrapper";
import { ExamCard, TabConfigItem } from "../../type/type";

import { JuniorSecondaryTab as JuniorSecondaryContentTab } from "@/lib/JuniorSecondaryContent";
import SuccessToolkit1 from "../components/dashboard/tutordashboard/SuccessToolkit1";

// --- Shared Types ---
type TabProps = {
  examCards: ExamCard[];
  displayedCards: ExamCard[];
  handleButtonClick: (card: ExamCard) => void;
};

// --- Exam Prep Tab ---
export const ExamPrepTab: React.FC<TabProps> = ({ displayedCards, handleButtonClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {displayedCards?.map((card, i) => (
      <motion.div
        key={card.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
      >
        <Card className="h-[320px] w-full overflow-hidden rounded-2xl border border-[#E4E4E7] shadow-[0px_8px_20px_0px_rgba(152,_138,_173,_0.1)] flex flex-col justify-between">
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
              <p className="text-[13px] text-muted-foreground mt-1 leading-snug line-clamp-2">
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
              <p className="text-xs text-muted-foreground mt-1">{card.progress}%</p>
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
              onClick={() => handleButtonClick(card)}
            >
              {card.status === "continue" ? "Continue" : "Start"}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    ))}
  </div>
);

// --- Junior Secondary Tab ---
export const JuniorSecondaryTab: React.FC<TabProps> = ({ examCards, displayedCards, handleButtonClick }) => {
  const [selectedCard, setSelectedCard] = useState<ExamCard | null>(null);

  const handleContinueClick = (card: ExamCard) => {
    if (card.status === "continue") {
      setSelectedCard(card);
    }
    handleButtonClick(card);
  };

  return selectedCard ? (
    <JuniorSecondaryContentTab
      examCards={examCards}
      displayedCards={displayedCards}
      handleButtonClick={handleContinueClick}
    />
  ) : (
    <JuniorSecondaryContentTab
      examCards={examCards}
      displayedCards={displayedCards}
      handleButtonClick={handleContinueClick}
    />
  );
};

// --- Simple Message Tab ---
export const SimpleMessageTab: React.FC<{ message: string }> = ({ message }) => (
  <div className="rounded-md border p-6 h-[200px] flex items-center justify-center">
    <p className="text-muted-foreground">{message}</p>
  </div>
);



// --- Tab Configuration ---
export const tabConfig: TabConfigItem[] = [
  {
    value: "exam-prep",
    label: "Exam prep",
    Component: ExamPrepTab,
  },
  {
    value: "junior-secondary",
    label: "Junior secondary",
    Component: JuniorSecondaryTab,
  },
  {
    value: "senior-secondary",
    label: "Senior secondary (High school - SSCE)",
    Component: () => <SimpleMessageTab message="Senior secondary content will appear here" />,
  },
  {
    value: "primary",
    label: "Primary (KG2)",
    Component: () => <SimpleMessageTab message="Primary content will appear here" />,
  },
];
