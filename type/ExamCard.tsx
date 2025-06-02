// type/examCard.ts
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