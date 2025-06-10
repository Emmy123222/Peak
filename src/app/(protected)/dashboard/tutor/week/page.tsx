"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface WeeklyStreakProps {
  onViewAll?: () => void;
}

export default function WeeklyStreakSection({ onViewAll }: WeeklyStreakProps) {
  return <WeeklyStreak onViewAll={onViewAll} />;
}

function WeeklyStreak({ onViewAll }: WeeklyStreakProps) {
  return (
    <Card className="w-full rounded-2xl border border-[#E4E4E7] shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Weekly streak 0/5</CardTitle>
        <Link
          href="/dashboard/tutor/WeeklyStreakDetails"
          onClick={onViewAll}
          className="gap-1 text-sm text-[#7F56D9] flex items-center hover:underline cursor-pointer"
        >
          View all <ChevronRight className="h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="py-4 flex flex-wrap gap-4">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={`/icons/badges/badge${index}.png`}
                  alt={`Badge ${index}`}
                  className="h-10 w-10"
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