"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpeechBubbleProps {
  text: string;
  className?: string;
}

export function SpeechBubble({ text, className }: SpeechBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={cn(
        "bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium",
        className
      )}
    >
      {text}
    </motion.div>
  );
}
