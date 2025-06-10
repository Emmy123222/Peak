// src/app/(protected)/dashboard/tutordashboard/ExamContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ExamCard } from "../../type/type";

interface ExamContextType {
  selectedExam: ExamCard | null;
  setSelectedExam: (exam: ExamCard | null) => void;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export function ExamProvider({ children }: { children: ReactNode }) {
  const [selectedExam, setSelectedExam] = useState<ExamCard | null>(null);

  return (
    <ExamContext.Provider value={{ selectedExam, setSelectedExam }}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  const context = useContext(ExamContext);
  if (context === undefined) {
    throw new Error("useExam must be used within an ExamProvider");
  }
  return context;
}