import { FC } from "react";

// types.ts
export type QuizOption = {
  id: string;
  text: string;
};

export interface QuizQuestion {
  id: number;
  question: string;
  type: "multiple-choice" | "text-input";
  options?: QuizOption[];
  correction: string[];
  correctAnswer: string;
};

export interface ResetPasswordFormProps {
  onSubmit: (password: string) => void;
  onCancel: () => void;
}

export interface ExamCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  status: "continue" | "start";
  progress: number;
  subjects?: string[];
  features: string[];
  className: string;
}

export interface WeeklyStreakProps {
  onViewAll?: () => void;
}

export interface TabComponentProps {
  examCards?: ExamCard[];
  displayedCards?: ExamCard[];
  handleButtonClick?: (card: ExamCard) => void;
}

export type TabProps = {
  examCards: ExamCard[];
  displayedCards: ExamCard[];
  handleButtonClick: (card: ExamCard) => void;
};

export type TabComponent = FC<TabProps>;

export interface TabConfigItem {
  value: string;
  label: string;
  Component: TabComponent;
}

export interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}