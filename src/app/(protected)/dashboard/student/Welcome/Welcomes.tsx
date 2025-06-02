"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion } from "@/lib/motion-wrapper";

export function WelcomeHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[linear-gradient(to_right,_#AE00D1,_#640789)] text-white overflow-hidden">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              Hello, Vivian <span className="text-xl">👋</span>
            </h2>
            <p className="text-2xl font-bold mt-1">Welcome to your Dashboard</p>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/3662840/pexels-photo-3662840.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Student studying"
              className="h-24 rounded-lg object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
