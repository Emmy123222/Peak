"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import EmailVerificationModal from "@/components/auth/otp-verification";
import { useRouter } from "next/navigation";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log(data);
    console.log(data);
    setShowVerificationModal(true);
  };
  const handleVerificationSuccess = () => {
    setShowVerificationModal(false);
    router.push("/auth/forget-password/OTP");
  };
  const router = useRouter();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <Link
          href="/auth/login"
          className="inline-flex items-center text-sm text-purple-700 hover:text-purple-800"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to login
        </Link>

        {!isSubmitted ? (
          <>
            <div className="space-y-2">
              <h1 className="font-montserrat font-semibold text-[40px] leading-[60px] tracking-[-0.02em] text-center capitalize">
                Forgot password?
              </h1>
              <p className="text-gray-600 font-[Montserrat] font-normal text-base leading-6 tracking-normal text-center align-middle">
                It’s nice to have you again. Enter your details to
              </p>
              <p className="text-gray-600 font-[Montserrat] font-normal text-base leading-6 tracking-normal text-center align-middle">
                continue
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                      }`}
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#640789] text-white font-medium rounded-full hover:bg-[#640789] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Reset password
              </button>
              <div
                className="text-purple-700 font-medium hover:text-[#640789] w-full py-2.5 px-4 border border-[#640789] rounded-full bg-white flex justify-center items-center"

              >
                <Link href="/auth/login"
                  className="mx-auto text-center"
                >
                  Login
                </Link>
              </div>

            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <Mail className="h-8 w-8 text-green-600" />
            </div>

            <h2 className="text-2xl font-semibold">Check your email</h2>

            <p className="text-gray-600">
              We have sent a password reset link to your email address. Please
              check your inbox and follow the instructions.
            </p>

            <div className="pt-4">
              <Link
                href="/auth/login"
                className="text-purple-700 font-medium hover:underline"
              >
                Back to login
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>

      {showVerificationModal && (
        <EmailVerificationModal
          email="olivia@untitledui.com"
          onClose={() => setShowVerificationModal(false)}
          onVerificationSuccess={handleVerificationSuccess}
        />
      )}
    </>
  );
}
