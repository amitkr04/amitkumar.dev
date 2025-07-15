import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className=" relative flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-lg shadow p-6">
          <div className="text-center space-y-2">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600/20">
              <span className="text-green-400 text-xl">
                {" "}
                <CheckCircle className="h-6 w-6 text-green-400" />
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">Check Your Email</h2>
            <p className="text-gray-400 text-sm">
              We've sent a password reset link to your email address
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 p-4 my-4 rounded-md text-sm text-gray-300 text-center">
            We sent a password reset link to{" "}
            <span className="font-medium text-white">{email}</span>
          </div>

          <div className="text-center text-sm text-gray-400 mb-4">
            Didn't receive the email? Check your spam folder or{" "}
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-blue-400 hover:text-blue-300 underline font-medium cursor-pointer"
            >
              try again
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 underline font-medium"
            >
              <ArrowLeft className="mr-1 mt-1 h-4 w-4" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative  flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-lg shadow p-6">
        <div className="text-center space-y-1 mb-6">
          <h2 className="text-2xl font-bold text-white">Forgot Password?</h2>
          <p className="text-gray-400 text-sm">
            No worries! Enter your email address and we&apos;ll send you a reset
            link
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-200 block">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 text-gray-400">
                {" "}
                <Mail className="absolute top-3 h-4 w-4" />
              </span>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-4">
          <Link
            to="/login"
            className="inline-flex items-center text-sm text-gray-400 hover:text-gray-200 font-medium"
          >
            <ArrowLeft className="mr-1  h-4 w-4" /> Back to Login
          </Link>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-900 px-2 text-gray-400">Or</span>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300 underline font-medium"
          >
            Sign in
          </Link>
        </div>

        <div className="text-center text-sm text-gray-400 mt-1">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 underline font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
