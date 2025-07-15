import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock, UserCheck } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="relative min-h-screen   flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-600 border border-gray-800 p-6 rounded-lg shadow">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white">Create Account</h2>
          <p className="text-sm text-gray-400 mt-1">
            Enter your details below to create your account
          </p>
        </div>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-200 mb-1">Full Name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <User className="  h-4 w-4" />
              </span>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full pl-10 py-2 text-base bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-200 mb-1">Email</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Mail className="  top-3 h-4 w-4  " />
              </span>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full pl-10 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* User ID */}
          <div>
            <label className="block text-gray-200 mb-1">User ID</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <UserCheck className="  top-3 h-4 w-4  " />
              </span>
              <input
                type="text"
                placeholder="johndoe123"
                className="w-full pl-10 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-200 mb-1">Create Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Lock className="  top-3 h-4 w-4 " />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="w-full pl-10 pr-10 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-200 mb-1">Confirm Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Lock className="  top-3 h-4 w-4  " />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full pl-10 pr-10 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {showConfirmPassword ? "Hide password" : "Show password"}
                </span>
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="accent-blue-600"
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              I accept all{" "}
              <a
                href="/terms"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                terms and conditions
              </a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
          >
            Register
          </button>

          {/* Login Link */}
          <div className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300 underline font-medium"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
