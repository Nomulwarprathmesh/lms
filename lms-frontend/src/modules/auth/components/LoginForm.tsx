import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User, ArrowRight, Sparkles } from "lucide-react";

import { loginStart, loginSuccess, loginFailure } from "../store/authSlice";
import type { AppDispatch } from "../../../store/store";

type LoginFormData = {
  uniqueId: string;
  password: string;
};

const mockUsers = [
  {
    id: 1,
    uniqueId: "ADM001",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin" as const,
  },
  {
    id: 2,
    uniqueId: "TCH001",
    name: "Teacher User",
    email: "teacher@example.com",
    password: "teacher123",
    role: "teacher" as const,
  },
  {
    id: 3,
    uniqueId: "STU001",
    name: "Student User",
    email: "student@example.com",
    password: "student123",
    role: "student" as const,
  },
];

function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setAuthError("");
      setIsLoading(true);
      dispatch(loginStart());

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const user = mockUsers.find(
        (u) => u.uniqueId === data.uniqueId && u.password === data.password
      );

      if (!user) {
        const message = "Invalid ID or password";
        setAuthError(message);
        dispatch(loginFailure(message));
        setIsLoading(false);
        return;
      }

      dispatch(
        loginSuccess({
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            uniqueId: user.uniqueId,
          },
          token: "fake-token",
        })
      );

      setIsLoading(false);
    } catch {
      const message = "Login failed";
      setAuthError(message);
      dispatch(loginFailure(message));
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>

          {/* 🔥 Animated Sparkles */}
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="h-5 w-5 text-blue-600" />
          </motion.div>
        </div>

        <p className="text-sm text-gray-500">
          Enter your credentials to access your account
        </p>
      </div>

      {/* Demo */}
      <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <p className="mb-2 text-xs font-semibold text-blue-900">
          Demo Credentials
        </p>
        <div className="space-y-2 text-xs text-blue-800">
          <div className="flex justify-between">
            <span>Admin ID</span>
            <code className="rounded bg-white px-2 py-1">ADM001</code>
          </div>
          <div className="flex justify-between">
            <span>Password</span>
            <code className="rounded bg-white px-2 py-1">admin123</code>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
      >
        {/* Unique ID */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Unique ID
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              {...register("uniqueId", { required: "Unique ID is required" })}
              className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your ID"
            />
          </div>
          {errors.uniqueId && (
            <p className="mt-1 text-sm text-red-500">{errors.uniqueId.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              {...register("password", { required: "Password is required" })}
              type={showPassword ? "text" : "password"}
              className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-11 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Error */}
        {authError && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200">
            {authError}
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
        >
          {isLoading ? "Signing in..." : "Sign In"}
          {!isLoading && <ArrowRight size={16} />}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-gray-400">
        © 2024 EduAdmin LMS
      </p>
    </div>
  );
}

export default LoginForm;