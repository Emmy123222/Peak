"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/dashboard/tutordashboard/SideBar";
import { TopFilterBar } from "@/components/dashboard/tutordashboard/TopFilterBar";
import { ChatWindow } from "@/components/dashboard/tutordashboard/ChatWindow";
import { QuestionRenderer } from "@/components/dashboard/tutordashboard/QuestionRenderer";
import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  text: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

export default function QuizWithAI() {
  const [subject, setSubject] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [questionType, setQuestionType] = useState<string>("");
  const [messages, setMessages] = useState<
    { text: string; isUser: boolean; timestamp: string; question?: Question; userAnswer?: string }[]
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(-1);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const initialMessage = {
      text: "Hello! I’m here to help you test your knowledge and skills. To make our session more effective, let’s tailor the questions to your needs. Customize Your Questions Which subject would you like to focus on? You can choose from: 1. Mathematics 2. Physics 3. English Let’s Begin!",
      isUser: false,
      timestamp: "11:05",
    };
    setMessages([initialMessage]);
  }, []);

  const handleSendMessage = (message: string) => {
    const userMessage = {
      text: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMessage]);

    if (currentQuestionIndex === -1 && !subject) {
      setSubject(message);
      const aiResponse = {
        text: `${message} it is! Let’s further customize your ${message} questions. Which area would you like to focus on? 1. Algebra 2. Geometry 3. Trigonometry`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } else if (currentQuestionIndex === -1 && !topic) {
      setTopic(message);
      const aiResponse = {
        text: `Great choice! Let’s choose the format: 1. Multiple Choice: Choose the correct answer from options A, B, C, D. 2. Single Answer: Provide a direct answer to the question. Which format would you like?`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } else if (currentQuestionIndex === -1 && !questionType) {
      setQuestionType(message);
      const sampleQuestions: Question[] = [
        {
          id: 1,
          text: "Solve for x: 2x + 5 = 11",
          options: ["A) 2", "B) 3", "C) 4", "D) 5"],
          correctAnswer: "B) 3",
          explanation: "2x + 5 = 11 → 2x = 6 → x = 3",
        },
        {
          id: 2,
          text: "If f(x) = 2x + 3, what is f(1)?",
          options: ["A) -4", "B) 0", "C) 1", "D) 5"],
          correctAnswer: "D) 5",
          explanation: "f(1) = 2(1) + 3 = 5",
        },
      ];
      setQuestions(sampleQuestions);
      const aiResponse = {
        text: `${message} it is! Let’s get started with your ${subject} ${topic} ${message} questions. Here’s your first question:`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      const questionMessage = {
        text: "",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        question: sampleQuestions[0],
      };
      setMessages((prev) => [...prev, aiResponse, questionMessage]);
      setCurrentQuestionIndex(0);
    } else if (currentQuestionIndex >= 0) {
      setUserAnswer(message);
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = message === currentQuestion.correctAnswer;
      setScore((prev) => (isCorrect ? prev + 1 : prev));
      const aiResponse = {
        text: isCorrect
          ? "Correct Answer! Let’s move to the next question."
          : `Incorrect. The correct answer is ${currentQuestion.correctAnswer}. ${currentQuestion.explanation}`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1] = {
          ...updatedMessages[updatedMessages.length - 1],
          userAnswer: message,
        };
        return [...updatedMessages, aiResponse];
      });
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        const nextQuestionMessage = {
          text: "",
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          question: questions[currentQuestionIndex + 1],
        };
        setMessages((prev) => [...prev, nextQuestionMessage]);
      } else {
        const finalResponse = {
          text: `Quiz completed! Your score: ${score + (isCorrect ? 1 : 0)}/${questions.length}`,
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, finalResponse]);
      }
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopFilterBar
          subject={subject}
          topic={topic}
          questionType={questionType}
          onSubjectChange={setSubject}
          onTopicChange={setTopic}
          onQuestionTypeChange={setQuestionType}
        />
        <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}