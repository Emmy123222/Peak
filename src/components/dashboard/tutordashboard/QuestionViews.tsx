"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  MessageCircle,
  Lightbulb,
} from "lucide-react";
import AnalyticsModal from "./AnalyticsModal";
import ChatInterface from "./Chat";
import Link from "next/link";

interface Question {
  id: number;
  text: string;
  solution?: {
    steps: string[];
    correctAnswer: string;
  };
}

interface Subject {
  name: string;
  active: boolean;
}

interface Message {
  text: string;
  time: string;
  isSentByUser: boolean;
}

interface User {
  name: string;
  avatar?: string;
  status?: string;
  communityJoin?: () => void;
}

interface QuestionViewProps {
  examName: string;
  pastQuestionTitle?: string;
  onBack: () => void;
  onYearChange?: (year: string) => void;
}

const QuestionView: React.FC<QuestionViewProps> = ({
  examName,
  pastQuestionTitle = "WAEC 2023 Theory",
  onBack,
  onYearChange,
}) => {
  const [questionType, setQuestionType] = useState<"objective" | "theoretical">("theoretical");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [showSolution, setShowSolution] = useState(false);

  const currentYear = parseInt(pastQuestionTitle.match(/\d+/)?.[0] || "2023", 10);

  const subjects: Subject[] = [
    { name: "Mathematics", active: true },
    { name: "English language", active: false },
    { name: "Physics", active: false },
    { name: "Biology", active: false },
    { name: "Chemistry", active: false },
    { name: "Further mathematics", active: false },
  ];

  const objectiveQuestions: Question[] = [
    {
      id: 1,
      text: "The force, F, acting on the wings of an aircraft moving through the air of velocity, v, and density, ρ, is given by the equation F = kvxρ yA z, where k is a dimensionless constant and A is the surface area of the wings of the aircraft. Use dimensional analysis to determine the values of x, y, and z.",
      solution: {
        steps: [
          "1. y = 1",
          "2. x = 2",
          "3. Substitute x and y into the L equation: 2 - 3(1) + 2z = 1",
          "2 - 3 + 2z = 1",
          "-1 + 2z = 1",
          "2z = 2",
          "z = 1",
        ],
        correctAnswer: "x = 2, y = 1, z = 1",
      },
    },
    {
      id: 2,
      text: "a. Define strain energy.",
      solution: {
        steps: [
          "1. Strain energy is the energy stored in a material when it is deformed elastically.",
        ],
        correctAnswer: "Energy stored in a body due to deformation",
      },
    },
    {
      id: 3,
      text: "b. Write an expression for the energy stored, E, in a stretched wire of original length, l, cross-sectional area, A, extension, e, and Young's modulus, Y, of the material of the wire.",
      solution: {
        steps: [
          "1. The strain energy E in a stretched wire is given by the formula: E = (1/2) * stress * strain * volume.",
          "2. Stress = Y * strain, strain = e / l, volume = A * l.",
          "3. Substituting, E = (1/2) * Y * (e/l) * (e/l) * (A * l) = (1/2) * Y * A * e^2 / l.",
        ],
        correctAnswer: "E = (1/2) * Y * A * e^2 / l",
      },
    },
  ];

  const theoreticalQuestions: Question[] = [
    {
      id: 1,
      text: "The force, F, acting on the wings of an aircraft moving through the air of velocity, v, and density, ρ, is given by the equation F = kvxρ yA z, where k is a dimensionless constant and A is the surface area of the wings of the aircraft. Use dimensional analysis to determine the values of x, y, and z.",
      solution: {
        steps: [
          "1. y = 1",
          "2. x = 2",
          "3. Substitute x and y into the L equation: 2 - 3(1) + 2z = 1",
          "2 - 3 + 2z = 1",
          "-1 + 2z = 1",
          "2z = 2",
          "z = 1",
        ],
        correctAnswer: "x = 2, y = 1, z = 1",
      },
    },
    {
      id: 2,
      text: "a. Define strain energy.",
      solution: {
        steps: [
          "1. Strain energy is the energy stored in a material when it is deformed elastically.",
        ],
        correctAnswer: "Energy stored in a body due to deformation",
      },
    },
    {
      id: 3,
      text: "b. Write an expression for the energy stored, E, in a stretched wire of original length, l, cross-sectional area, A, extension, e, and Young's modulus, Y, of the material of the wire.",
      solution: {
        steps: [
          "1. The strain energy E in a stretched wire is given by the formula: E = (1/2) * stress * strain * volume.",
          "2. Stress = Y * strain, strain = e / l, volume = A * l.",
          "3. Substituting, E = (1/2) * Y * (e/l) * (e/l) * (A * l) = (1/2) * Y * A * e^2 / l.",
        ],
        correctAnswer: "E = (1/2) * Y * A * e^2 / l",
      },
    },
  ];

  const currentQuestions = questionType === "objective" ? objectiveQuestions : theoreticalQuestions;
  const question = currentQuestions[currentQuestion];

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello sir, please I would like you to explain something in this question",
      time: "12:07",
      isSentByUser: true,
    },
    {
      text: "Sure, I'm here to help! Which part of the question needs clarification?",
      time: "12:08",
      isSentByUser: false,
    },
  ]);

  const user: User = {
    name: "Peter Mathew",
    avatar: "/icons/matthew.png",
    status: "Online",
  };

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isSentByUser: true,
    };
    setMessages([...messages, newMessage]);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleNextYear = () => {
    const nextYear = currentYear - 1;
    if (nextYear >= 2001) {
      const newTitle = `WAEC ${nextYear} Theory`;
      if (onYearChange) onYearChange(newTitle);
    }
  };

  const handlePrevYear = () => {
    const prevYear = currentYear + 1;
    if (prevYear <= 2025) {
      const newTitle = `WAEC ${prevYear} Theory`;
      if (onYearChange) onYearChange(newTitle);
    }
  };

  const switchQuestionType = () => {
    setQuestionType((prev) => (prev === "objective" ? "theoretical" : "objective"));
    setCurrentQuestion(0);
    setUserAnswer("");
    setShowSolution(false);
  };

  const handleSubmitAnswer = () => {
    if (userAnswer.trim()) {
      setShowSolution(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {showChat ? (
        <div className="absolute inset-0 z-10 bg-white p-4">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handleCloseChat}
                className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50"
              >
                Back to Questions
              </button>
              <h3 className="text-lg font-semibold text-gray-800">Chat with {user.name}</h3>
            </div>
            <div className="flex-1">
              <ChatInterface
                user={user}
                messages={messages}
                onSendMessage={handleSendMessage}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          {/* Subject Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {subjects.map((subject) => (
              <button
                key={subject.name}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  subject.active
                    ? "bg-purple-100 text-purple-700 shadow-sm"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-200"
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>

          {/* Navigation Bar */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                90 Solved questions
              </span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 text-sm rounded-full border border-[#640789] text-[#640789] flex items-center gap-2 transition-colors"
              >
                View Analytics
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              </button>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleNextYear}
                className="flex items-center gap-1 px-4 py-2 text-sm rounded-full border border-[#640789] text-[#640789]"
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </button>
              <button
                onClick={handlePrevYear}
                className="flex items-center gap-1 px-4 py-2 text-sm rounded-full border border-[#640789] text-[#640789]"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex gap-8">
            {/* Question Content */}
            <div className="lg:col-span-3 flex-1">
              {/* PeakClass Header */}
              <div className="bg-[linear-gradient(to_right,_#640789,_#AE00D1)] text-white  text-white rounded-xl p-6 mb-8 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="">
                     <img src="/icons/white.png" alt="" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">PeakClass</h1>
                      <p className="text-purple-100 text-sm tracking-wide">VIRTUAL SCHOOL</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-100 font-medium">{pastQuestionTitle}</p>
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Question {question.id}.
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    {question.text}
                  </p>

                  {/* Text Input for Answer */}
                  <div className="mb-8">
                    <textarea
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Type your answer here..."
                      className="w-full p-4 border border-gray-200 rounded-lg text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-purple-200 resize-y min-h-[100px]"
                      disabled={showSolution}
                    />
                    {!showSolution && (
                      <button
                        onClick={handleSubmitAnswer}
                        className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all duration-200"
                      >
                        Submit Answer
                      </button>
                    )}
                  </div>

                  {/* Solution Display */}
                  {showSolution && question.solution && (
                    <div className="border-t border-gray-100 pt-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        Solution
                      </h3>
                      <div className="space-y-3 mb-6">
                        {question.solution.steps.map((step, index) => (
                          <p key={index} className="text-gray-700 leading-relaxed">
                            {step}
                          </p>
                        ))}
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800">
                          <span className="font-semibold">Correct answer is:</span>{" "}
                          <span className="font-bold">{question.solution.correctAnswer}</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Next Questions Preview */}
                {currentQuestions.slice(currentQuestion + 1).map((q, index) => (
                  <div key={q.id} className="border-t border-gray-100 p-8 bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Question {q.id}.
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{q.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 w-80">
              {/* Tutor Profile */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-purple-100"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{user.name}</h3>
                    <p className="text-gray-500">Tutor</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(true)}
                  className="w-full px-4 py-3 border border-purple-200 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all duration-200"
                >
                  Message
                </button>
              </div>

              {/* Question Type Toggle */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-2xl">?</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {questionType === "objective" ? "Objective questions" : "Theoretical questions"}
                  </h3>
                </div>
                <button
                  onClick={switchQuestionType}
                  className="w-full px-4 py-3 border border-purple-200 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all duration-200"
                >
                  Switch
                </button>
              </div>

              {/* Challenge Section */}
              <div className="bg-[#DCB5FF] text-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                      <MessageCircle size={20} />
                    </div>
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                      <BookOpen size={20} />
                    </div>
                  </div>
                  <Lightbulb size={28} className="text-yellow-300" />
                </div>
                <h3 className="text-xl font-semibold mb-6">Challenge yourself</h3>
                <Link
                  href="/dashboard/tutor/practise-question"
                  className="inline-block px-5 py-3 bg-white bg-opacity-20 text-white rounded-full font-medium hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
                >
                  Attempt practice questions
                </Link>
              </div>
            </div>
          </div>

          {/* Analytics Modal */}
          <AnalyticsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default QuestionView;