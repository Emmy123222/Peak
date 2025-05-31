"use client";

import React, { useState } from 'react';
import { Rocket, Clock } from 'lucide-react';
import Quiz from '@/components/dasnboard/tutordashboard/Question/Quiz';

const PracticeQuestionOverview = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  if (isQuizStarted) {
    return <Quiz />;
  }

  return (
    <div className="min-h-screen bg-[#C325FF] rounded-lg p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-4 right-4">
        <img 
          src="https://images.pexels.com/photos/11721857/pexels-photo-11721857.jpeg" 
          alt="" 
          className="w-16 h-16 object-contain opacity-50"
        />
      </div>
      
      {/* Main content */}
      <div className="mx-auto pt-8">
        <h1 className="text-2xl font-bold text-white mb-6 px-4">
          Practice question overview
        </h1>

        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-4 mb-6 px-4">
          <div className="bg-white rounded-xl p-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-green-100 rounded-full">
                <Rocket className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Total questions</div>
                <div className="font-semibold">90 questions</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-orange-100 rounded-full">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Total time</div>
                <div className="font-semibold">30 minutes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl p-6 mb-6 mx-4">
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
              <span>Tap on options to select the correct answer</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
              <span>Answer one question at a time, with the option to move to the next question after answering</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
              <span>Once an answer is selected, it cannot be changed. Make sure to choose wisely</span>
            </li>
          </ul>
        </div>

        {/* Start button */}
        <div className="px-4">
          <button 
            onClick={() => setIsQuizStarted(true)}
            className="block w-fit px-8 py-3 bg-white text-center rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            Start quiz
          </button>
        </div>
      </div>

      {/* Bottom rocket decoration */}
      <div className="absolute bottom-4 left-4">
        <img 
          src="https://images.pexels.com/photos/11721857/pexels-photo-11721857.jpeg" 
          alt="" 
          className="w-24 h-24 object-contain opacity-50"
        />
      </div>
    </div>
  );
};

export default PracticeQuestionOverview;