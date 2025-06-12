"use client";
import React, { useState } from "react";
import { Lightbulb } from "lucide-react";

interface Topic {
  name: string;
  subTopics?: string[];
}

interface TabContent {
  overview?: string;
  resources?: string[];
}

interface SubjectOverviewProps {
  subject: string;
  topics: Topic[];
  tabContent: TabContent;
  totalTopics?: number;
  totalQuizzes?: number;
}

export default function SubjectOverview({
  subject,
  topics,
  tabContent,
  totalTopics = 130,
  totalQuizzes = 900,
}: SubjectOverviewProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "resources">("overview");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="w-full bg-[#E6D4F2] rounded-xl p-6 mb-6 flex justify-center items-center relative">
        <Lightbulb className="w-12 h-12 text-purple-700" />
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === "overview"
              ? "bg-purple-100 text-purple-700 shadow-sm"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("resources")}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === "resources"
              ? "bg-purple-100 text-purple-700 shadow-sm"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
          }`}
        >
          Resources
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        {activeTab === "overview" && (
          <>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{subject}</h2>
            <p className="text-gray-600 mb-6">
              Nail UTME with adaptive mock tests, syllabus-focused drills, and time-management
              simulations. Get instant scoring and ranked benchmarks against other aspirants.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>CBT exam replica interface</li>
              <li>15,000+ JAMB-style questions</li>
              <li>Real-time leaderboard motivation</li>
            </ul>
            <div className="mt-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span> {totalTopics}+ Topics
              </span>
              <span className="ml-4 inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span> {totalQuizzes}+ Quizzes
              </span>
            </div>
          </>
        )}

        {activeTab === "resources" && (
          <>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Summary note</h2>
            <p className="text-gray-600 mb-6">
              Nail UTME with adaptive mock tests, syllabus-focused drills, and time-management
              simulations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topics.map((topic) => (
                <button
                  key={topic.name}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-left hover:bg-gray-100 transition-all duration-200"
                >
                  <h3 className="text-lg font-medium text-gray-900">{topic.name}</h3>
                  {topic.subTopics && (
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      {topic.subTopics.map((subTopic, index) => (
                        <li key={index}>{subTopic}</li>
                      ))}
                    </ul>
                  )}
                  <span className="text-purple-600 text-sm mt-2 inline-block">›</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}