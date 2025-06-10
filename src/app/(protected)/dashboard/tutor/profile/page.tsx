'use client';

import React from 'react';
import ProfileCard from '@/components/dasnboard/tutordashboard/ProfilePage'; // not ProfilePage

const ProfilePage = () => {
  return (
    <div className="flex justify-center pt-6">
      <ProfileCard
        name="Vivian Adams"
        email="vivian@gmail.com"
        grade="3"
        age="10"
        subjects={['English language', 'Mathematics', 'Further mathematics', 'Physics']}
        hobbies={['Reading', 'Writing', 'Football']}
        badges={[
          { name: 'Complete Full Course', color: 'purple', icon: '🏅' },
          { name: 'Complete 3rd Course', color: 'yellow', icon: '⭐' },
          { name: 'Complete 2nd Course', color: 'blue', icon: '🎖️' },
          { name: 'Complete 1st Course', color: 'green', icon: '🌟' },
        ]}
      />
    </div>
  );
};

export default ProfilePage;
