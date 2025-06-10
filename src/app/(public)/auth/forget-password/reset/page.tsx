"use client";
import React, { useState } from "react";
import { Clock, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "@/components/ui/spinner";
import { ResetPasswordFormProps } from "../../../../../../type/type";


const ResetPasswordForm: React.FC<any> = ({
  onSubmit,
  onCancel,
}) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
    const router = useRouter();
  
  const [errors, setErrors] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const validatePassword = (value: string) => {
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters";
    return "";
  };

  const validateConfirmPassword = (value: string) => {
    if (!value) return "Please confirm your password";
    if (value !== password) return "Passwords do not match";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    setErrors({
      email: "",
      otp: "",
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (!passwordError && !confirmPasswordError) {
      // onSubmit(password);
      resetPassword();
    }
  };

  const resetPassword = async () => {

    setIsLoading(true);
    setIsError(false);
    try {
      console.log( {email, otp, newPassword:password})
      console.log(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {email, otp, newPassword: password});
    
      if (response) {
        console.log("Password reset successful");
        setIsLoading(false);
        setIsError(false);
        toast.success("Password reset successful");
        router.push("/auth/login");
      } else {
        console.error("Password reset failed");
        setIsLoading(false);
        setIsError(true);
        toast.error("Password reset failed");
      }
    } catch (error:any) {
    let errorMessage = error?.response?.data?.message;
      setErrors((prev) => ({
        ...prev,
        password: errorMessage || "Password reset failed"
      }))
      console.error("Error resetting password:", error);
      setIsLoading(false);
      setIsError(true);
      toast.error(errorMessage|| "Error resetting password");
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
      <div className="space-y-4 mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Reset Password?</h2>
        <p className="text-gray-600">
          Kindly select a new password for frequent login
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type={"text"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);

              }}

              className={`w-full pl-10 pr-12 py-3 border rounded-md focus:outline-none focus:ring-2 ${errors.email
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                }`}
            />

          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            OTP
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="otp"
              type={"text"}
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);

              }}

              className={`w-full pl-10 pr-12 py-3 border rounded-md focus:outline-none focus:ring-2 ${errors.otp
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                }`}
            />

          </div>
          {errors.otp && (
            <p className="mt-1 text-sm text-red-500">{errors.otp}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors({
                    ...errors,
                    password: validatePassword(e.target.value),
                  });
                }
                if (confirmPassword) {
                  setErrors({
                    ...errors,
                    confirmPassword:
                      e.target.value === confirmPassword
                        ? ""
                        : "Passwords do not match",
                  });
                }
              }}
              onBlur={() => {
                setErrors({
                  ...errors,
                  password: validatePassword(password),
                });
              }}
              className={`w-full pl-10 pr-12 py-3 border rounded-md focus:outline-none focus:ring-2 ${errors.password
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                }`}
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
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword) {
                  setErrors({
                    ...errors,
                    confirmPassword: validateConfirmPassword(e.target.value),
                  });
                }
              }}
              onBlur={() => {
                setErrors({
                  ...errors,
                  confirmPassword: validateConfirmPassword(confirmPassword),
                });
              }}
              className={`w-full pl-10 pr-12 py-3 border rounded-md focus:outline-none focus:ring-2 ${errors.confirmPassword
                  ? "border-red-300 focus:ring-red-200"
                  : "border-gray-300 focus:ring-purple-200 focus:border-purple-400"
                }`}
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
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full cursor-pointer py-3 px-4 bg-[#640789] text-white font-medium rounded-full hover:bg-[#640789] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            "Reset Password"
          )}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="w-full py-3 px-4 border border-[#640789] text-[#640789] font-medium rounded-full  transition-colors focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2"
        >
          Cancel
        </button>
      </form>
    </motion.div>
  );
};

export default ResetPasswordForm
