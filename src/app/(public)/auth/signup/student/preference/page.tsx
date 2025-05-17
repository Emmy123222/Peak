"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

interface Subject {
  id: string;
  name: string;
}

interface Goal {
  id: string;
  name: string;
}

export default function StudentPreferences() {
  const router = useRouter();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const subjects: Subject[] = [
    { id: "math", name: "Mathematics" },
    { id: "english", name: "English Language" },
    { id: "biology", name: "Biology" },
    { id: "physics", name: "Physics" },
    { id: "quant", name: "Quantitative reasoning" },
    { id: "chemistry", name: "Chemistry" },
    { id: "verbal", name: "Verbal Reasoning" },
    { id: "nonverbal", name: "Non-verbal Reasoning" },
    { id: "further-math", name: "Further Mathematics" },
  ];

  const goals: Goal[] = [
    { id: "language", name: "Language learning" },
    { id: "reading", name: "Reading comprehension" },
    { id: "science", name: "Science experiments" },
    { id: "math-puzzles", name: "Math puzzles" },
    { id: "creative", name: "Creative writing" },
    { id: "new", name: "Learn something new" },
    { id: "daily", name: "Daily practice" },
    { id: "efficient", name: "Study efficiently" },
    { id: "tech", name: "Tech & innovation" },
  ];

  const toggleSubject = (id: string) => {
    if (selectedSubjects.includes(id)) {
      setSelectedSubjects(selectedSubjects.filter((subject) => subject !== id));
    } else {
      setSelectedSubjects([...selectedSubjects, id]);
    }
  };

  const toggleGoal = (id: string) => {
    if (selectedGoals.includes(id)) {
      setSelectedGoals(selectedGoals.filter((goal) => goal !== id));
    } else {
      setSelectedGoals([...selectedGoals, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Selected subjects:", selectedSubjects);
    console.log("Selected goals:", selectedGoals);
    router.push("/dashboard");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <h1 className="font-[Montserrat] font-semibold text-[30px] leading-[38px] tracking-normal text-center">
          Learning preference
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label className="font-[Montserrat] font-semibold text-sm leading-5 tracking-normal">
            Select your preferred subjects
          </label>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <motion.button
                key={subject.id}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                  selectedSubjects.includes(subject.id)
                    ? "bg-purple-100 border-purple-300 text-purple-700"
                    : "bg-white border-gray-300 text-gray-700 hover:border-purple-200"
                }`}
                onClick={() => toggleSubject(subject.id)}
              >
                {subject.name}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="font-[Montserrat] font-semibold text-sm leading-5 tracking-normal">
            Select your learning goals or interest (optional)
          </label>
          <div className="flex flex-wrap gap-2">
            {goals.map((goal) => (
              <motion.button
                key={goal.id}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                  selectedGoals.includes(goal.id)
                    ? "bg-purple-100 border-purple-300 text-purple-700"
                    : "bg-white border-gray-300 text-gray-700 hover:border-purple-200"
                }`}
                onClick={() => toggleGoal(goal.id)}
              >
                {goal.name}
              </motion.button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#640789] text-white font-medium rounded-full hover:bg-[#640789] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Proceed
        </button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/Authentication/Login"
            className="text-purple-700 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
