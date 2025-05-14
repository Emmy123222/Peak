"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroFormProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (email: string) => void;
}

export function HeroForm({ email, setEmail, onSubmit }: HeroFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 max-w-md mt-4"
    >
      <div className="relative flex w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="w-full focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          required
        />
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          type="submit"
          className="rounded-full bg-(--my-primary-color) hover:bg-[#7200D1] px-6 py-3 text-white font-medium cursor-pointer"
        >
          I'm in
        </Button>
      </motion.div>
      </div>

    </form>
  );
}
