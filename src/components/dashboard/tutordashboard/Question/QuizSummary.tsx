"use client";

import React, { useState } from 'react';

interface QuizSummaryProps {
  onClose: () => void;
  correctCount: number;
  timeSpent: string;
  totalQuestions: number; 
  questions: {
    question: string;
    isCorrect: boolean;
    correction?: string[];
    timeSpent?: string;
    correctAnswer?: string; // Made optional
  }[];
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ onClose, correctCount, timeSpent, questions }) => {
  // State to track which question is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex p-4">
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Summary Section */}
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">Your summary</h1>
          <div className="flex gap-4 mb-6">
            <div className="flex items-center w-full h-[98px] shadow-md px-4 py-2 rounded-lg gap-4">
              <img src="/icons/question.png" alt="" />
              <div className="flex flex-col">
                <span>Correct answers</span>
                <span className="ml-2 font-semibold">{correctCount} out of {questions.length}</span>
              </div>
            </div>
            <div className="flex items-center w-full h-[98px] shadow-md px-4 py-2 rounded-lg gap-4">
              <img src="/icons/pending.png" alt="" />
              <div className="flex flex-col">
                <span>Total time spent</span>
                <span className="ml-2 font-semibold">{timeSpent}</span>
              </div>
            </div>
          </div>

          {/* Review Answers Section */}
          <h2 className="text-lg font-semibold mb-4">Review your answers</h2>
          <div className="space-y-4 max-h-fit ">
            {questions.map((q, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  q.isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
                } border rounded-lg p-4`}
              >
                <div className="flex items-center">
                  <img
                    src={q.isCorrect ? '/icons/correct.png' : '/icons/cancel.png'}
                    alt={q.isCorrect ? 'Correct' : 'Incorrect'}
                    className="mr-2"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{q.question}</p>
                  </div>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="ml-4 text-gray-500 flex items-center"
                  >
                    <span className="mr-1">⏰ {q.timeSpent || '0s'}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>

                {/* Expandable Correction Section */}
                {expandedIndex === index && (
                  <div className="mt-2 pl-6 text-gray-600">
                    {!q.isCorrect && (
                      <>
                        {q.correctAnswer && (
                          <p>
                            <strong>Correct Answer:</strong> {q.correctAnswer}
                          </p>
                        )}
                        {q.correction && (
                          <>
                            <p className="mt-1">Correction:</p>
                            {q.correction.map((line, i) => (
                              <p key={i}>{line}</p>
                            ))}
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-start mt-6 space-x-4">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSummary;