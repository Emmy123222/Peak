"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";

interface EmailVerificationModalProps {
  email: string;
  onClose: () => void;
  onVerificationSuccess: () => void;
}

export default function OTPVerificationModal({
  email,
  onClose,
  onVerificationSuccess,
}: EmailVerificationModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Simulate verification check
  const handleVerification = () => {
    // In a real app, this would verify the code
    onVerificationSuccess();
  };

  // Handle click outside to close
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id === "verification-backdrop") {
        setIsOpen(false);
        setTimeout(onClose, 300); // Wait for animation to complete
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setTimeout(onClose, 300); // Wait for animation to complete
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="verification-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg p-6 max-w-md w-full relative"
          >
            <button
              onClick={() => {
                setIsOpen(false);
                setTimeout(onClose, 300);
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>

              <h2 className="text-xl font-semibold">OTP Verification</h2>
              <p className="text-gray-600 font-montserrat font-normal text-base leading-6 tracking-normal text-center align-middle">
                We have sent you a 6-digit, kindly
              </p>
              <p className="text-gray-600 font-montserrat font-normal text-base leading-6 tracking-normal text-center align-middle">
                check your email to verify.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleVerification}
                className="w-full py-3 bg-[#640789] text-white font-medium rounded-full hover:bg-[#640789] mt-4"
              >
                Check email
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
