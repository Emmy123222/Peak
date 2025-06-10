import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';
import ProfileUpdateForm from './ProfileUpdateForm'; // Adjust the import path as needed

interface Badge {
  name: string;
  color: string;
  icon: string;
}

interface ProfileCardProps {
  name: string;
  email: string;
  grade: string;
  age: string;
  subjects: string[];
  hobbies: string[];
  badges: Badge[];
}

const badgeColorMap: Record<string, string> = {
  purple: "bg-purple-400",
  yellow: "bg-amber-300",
  blue: "bg-blue-400",
  green: "bg-green-400",
  orange: "bg-orange-400"
};

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  name: initialName, 
  email: initialEmail, 
  grade: initialGrade, 
  age: initialAge, 
  subjects: initialSubjects, 
  hobbies: initialHobbies, 
  badges 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [grade, setGrade] = useState(initialGrade);
  const [age, setAge] = useState(initialAge);
  const [subjects, setSubjects] = useState(initialSubjects);
  const [hobbies, setHobbies] = useState(initialHobbies);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = (data: {
    name: string;
    email: string;
    age: string;
    grade: string;
    subjects: string[];
    learningGoals: string[];
  }) => {
    setName(data.name);
    setEmail(data.email);
    setAge(data.age);
    setGrade(data.grade);
    setSubjects(data.subjects);
    setHobbies(data.learningGoals); // Assuming hobbies align with learning goals for simplicity
    setIsEditing(false);
  };

  return (
    <div className="w-full bg-white rounded-xl border border-gray-100 p-8">
      {isEditing ? (
        <ProfileUpdateForm
          initialName={name}
          initialEmail={email}
          initialAge={age}
          initialGrade={grade}
          initialSubjects={subjects}
          initialLearningGoals={hobbies}
          onUpdate={handleUpdate}
        />
      ) : (
        <>
          <div className="flex justify-between items-start mb-12 border rounded-[18px] border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                {name && name.length > 0 ? (
                  <img
                    src={`https://ui-avatars.com/api/?name=${name.replace(/\s+/g, '+')}&background=8B5CF6&color=fff`}
                    alt={`${name}'s avatar`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserCircle className="h-full w-full text-purple-500" />
                )}
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">{name}</h2>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>
            <button
              className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium"
              onClick={handleEditClick}
            >
              Edit profile
            </button>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-8">Personal details</h3>
            <div className="mb-12 border rounded-[18px] border-gray-200 p-6">
              <div className="mb-12 border-b border-gray-200 pb-6">
                <div className="grid grid-cols-4 gap-8">
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-1">Full name</p>
                    <p className="text-sm font-medium text-gray-900">{name}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-sm font-medium text-gray-900">{email}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-1">Grade level</p>
                    <p className="text-sm font-medium text-gray-900">Grade {grade}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-1">Age</p>
                    <p className="text-sm font-medium text-gray-900">{age}</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-1">Preferred subject</p>
                    <p className="text-sm font-medium text-gray-900">{subjects.join(', ')}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-1">Interest</p>
                    <p className="text-sm font-medium text-gray-900">{hobbies.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-gray-900 mb-8">My badges</h3>
            <div className="grid grid-cols-5 gap-4 border rounded-[18px] border-gray-200 p-6">
              {badges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={`w-16 h-16 ${badgeColorMap[badge.color] || "bg-gray-300"} rounded-full flex items-center justify-center mb-2`}
                  >
                    <span className="text-2xl">{badge.icon}</span>
                  </div>
                  <p className="text-xs text-center text-gray-600">Complete 5 full<br />course</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileCard;