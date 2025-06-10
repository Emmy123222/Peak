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
