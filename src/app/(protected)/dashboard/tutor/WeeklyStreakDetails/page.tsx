"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import Certificate  from "@/components/dashboard/tutordashboard/Certificate";
  

export default function WeeklyStreakDetails() {
    const [isEditing, setIsEditing] = useState(false);

     const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-white p-6 rounded-xl shadow-md">
        {isEditing ? (
            <Certificate/>
             ) : (
      <Tabs defaultValue="weekly-streak" className="w-full">
        <TabsList className="bg-transparent flex space-x-2 mb-4 justify-start">
          <TabsTrigger
            value="weekly-streak"
            className="rounded-full px-4 py-2 text-sm bg-transparent text-[#6B7280] data-[state=active]:bg-[#F4D8FF] data-[state=active]:text-black"
          >
            Weekly streak
          </TabsTrigger>
          <TabsTrigger
            value="my-achievement"
            className="rounded-full px-4 py-2 text-sm bg-transparent text-[#6B7280] data-[state=active]:bg-[#F4D8FF] data-[state=active]:text-black"
          >
            My achievement
          </TabsTrigger>
          <TabsTrigger
            value="my-certificates"
            className="rounded-full px-4 py-2 text-sm bg-transparent text-[#6B7280] data-[state=active]:bg-[#F4D8FF] data-[state=active]:text-black"
          >
            My certificates
          </TabsTrigger>
        </TabsList>

        <TabsContent value="weekly-streak">
          <div className="bg-white rounded-[18px] p-4 border border-[#E4E4E4]">
            <h2 className="text-lg font-semibold text-[#1D2939] mb-4">Weekly streak 0/5</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {Array.from({ length: 15 }, (_, i) => i + 1)
                .slice(0, 5)
                .map((index) => (
                  <div key={index} className="flex flex-col items-center">
                    
                      <img
                        src={`/icons/badges/badge${index}.png`}
                        alt={`Badge ${index}`}
                        className=""
                      />
                    
                    <div className="mt-1 text-xs text-center text-[#6B7280]">
                      Complete 5 full course
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="my-achievement">
            
          <div className="bg-white rounded-lg p-6 border border-[#E4E4E4]">
            <div className="border-b border-[#E4E4E4] pb-4 mb-4">
            <div className="flex items-center justify-between ">
              {Array.from({ length: 5 }, (_, i) => i)
                .map((index) => (
                  <div key={index} className="flex flex-col gap-6 items-center">
                    <div className={` ${index % 2 === 0 ? '' : ''}`}>
                      <img
                        src={`/icons/badgess/badge${index + 1}.png`}
                        alt={`Achievement Badge ${index + 1}`}
                        className=""
                      />
                    </div>
                    <div className="mt-1 text-xs text-center text-[#6B7280]">
                      Complete 5 full course
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex items-center justify-between ">
              {Array.from({ length: 5 }, (_, i) => i)
                .map((index) => (
                  <div key={index} className="flex flex-col gap-6 items-center">
                    <div className={` ${index % 2 === 0 ? '' : ''}`}>
                      <img
                        src={`/icons/badgess/badge${index + 1}.png`}
                        alt={`Achievement Badge ${index + 1}`}
                        className=""
                      />
                    </div>
                    <div className="mt-1 text-xs text-center text-[#6B7280]">
                      Complete 5 full course
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="my-certificates" className="space-y-8">
          <div className="bg-white rounded-[18px] p-6 border border-[#E4E4E4]">
           <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <img src="/icons/peak11.png" alt="" />
                <div>
                    <h2 className="font-Montserrat font-semibold text-[18px] leading-[28px] align-middle">Grade 3</h2>
                    <p>September 2024</p>
                </div>
            </div>
            <button className="rounded-[20px] border border-[#640789] w-[91px] h-[36px]" onClick={handleEditClick}>View</button>
           </div>
          </div>
           <div className="bg-white rounded-[18px] p-6 border border-[#E4E4E4]">
           <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <img src="/icons/peak11.png" alt="" />
                <div>
                    <h2 className="font-Montserrat font-semibold text-[18px] leading-[28px] align-middle">Grade 3</h2>
                    <p>September 2024</p>
                </div>
            </div>
            <button className="rounded-[20px] border border-[#640789] w-[91px] h-[36px]"onClick={handleEditClick}>View</button>
           </div>
          </div>
        </TabsContent>
      </Tabs>
      )}
    </div>
  );
}

