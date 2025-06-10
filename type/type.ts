// types.ts
export type QuizOption = {
  id: string;
  text: string;
};

export interface QuizQuestion {
  id: number;
  question: string;
  type: "multiple-choice" | "text-input";
  options?: { id: string; text: string }[];
  correctAnswer?: string; // Make optional
  correction?: string[];
}
