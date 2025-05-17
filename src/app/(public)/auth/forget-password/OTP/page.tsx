"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const OTPVerificationForm = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const router = useRouter();

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    // Move to next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    // If all digits are filled, redirect
    const fullOtp = newOtp.join("");
    if (fullOtp.length === 4 && newOtp.every((digit) => digit)) {
      router.push("/auth/forget-password/reset");
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs[index - 1].current?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (e.key === "ArrowRight" && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);
    if (pasted.length === 4) {
      const digits = pasted.split("");
      setOtp(digits);
      inputRefs[3].current?.focus();
      router.push("/Authentication/forget-password/Reset");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md"
    >
      <div className="space-y-4 mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">OTP Verification</h2>
      </div>

      <div className="flex justify-center gap-3 mb-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            className="w-16 h-16 text-center text-2xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-500 transition-all"
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center mb-6">
        <p className="text-gray-600 mb-4">Didn't receive the code?</p>
        <button
          className="text-purple-700 font-medium hover:text-purple-800 hover:underline focus:outline-none w-full py-2.5 px-4 border border-[#640789] rounded-full bg-white"
          onClick={() => alert("Resend code logic goes here")}
        >
          Resend Code
        </button>
      </div>
    </motion.div>
  );
};

export default OTPVerificationForm;
