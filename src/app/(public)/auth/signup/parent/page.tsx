"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, User, Mail, Lock, BookOpen, Phone } from "lucide-react";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import EmailVerificationModal from "@/components/auth/email-verification";
import { registerUser } from "@/store/actions/authActions";
import { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "@/store/features/authSlice";
import { handleRegistration } from "@/lib/helper/handleRegisterUI";


const signUpSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    childName: z.string().min(2, "Child's name is required"),
    age: z.string().min(1, "Age range is required"),
    grade: z.string().min(1, "Grade level is required"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    phone: z.string().min(10, "Please enter a valid phone number"),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function StudentSignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      childName: "",
      age: "",
      grade: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      phone: "",
      //     confirmPassword: z.string(),
    },
  });


  //  registerAndLogin


  const onSubmit = (data: SignUpFormValues) => {
    const {childName, ...userData} = data;
    handleRegistration({ data: userData, dispatch, router, setIsError, setIsLoading, setError, setShowVerificationModal, setEmail, registerUser, role: "PARENT" });
  };

  const handleVerificationSuccess = () => {
    setShowVerificationModal(false);

    router.push("/auth/signup/otp");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h1 className="font-semibold text-[30px] leading-[38px] text-center font-[Montserrat]">
            Sign Up
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="name"
                type="text"
                placeholder="Enter full name"
                className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                  }`}
                {...register("name")}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="childName" className="text-sm font-medium">
              Child's name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="childName"
                type="text"
                placeholder="Enter child's name"
                className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.childName
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                  }`}
                {...register("childName")}
              />
            </div>
            {errors.childName && (
              <p className="text-sm text-red-500">{errors.childName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="age" className="text-sm font-medium">
              Age
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="age"
                className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 appearance-none bg-white ${errors.age
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                  }`}
                {...register("age")}
              >
                <option value="">Select your age range</option>
                <option value="5-8">5-8 years</option>
                <option value="9-12">9-12 years</option>
                <option value="13-15">13-15 years</option>
                <option value="16-18">16-18 years</option>
                <option value="18+">18+ years</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {errors.age && (
              <p className="text-sm text-red-500">{errors.age.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="grade" className="text-sm font-medium">
              Grade level
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <BookOpen className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="grade"
                className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 appearance-none bg-white ${errors.grade
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                  }`}
                {...register("grade")}
              >
                <option value="">Select your grade level</option>
                <option value="grade1-3">Grade 1-3</option>
                <option value="grade4-6">Grade 4-6</option>
                <option value="grade7-9">Grade 7-9</option>
                <option value="grade10-12">Grade 10-12</option>
                <option value="college">College/University</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {errors.grade && (
              <p className="text-sm text-red-500">
                {errors.grade.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email (Parent's email for minors)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                placeholder="olivia@untitledui.com"
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

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phone"
                type="tel"
                placeholder="+234 00-0000-0000"
                className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.phone
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                  }`}
                {...register("phone")}
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Create Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.password
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                  }`}
                {...register("password")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter password"
                className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.confirmPassword
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                  }`}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <input
              id="acceptTerms"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 mt-1"
              {...register("acceptTerms")}
            />
            <label htmlFor="acceptTerms" className="text-sm text-gray-600">
              I agree to the{" "}
              <Link href="/terms" className="text-purple-700 hover:underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-purple-700 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.acceptTerms && (
            <p className="text-sm text-red-500 -mt-2">
              {errors.acceptTerms.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 cursor-pointer bg-[#640789] text-white font-medium rounded-full hover:bg-[#640789c7] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            {isLoading ? "Loading..." : "Continue"}
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-purple-700 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
      {isError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {showVerificationModal && (
        <EmailVerificationModal
          email={`https://mail.google.com`}
          onClose={() => setShowVerificationModal(false)}
          onVerificationSuccess={handleVerificationSuccess}
        />
      )}
    </>
  );
}

