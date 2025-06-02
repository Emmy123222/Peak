
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
      <Card className="bg-[linear-gradient(to_right,_#640789,_#AE00D1)] text-white overflow-hidden relative">
        {/* Background images */}
        <div className="absolute inset-0 z-0 flex pointer-events-none s">
          <img src="/icons/circless.png" alt="Decor" />
          <img src="/icons/circles1.png" alt="Decor"  className="mr-20"/>
        </div>

        {/* Foreground content */}
        <CardContent className="p-6 flex items-center justify-between  ">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              Hello, Vivian <span className="text-xl">👋</span>
            </h2>
            <p className="text-2xl font-bold mt-1">Welcome to your Dashboard</p>
          </div>
            <div className=" absolute inset-0 z-10 flex pointer-events-none flex justify-end ">
              <img src="/icons/cir.png" alt="" className="ml-20"/>
            <img
              src="/icons/sch.png"
              alt="Student studying"
              className=""
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}