"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function WeeklyStreak() {
  return (
    <Card className="w-full rounded-2xl border border-[#E4E4E7] shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 w-[]">
        <CardTitle className="text-lg font-semibold">Weekly streak 2/5</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 text-sm text-[#7F56D9]"
        >
          View all <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between py-4">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center ">
                <img
                  src={`/icons/badges/badge${index}.png`}
                  alt={`Badge ${index}`}
                  className=""
                />
              </div>
              <div className="mt-1 text-xs text-center text-[#6B7280]">
                Complete 5 full course
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}