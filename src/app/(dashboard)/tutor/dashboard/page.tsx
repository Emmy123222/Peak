"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function TutorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Welcome Banner */}
      <div className="mb-8 rounded-xl bg-[#640789] p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Hello, Vivian 👋</h1>
            <p className="mt-2 text-lg">Welcome to your Dashboard</p>
          </div>
          <img
            src="/images/Hero/girl.png"
            alt="Teacher"
            className="h-32 w-32 object-contain"
          />
        </div>
      </div>

      {/* Exam Categories */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Exam prep</h2>
          <Button variant="link" className="text-purple-600">
            See all
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="p-6 bg-[#FCF5FF]">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-purple-100 p-3">
                <img src="/icons/Pinkicon.png" alt="JAMB" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-semibold">JAMB</h3>
                <p className="text-sm text-gray-600">Score 300+ with Smart JAMB Prep</p>
              </div>
            </div>
            <Button className="mt-4 w-full rounded-full" variant="outline">
              Continue
            </Button>
          </Card>

          <Card className="p-6 bg-[#FCF5FF]">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-purple-100 p-3">
                <img src="/icons/Pinkicon.png" alt="WAEC" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-semibold">WAEC</h3>
                <p className="text-sm text-gray-600">Score 300+ with Smart WAEC Prep</p>
              </div>
            </div>
            <Button className="mt-4 w-full rounded-full" variant="outline">
              Start
            </Button>
          </Card>

          <Card className="p-6 bg-[#FEF2F2]">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-red-100 p-3">
                <img src="/icons/Brown.png" alt="JAMB" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-semibold">JAMB</h3>
                <p className="text-sm text-gray-600">Score 300+ with Smart JAMB Prep</p>
              </div>
            </div>
            <Button className="mt-4 w-full rounded-full" variant="outline">
              Start
            </Button>
          </Card>
        </div>
      </div>

      {/* Weekly Streak */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Weekly streak 2/5</h2>
          <Button variant="link" className="text-purple-600">
            View all
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((day) => (
            <Card key={day} className="p-4 text-center">
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <img src="/icons/icon.png" alt={`Day ${day}`} className="h-6 w-6" />
              </div>
              <p className="text-sm">Complete 5 full course</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Practice Questions */}
      <Card className="mb-8 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Practice questions</h2>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-blue-100 px-4 py-1">
              <span className="text-blue-600">1440</span>
            </div>
            <div className="rounded-full bg-green-100 px-4 py-1">
              <span className="text-green-600">900</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-4">Subject</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">Score</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((row) => (
                <tr key={row} className="border-b">
                  <td className="py-4">-</td>
                  <td className="py-4">-</td>
                  <td className="py-4">-</td>
                  <td className="py-4">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="outline" className="flex items-center gap-2">
            Previous
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}