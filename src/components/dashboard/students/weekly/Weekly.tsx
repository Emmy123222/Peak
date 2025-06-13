"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

interface WeeklyStreakProps {
  onViewAll?: () => void;
}

export function WeeklyStreakTabs({ onViewAll }: WeeklyStreakProps) {
  const [tab, setTab] = useState("weekly");

  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full">
      <TabsList className="mb-4 bg-[#F9FAFB] p-1 rounded-full w-fit">
        <TabsTrigger
          value="weekly"
          className="px-4 py-2 rounded-full data-[state=active]:bg-[#F4EBFF] data-[state=active]:text-[#7F56D9]"
        >
          Weekly streak
        </TabsTrigger>
        <TabsTrigger
          value="achievement"
          className="px-4 py-2 rounded-full data-[state=active]:bg-[#F4EBFF] data-[state=active]:text-[#7F56D9]"
        >
          My achievement
        </TabsTrigger>
        <TabsTrigger
          value="certificates"
          className="px-4 py-2 rounded-full data-[state=active]:bg-[#F4EBFF] data-[state=active]:text-[#7F56D9]"
        >
          My certificates
        </TabsTrigger>
      </TabsList>

      <TabsContent value="weekly">
        <WeeklyStreak onViewAll={onViewAll} />
      </TabsContent>

      <TabsContent value="achievement">
        <Card className="w-full rounded-2xl border border-[#E4E4E7] shadow-sm p-4 text-center text-sm text-gray-500">
          No achievements yet.
        </Card>
      </TabsContent>

      <TabsContent value="certificates">
        <Card className="w-full rounded-2xl border border-[#E4E4E7] shadow-sm p-4 text-center text-sm text-gray-500">
          No certificates available.
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function WeeklyStreak({ onViewAll }: WeeklyStreakProps) {
  const totalCards = 15;
  const [showAll, setShowAll] = useState(false);

  const displayedCards = showAll
    ? Array.from({ length: totalCards }, (_, i) => i + 1)
    : Array.from({ length: totalCards }, (_, i) => i + 1).slice(0, 5);

  const handleViewAll = () => {
    setShowAll(true);
    if (onViewAll) onViewAll();
  };

  return (
    <Card className="w-full rounded-2xl border border-[#E4E4E7] shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Weekly streak {displayedCards.length}/15</CardTitle>
        {!showAll && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleViewAll}
            className="gap-1 text-sm text-[#7F56D9]"
          >
            View all <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div className="py-4 flex flex-wrap gap-4">
          {displayedCards.map((index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={`/icons/badges/badge${index}.png`}
                  alt={`Badge ${index}`}
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
