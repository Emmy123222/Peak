"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { login } from "@/store/features/authSlice";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
  // rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      // rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    // console.log(data);
    loginWithGmail(data);
    // router.push("/dashboard");
  };

  const loginWithGmail = async (data: LoginFormValues) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data);
      console.log(res)
      dispatch(login(res.data.data));


      if (res.status === 200) {
        toast.success("Login successful");
        setIsLoading(false);
        setIsError(false)
        // router.push("/dashboard/tutor");
      } else {
        toast.error("Invalid credentials");
        setIsError(true); 
        setIsLoading(false);
        setError(res.data.message);
      }
    } catch (error:any) {
      setError(error?.message);
      toast.error("Something went wrong");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <h1 className="font-semibold text-[30px] leading-[38px] text-center font-[Montserrat]">
          Welcome Back!
        </h1>
        <p className="text-gray-600 font-montserrat font-normal text-base leading-6 text-center align-middle">
          It's nice to have you again. Enter your details to
        </p>
        <p className="text-gray-600 font-montserrat font-normal text-base leading-6 text-center align-middle">
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
              placeholder="olivia@untitledui.com"
              className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email
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
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="****"
              className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.password
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
          <Link
              href="/auth/forget-password"
              className="text-sm text-[#640789] hover:underline font-medium"
            >
              Forgot Password?
            </Link>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="rememberMe"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            // {...register("rememberMe")}
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-600">
            Remember me
          </label>
        </div>

        <button
          type="submit"

          className="w-full cursor-pointer py-3 px-4 bg-[#640789] text-white font-medium rounded-full hover:bg-[#640789cc] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full py-2.5 px-4 border border-[#640789] rounded-full bg-white text-gray-700 font-medium flex items-center justify-center space-x-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
            fill="#FFC107"
          />
          <path
            d="M3.15302 7.3455L6.43852 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z"
            fill="#FF3D00"
          />
          <path
            d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z"
            fill="#4CAF50"
          />
          <path
            d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
            fill="#1976D2"
          />
        </svg>
        <span>Login with Google</span>
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/auth"
            className="text-[#640789] font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
