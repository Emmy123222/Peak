"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {useState} from "react"
import WaitlistModal from "./WaitlistModal";
import Success from "./Success";
interface HeroFormProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (email: string) => void;
  isEmail: boolean
}

export function HeroForm({ email, setEmail, onSubmit, isEmail }: HeroFormProps) {

    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const openWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const closeWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
    }
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-full md:max-w-md mt-4"
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
onClick={openWaitlist}

          className="rounded-full text-sm font-semi bold bg-(--my-primary-color) hover:bg-[#7200D1] px-6 py-3 text-white font-medium cursor-pointer"
        >
          I'm in
        </Button>
      </motion.div>
      </div>

    </form>
                {/* Waitlist Modal */}

      {!isEmail ? email.length > 7 && <Success isOpen={isWaitlistOpen} onClose={closeWaitlist} />:
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />}
    </>
  );
}
