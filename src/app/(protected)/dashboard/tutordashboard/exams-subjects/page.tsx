"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion-wrapper";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const examCards = [
  {
    id: "jamb",
    title: "JAMB",
    description: "Score 300+ with Smart JAMB Prep",
    icon: "💡",
    color: "bg-[#F3E8FF]",
    status: "continue",
    progress: 30,
    subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology"],
  },
  {
    id: "waec",
    title: "WAEC",
    description: "Score A1 with Smart WAEC Prep",
    icon: "📘",
    color: "bg-[#E0EAFF]",
    status: "start",
    progress: 0,
    subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology", "Government"],
  },
  {
    id: "neco",
    title: "NECO",
    description: "Score A1 with Smart NECO Prep",
    icon: "🐸",
    color: "bg-[#FEF0C7]",
    status: "start",
    progress: 0,
    subjects: ["Mathematics", "English", "Physics", "Chemistry", "Economics"],
  },
  {
    id: "gsse",
    title: "GSSE",
    description: "Excel with Smart GSSE Prep",
    icon: "📚",
    color: "bg-[#D1FAE5]",
    status: "start",
    progress: 0,
    subjects: ["Mathematics", "English", "General Science"],
  },
  {
    id: "ssce",
    title: "SSCE",
    description: "Master SSCE with Expert Prep",
    icon: "🎓",
    color: "bg-[#FEE2E2]",
    status: "start",
    progress: 0,
    subjects: ["Mathematics", "English", "Literature", "Biology", "Geography"],
  },
  {
    id: "bece",
    title: "BECE",
    description: "Ace BECE with Guided Prep",
    icon: "📝",
    color: "bg-[#E0F7FA]",
    status: "start",
    progress: 0,
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
  },
  {
    id: "utme",
    title: "UTME",
    description: "Boost UTME Scores with Smart Prep",
    icon: "🚀",
    color: "bg-[#E6F3FF]",
    status: "start",
    progress: 0,
  },
   {
    id: "utme",
    title: "UTME",
    description: "Boost UTME Scores with Smart Prep",
    icon: "🚀",
    color: "bg-[#E6F3FF]",
    status: "start",
    progress: 0,
  },
];

export default function ExamPrepSection() {
  const pathname = usePathname();
  const showAll = pathname === "/dashboard/tutordashboard/exams-subjects";

  const displayedCards = showAll ? examCards : examCards.slice(0, 3);

  return (
    <div className="space-y-4">
      {/* Title + See All */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Exam Prep</h3>
        {!showAll && (
          <Link
            href="/dashboard/tutordashboard/exams-subjects"
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            See all <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      {/* Cards */}
      <div className={showAll ? "flex flex-wrap gap-3" : "flex gap-8"}>
        {displayedCards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Card className="h-[283px] w-[300px] overflow-hidden rounded-2xl border border-[#E4E4E7] shadow-[0px_8px_20px_0px_rgba(152,_138,_173,_0.1)]">
              <CardHeader className={`p-0 ${card.color}`}>
                <div className="h-[120px] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-md">
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-[14px] font-bold text-foreground">
                  {card.title}
                </CardTitle>
                <p className="text-[13px] text-muted-foreground mt-1 leading-snug">
                  {card.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full h-1.5 bg-[#E4E4E7] rounded-full">
                    <div
                      className="h-full bg-[#FEC84B] rounded-full"
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {card.progress}%
                  </p>
                </div>
              </CardContent>

              {/* Button (Always visible) */}
              <CardFooter className="p-4 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full text-sm rounded-full font-semibold ${
                    card.status === "continue"
                      ? "border-2 border-purple-600 text-purple-600"
                      : "border-2 border-[#D0D5DD] text-[#344054]"
                  }`}
                >
                  {card.status === "continue" ? "Continue" : "Start"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
