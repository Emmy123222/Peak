"use client";

import { useState, useEffect } from 'react';
import { QuizHeader } from './QuizHeader';
import { MultipleChoiceQuestion } from '../Question/MultipleChoiceQuestion';
import { TextInputQuestion } from '../Question/TextInputQuestion';
import quizData from '@/lib/quizData';
import { QuizResultModal } from './QuizResultModal';

const Quiz = ({ initialTime = 30 * 60 }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [quizEnded, setQuizEnded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  const answeredQuestions = Object.keys(answers).length;
  const totalQuestions = 40;
  const progress = (answeredQuestions / totalQuestions) * 100;
  const score = answeredQuestions;

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (!quizEnded && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            setQuizEnded(true);
            setShowModal(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizEnded, timeRemaining]);

  const handleAnswerSelect = (answer: string) => {
    setAnswers({ ...answers, [currentQuestionIndex]: answer });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizEnded(true);
      setShowModal(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleReview = () => {
    setShowModal(false);
    // Add logic to navigate to a review page if needed
  };

  const handleTryAgain = () => {
    setShowModal(false);
    setQuizEnded(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeRemaining(initialTime);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex p-4 relative">
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <QuizHeader 
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          progress={progress}
          timeRemaining={formatTime(timeRemaining)}
        />
        
        <div className="p-6">
          <h2 className="text-xl text-center mb-8">{currentQuestion.question}</h2>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/images/cirs.png" 
              alt="Math symbol"
              className=""
            />
          </div>
          
          <div className="max-w-2xl mx-auto">
            {currentQuestion.type === 'multiple-choice' ? (
              <MultipleChoiceQuestion
                options={currentQuestion.options ?? []}
                selectedAnswer={answers[currentQuestionIndex] || null}
                onSelectAnswer={handleAnswerSelect}
              />
            ) : (
              <TextInputQuestion
                value={answers[currentQuestionIndex] || ''}
                onChange={(value) => handleAnswerSelect(value)}
              />
            )}
            
            <div className="flex justify-center mt-8">
              <button 
                onClick={handleNextQuestion}
                className="px-8 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                disabled={!answers[currentQuestionIndex] || quizEnded}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && quizEnded && (
        <QuizResultModal
          score={score}
          timeRemaining={timeRemaining}
          onTryAgain={handleTryAgain}
          onReview={handleReview}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Quiz;