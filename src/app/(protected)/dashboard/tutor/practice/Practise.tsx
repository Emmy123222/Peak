"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PracticeQuestions() {
  // Define 5 empty rows to match the design
  const minRows = 4;
  const displayData = Array.from({ length: minRows }, (_, index) => ({
    id: `placeholder-${index}`,
    subject: "—",
    date: "—",
    score: "—",
    status: "—",
  }));

  return (
    <Card className="w-full rounded-2xl border border-[#E4E4E7] shadow-sm h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">
          Practice questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Grid layout for headers and rows */}
        <div className="w-full">
          {/* Header Row */}
          <div className="grid grid-cols-4 gap-4 border-b-[1px] border-gray-200 dark:border-gray-700 pb-2">
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Subject
            </div>
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Date
            </div>
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Score
            </div>
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Status
            </div>
          </div>

          {/* Data Rows */}
          {displayData.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-4 gap-4 py-2 border-b-[1px] border-gray-100 dark:border-gray-800"
            >
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {row.subject}
              </div>
              <div className="text-sm text-gray-900 dark:text-gray-100">
                {row.date}
              </div>
              <div className="text-sm text-gray-900 dark:text-gray-100">
                {row.score}
              </div>
              <div className="text-sm text-gray-900 dark:text-gray-100">
                {row.status}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between space-x-2 py-4">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}