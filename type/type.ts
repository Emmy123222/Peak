// types.ts
export type QuizOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: number;
  question: string;
  type: "multiple-choice" | "text-input";
  options?: QuizOption[];
  correctAnswer: string;
};
