import React from 'react';
import { MessageSquare } from 'lucide-react';

interface QuestionViewProps {
  examYear: string;
  subject: string;
  tutor: {
    name: string;
    image: string;
    role: string;
  };
  questions: {
    number: number;
    text: string;
    subparts?: string[];
  }[];
}

export default function QuestionView({ examYear, subject, tutor, questions }: QuestionViewProps) {
  const [isObjective, setIsObjective] = React.useState(false); // Toggle for objective questions
  const [activeQuestion, setActiveQuestion] = React.useState(1); // Track the active question

  return (
    <div className="max-w-7xl mx-auto p-4 flex gap-6">
      {/* Left Panel (Question Content) */}
      <div className="w-3/4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-[linear-gradient(to_right,_#640789,_#AE00D1)] text-white  p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-purple-900">PeakClass Virtual School</span>
            <span className="text-sm text-gray-600">{`WAEC ${examYear} Theory - ${subject}`}</span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{tutor.name}</p>
              <p className="text-xs text-gray-600">{tutor.role}</p>
            </div>
            <button className="px-2 py-1 text-sm rounded-full bg-purple-200 text-purple-900 hover:bg-purple-300 flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              Message
            </button>
          </div>
        </div>

        {/* Question List */}
        <div className="space-y-6">
          {questions.map((question) => (
            activeQuestion === question.number && (
              <div key={question.number} className="border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900">Question {question.number}.</h3>
                <p className="text-sm text-gray-700 mb-2">{question.text}</p>
                {question.subparts && (
                  <ul className="list-decimal pl-5 space-y-2">
                    {question.subparts.map((subpart, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        {subpart}
                      </li>
                    ))}
                  </ul>
                )}
                <textarea
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={3}
                  placeholder="Write your answer here..."
                />
              </div>
            )
          ))}
        </div>

        {/* Objective Questions Section */}
        <div className="flex justify-between items-center bg-purple-100 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg text-green-600">?</span>
            <span className="text-sm font-medium text-purple-900">Objective questions</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isObjective}
              onChange={() => setIsObjective(!isObjective)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Switch</span>
          </label>
        </div>

        {/* Challenge Yourself Section */}
        <div className="bg-purple-100 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full">
              <span className="text-purple-600">💡</span>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900">Challenge yourself</h4>
              <p className="text-sm text-gray-600">Attempt practice questions</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
            Attempt practice questions
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-purple-100 text-purple-900 rounded-full hover:bg-purple-200 flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            Message
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-full">
            Ask to edit
          </button>
        </div>
      </div>

      {/* Right Panel (Question Sections) */}
      <div className="w-1/4 space-y-2 p-4 rounded-lg">
        {questions.map((question) => (
          <div key={question.number} className="border border-gray-200 p-2 rounded-lg text-black">
            <div
              className={`w-full rounded-lg overflow-hidden ${
                activeQuestion === question.number ? 'bg-white' : 'bg-white'
              }`}
            >
              <button
                onClick={() => setActiveQuestion(question.number)}
                className={`w-full flex items-center justify-between py-3 px-4 text-white transition-all duration-200 ${
                  activeQuestion !== question.number ? 'opacity-50 hover:opacity-75' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      activeQuestion === question.number ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  />
                  <span className="text-sm font-medium text-black">Question {question.number}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs">5 min</span>
                  {question.subparts && activeQuestion === question.number && (
                    <span className="text-xs text-gray-600">{question.subparts.length} parts</span>
                  )}
                </div>
              </button>
            </div>
            {activeQuestion === question.number && question.subparts && (
              <div className="mt-2 space-y-2">
                {question.subparts.map((subpart, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-4 bg-white text-black rounded-lg"
                  >
                    <span className="text-sm text-black">{`Part ${String.fromCharCode(97 + index)}. ${subpart}`}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}