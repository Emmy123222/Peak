// lib/examCards.ts
import { ExamCard } from "../../type/ExamCard"
export const examCards: ExamCard[] = [
  {
    id: "jamb",
    title: "JAMB",
    description: "Score 300+ with Smart JAMB Prep",
    icon: "💡",
    color: "bg-[#F3E8FF]",
    status: "continue",
    progress: 30,
    subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology"],
    features: [
      "CBT exam replica interface",
      "15,000+ JAMB-style questions",
      "Real-time leaderboard motivation",
    ],
    className: " w-full"
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
    features: [
      "CBT exam replica interface",
      "15,000+ WAEC-style questions",
      "Real-time leaderboard motivation",
    ],
    className: " w-full"
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
    features: [
      "CBT exam replica interface",
      "15,000+ NECO-style questions",
      "Real-time leaderboard motivation",
    ],
    className: " w-full"
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
    features: [
      "CBT exam replica interface",
      "10,000+ GSSE-style questions",
      "Real-time leaderboard motivation",
    ],
    className: " w-full"
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
    features: [
      "CBT exam replica interface",
      "12,000+ SSCE-style questions",
      "Real-time leaderboard motivation",
    ],
    className: " w-full"
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
    features: [
      "CBT exam replica interface",
      "8,000+ BECE-style questions",
      "Real-time leaderboard motivation",
    ],
    className: " w-full"
  },
  {
    id: "utme",
    title: "UTME",
    description: "Boost UTME Scores with Smart Prep",
    icon: "🚀",
    color: "bg-[#E6F3FF]",
    status: "start",
    progress: 0,
    features: [
      "CBT exam replica interface",
      "15,000+ UTME-style questions",
      "Real-time leaderboard motivation",
    ],
    className: " w-full"
  },
];