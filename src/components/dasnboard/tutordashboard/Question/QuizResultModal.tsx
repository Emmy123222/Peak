"use client";

import React from 'react';

interface QuizResultModalProps {
  score: number;
  timeRemaining: number;
  onTryAgain: () => void;
  onReview: () => void;
  onCancel: () => void;
}

export const QuizResultModal = ({ score, timeRemaining, onTryAgain, onReview, onCancel }: QuizResultModalProps) => {
  const isGreatJob = score === 40;
  const isTimeUp = timeRemaining <= 0;
  const isOops = score < 40 && timeRemaining > 0;

  const modalTitle = isGreatJob ? "Great Job!" : isTimeUp ? "Time Up!" : "Oops!";
  const modalMessage = isGreatJob
    ? "You got all answers correct"
    : isTimeUp
    ? "Oops your time is up. Feel free to try again."
    : `You got only ${score} answers correctly, no need worry. You can still try again, you got this.`;
  const circleClass = isGreatJob || isTimeUp 
    ? "bg-gradient-to-br from-[#6C0791] to-[#FF08DA]" // Bottom-right gradient for circle
    : "bg-[#EF4444]"; // Solid red for Oops

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0B0713]/80 to-[#1A0F2A]/80 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[373px] h-[417px] relative">
        <button onClick={onCancel} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ✕
        </button>
        <div className="flex flex-col items-center space-y-3">
          <div className="relative">
            <div className={`w-[119px] h-[119px] ${circleClass} rounded-full flex items-center justify-center text-white text-3xl font-bold`}>
              {score}
           
            <div className="absolute mt-16  text-center text-sm text-gray-600">
              Out of 40
            </div> </div>
          </div>
          <h2 className="text-2xl font-bold mt-4">{modalTitle}</h2>
          <p className="text-center text-gray-700 mt-2">{modalMessage}</p>
          {(isOops || isTimeUp) && (
            <button
              onClick={onTryAgain}
              className="mt-6 w-full bg-[#7F56D9] text-white py-2 rounded-full hover:bg-[#6B46C1] transition-colors"
            >
              Try again
            </button>
          )}
          <button
            onClick={onReview}
            className="mt-2 w-full text-[#7F56D9] py-2 rounded-full border border-[#7F56D9] hover:bg-gray-100 transition-colors"
          >
            Review answers
          </button>
          {isGreatJob && (
            <button
              onClick={onCancel}
              className="mt-2 w-full text-[#7F56D9] py-2 rounded-full border border-[#7F56D9] hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};