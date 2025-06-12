'use client';

import React, { useState, useRef } from 'react';
import { User, Mail, ChevronDown } from 'lucide-react';

interface Subject {
  name: string;
  selected: boolean;
}

interface LearningGoal {
  name: string;
  selected: boolean;
}

interface ProfileUpdateFormProps {
  initialName?: string;
  initialEmail?: string;
  initialAge?: string;
  initialGrade?: string;
  initialSubjects?: string[];
  initialLearningGoals?: string[];
  onUpdate?: (data: {
    name: string;
    email: string;
    age: string;
    grade: string;
    subjects: string[];
    learningGoals: string[];
  }) => void;
}

const ProfileUpdateForm: React.FC<ProfileUpdateFormProps> = ({
  initialName = '',
  initialEmail = '',
  initialAge = '',
  initialGrade = '',
  initialSubjects = [],
  initialLearningGoals = [],
  onUpdate,
}) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [age, setAge] = useState(initialAge);
  const [grade, setGrade] = useState(initialGrade);
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: 'Mathematics', selected: initialSubjects.includes('Mathematics') },
    { name: 'English Language', selected: initialSubjects.includes('English Language') },
    { name: 'Biology', selected: initialSubjects.includes('Biology') },
    { name: 'Physics', selected: initialSubjects.includes('Physics') },
    { name: 'Quantitative reasoning', selected: initialSubjects.includes('Quantitative reasoning') },
    { name: 'Chemistry', selected: initialSubjects.includes('Chemistry') },
    { name: 'Verbal Reasoning', selected: initialSubjects.includes('Verbal Reasoning') },
    { name: 'Non-verbal Reasoning', selected: initialSubjects.includes('Non-verbal Reasoning') },
    { name: 'Further Mathematics', selected: initialSubjects.includes('Further Mathematics') },
  ]);
  const [learningGoals, setLearningGoals] = useState<LearningGoal[]>([
    { name: 'Language learning', selected: initialLearningGoals.includes('Language learning') },
    { name: 'Reading comprehension', selected: initialLearningGoals.includes('Reading comprehension') },
    { name: 'Science experiments', selected: initialLearningGoals.includes('Science experiments') },
    { name: 'Math puzzles', selected: initialLearningGoals.includes('Math puzzles') },
    { name: 'Creative writing', selected: initialLearningGoals.includes('Creative writing') },
    { name: 'Learn something new', selected: initialLearningGoals.includes('Learn something new') },
    { name: 'Daily practice', selected: initialLearningGoals.includes('Daily practice') },
    { name: 'Study efficiently', selected: initialLearningGoals.includes('Study efficiently') },
    { name: 'Tech & innovation', selected: initialLearningGoals.includes('Tech & innovation') },
  ]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubjectToggle = (subjectName: string) => {
    setSubjects(subjects.map(subject =>
      subject.name === subjectName ? { ...subject, selected: !subject.selected } : subject
    ));
  };

  const handleGoalToggle = (goalName: string) => {
    setLearningGoals(learningGoals.map(goal =>
      goal.name === goalName ? { ...goal, selected: !goal.selected } : goal
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedSubjects = subjects.filter(s => s.selected).map(s => s.name);
    const selectedGoals = learningGoals.filter(g => g.selected).map(g => g.name);
    if (onUpdate) {
      onUpdate({ name, email, age, grade, subjects: selectedSubjects, learningGoals: selectedGoals });
    }
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className='w-full bg-white p-8 rounded-lg shadow-sm'>
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between w-96 border border-blue-300">
            <div className="flex items-center">
              <span className="text-green-500 text-2xl mr-2">✔</span>
              <p className="text-gray-700">Profile changes updated successfully, <span className="text-purple-600">Profile</span></p>
            </div>
            <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
        </div>
      )}

      <div className="flex items-center pb-6 mb-6 border rounded-[18px] border-gray-200 p-6">
        <div className="relative mr-4">
          <img src="/icons/bags.png" alt="User Avatar" className="w-[68px] h-[68px]" />
          <div className="absolute bottom-0 right-0 bg-purple-600 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
            <span className="text-white text-xs">+</span>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Vivian Adams</h2>
          <p className="text-sm text-gray-500">vee@gmail.com</p>
        </div>
      </div>

      {/* ✅ FORM with ref */}
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 border rounded-[18px] border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 w-full py-2.5 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-300 transition-all"
                placeholder="Enter full name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full py-2.5 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-300 transition-all"
                placeholder="olivia@untitledui.com"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <div className="relative">
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full py-2.5 px-4 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 transition-all"
              >
                <option value="">Select your age range</option>
                <option value="10-12">10-12</option>
                <option value="13-15">13-15</option>
                <option value="16-18">16-18</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Grade level</label>
            <div className="relative">
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full py-2.5 px-4 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 transition-all"
              >
                <option value="">Select your grade level</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Select your preferred subjects</h3>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <button
                key={subject.name}
                type="button"
                onClick={() => handleSubjectToggle(subject.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  subject.selected
                    ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Select your learning goals or interest (optional)</h3>
          <div className="flex flex-wrap gap-2">
            {learningGoals.map((goal) => (
              <button
                key={goal.name}
                type="button"
                onClick={() => handleGoalToggle(goal.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  goal.selected
                    ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {goal.name}
              </button>
            ))}
          </div>
        </div>
      </form>

      {/* ✅ External Submit Button */}
      <div className="mt-8 flex justify-start">
        <button
          type="button"
          onClick={() => formRef.current?.requestSubmit()}
          className="w-48 bg-[#640789] hover:bg-purple-700 text-white py-2.5 px-4 rounded-[20px] font-medium transition-all focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Update changes
        </button>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
