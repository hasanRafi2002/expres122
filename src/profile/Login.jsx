import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProviderr";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle, resetPassword } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotDialog, setShowForgotDialog] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      navigate("/");
    } catch (error) {
      setAlert({
        show: true,
        message: "Invalid credentials. Please try again.",
        type: "error",
      });
      setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      setAlert({
        show: true,
        message: "Google Sign-In failed. Please try again.",
        type: "error",
      });
      setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!forgotPasswordEmail) {
      setAlert({
        show: true,
        message: "Please enter your email address.",
        type: "error",
      });
      return;
    }

    try {
      await resetPassword(forgotPasswordEmail);
      setAlert({
        show: true,
        message: "Password reset email sent! Please check your inbox.",
        type: "success",
      });
      setShowForgotDialog(false);
      setForgotPasswordEmail("");
    } catch (error) {
      setAlert({
        show: true,
        message: "Failed to send reset email. Please try again.",
        type: "error",
      });
    }
    setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b] ">
      <div className="relative w-full max-w-md p-8 space-y-6 border border-teal-100 shadow-2xl bg-white/90 backdrop-blur-lg rounded-2xl">
        {alert.show && (
          <div
            className={`absolute top-4 left-4 right-4 p-4 rounded-lg shadow-lg ${
              alert.type === "error"
                ? "bg-red-100 text-red-800"
                : "bg-teal-100 text-teal-800"
            } backdrop-blur-lg border ${
              alert.type === "error" ? "border-red-200" : "border-teal-200"
            }`}
          >
            {alert.message}
          </div>
        )}

        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text">
            Welcome Back
          </h2>
          <p className="text-teal-700">Sign in to continue to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-teal-900">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 transition-all duration-200 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/50 backdrop-blur-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-teal-900">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 transition-all duration-200 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/50 backdrop-blur-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="button"
            onClick={() => setShowForgotDialog(true)}
            className="text-sm font-medium text-teal-600 transition-colors duration-200 hover:text-teal-800"
          >
            Forgot your password?
          </button>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl hover:from-teal-600 hover:to-emerald-600 transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-teal-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-teal-600 bg-white/90">
              Or continue with
            </span>
          </div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-teal-200 rounded-xl hover:bg-teal-50 transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
        >
          <FcGoogle size={24} />
          <span className="font-medium text-teal-800">Sign in with Google</span>
        </button>

        <p className="text-sm text-center text-teal-700">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-xl font-extrabold text-teal-700 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {/* Custom Forgot Password Modal */}
      {showForgotDialog && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-teal-950/20 backdrop-blur-sm">
          <div className="w-full max-w-md p-8 border border-teal-100 shadow-2xl bg-white/90 backdrop-blur-lg rounded-2xl">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-teal-800">
                  Reset Password
                </h3>
                <p className="mt-2 text-sm text-teal-600">
                  Enter your email address and we'll send you instructions to
                  reset your password.
                </p>
              </div>

              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/50 backdrop-blur-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForgotDialog(false)}
                    className="px-6 py-2.5 text-sm font-medium text-teal-700 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl hover:from-teal-600 hover:to-emerald-600 transition-all duration-200 hover:shadow-lg"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
