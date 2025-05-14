"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, GraduationCap, Users } from "lucide-react";

export default function RoleSelection() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = React.useState<string | null>(null);

  const handleProceed = () => {
    if (selectedRole === "student") {
      router.push("/Authentication/Student/sign-up");
    } else if (selectedRole === "tutor") {
      router.push("/Authentication/Tutor/sign-up");
    } else if (selectedRole === "parent") {
      router.push("/Authentication/parent/sign-up");
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-center font-semibold text-[40px] leading-[60px] tracking-[-0.02em] font-montserrat">
          Select user role
        </h1>
        <p className="text-muted-foreground">
          Kindly select your role to continue
        </p>
      </div>

      <div className="space-y-4 mt-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`border rounded-lg p-4 cursor-pointer transition-all ${
            selectedRole === "student"
              ? "border-purple-500 bg-purple-50 shadow-sm"
              : "border-gray-200 hover:border-purple-200"
          }`}
          onClick={() => setSelectedRole("student")}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                selectedRole === "student"
              }`}
            >
              <img
                src="/icons/role1.png"
                alt=""
                className={`h-[50px] w-[50px] ${
                  selectedRole === "student"
                    ? "text-purple-500"
                    : "text-gray-500"
                }`}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[18px] leading-[28px] tracking-[0] font-montserrat">
                I'm a student
              </h3>
              <p className="text-sm text-gray-500">I want to learn</p>
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300">
              {selectedRole === "student" && (
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`border rounded-lg p-4 cursor-pointer transition-all ${
            selectedRole === "tutor"
              ? "border-purple-500 bg-purple-50 shadow-sm"
              : "border-gray-200 hover:border-purple-200"
          }`}
          onClick={() => setSelectedRole("tutor")}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                selectedRole === "tutor"
              }`}
            >
              <img
                src="/icons/role2.png"
                alt=""
                className={`h-[50px] w-[50px] ${
                  selectedRole === "student"
                    ? "text-purple-500"
                    : "text-gray-500"
                }`}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[18px] leading-[28px] tracking-[0] font-montserrat">
                I'm a Tutor
              </h3>
              <p className="text-sm text-gray-500">
                I want to impact knowledge
              </p>
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300">
              {selectedRole === "tutor" && (
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`border rounded-lg p-4 cursor-pointer transition-all ${
            selectedRole === "parent"
              ? "border-purple-500 bg-purple-50 shadow-sm"
              : "border-gray-200 hover:border-purple-200"
          }`}
          onClick={() => setSelectedRole("parent")}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                selectedRole === "parent"
              }`}
            >
              <img
                src="/icons/role3.png"
                alt=""
                className={`h-[50px] w-[50px] ${
                  selectedRole === "student"
                    ? "text-purple-500"
                    : "text-gray-500"
                }`}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[18px] leading-[28px] tracking-[0] font-montserrat">
                I'm a Parent/Guardian
              </h3>
              <p className="text-sm text-gray-500">
                I want to track my child's progress
              </p>
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300">
              {selectedRole === "parent" && (
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <button
        className={`w-full py-3 px-4 mt-8 rounded-full font-medium transition-all ${
          selectedRole
            ? "bg-[#640789] text-white hover:bg-[#640789]"
            : "bg-purple-300 text-white cursor-not-allowed"
        }`}
        disabled={!selectedRole}
        onClick={handleProceed}
      >
        Proceed
      </button>

      <div className="text-center mt-6">
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
    </div>
  );
}
