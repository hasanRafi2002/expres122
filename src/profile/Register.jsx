import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProviderr";
import { UserPlus, Mail, Lock, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage(
            "This email is already registered. Please use another one."
          );
        } else {
          setErrorMessage(
            "Password must be at least 6 characters long and can include letters or numbers. Please try again."
          );
        }
        console.error("ERROR:", error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b] ">
      <div className="w-full max-w-md p-8 space-y-6 border border-teal-100 shadow-xl bg-white/80 backdrop-blur-lg rounded-3xl">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 transform rotate-45 bg-teal-500/20 rounded-xl blur-xl"></div>
            <UserPlus
              className="relative mx-auto mb-4 text-teal-600"
              size={60}
            />
          </div>
          <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text">
            Join Us
          </h1>
          <p className="mt-2 text-gray-600">Begin your adventure today</p>
        </div>

        {errorMessage && (
          <div className="p-4 text-sm text-red-700 border-l-4 border-red-500 bg-red-50 rounded-r-md">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="space-y-4">
            <div className="relative group">
              <label className="block mb-2 text-sm font-medium text-gray-700 ">
                Full Name
              </label>
              <div className="flex items-center">
                <UserPlus
                  className="absolute text-teal-500 transition-colors duration-300 left-3 group-hover:text-teal-600"
                  size={20}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full py-3 pl-10 pr-4 transition-all duration-300 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:outline-none hover:border-teal-400 bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block mb-2 text-sm font-medium text-gray-700 ">
                Email Address
              </label>
              <div className="flex items-center">
                <Mail
                  className="absolute text-teal-500 transition-colors duration-300 left-3 group-hover:text-teal-600"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full py-3 pl-10 pr-4 transition-all duration-300 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:outline-none hover:border-teal-400 bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block mb-2 text-sm font-medium text-gray-700 ">
                Password
              </label>
              <div className="flex items-center">
                <Lock
                  className="absolute text-teal-500 transition-colors duration-300 left-3 group-hover:text-teal-600"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  className="w-full py-3 pl-10 pr-12 transition-all duration-300 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:outline-none hover:border-teal-400 bg-white/50 backdrop-blur-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-teal-500 transition-colors duration-300 right-3 hover:text-teal-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white text-lg font-semibold transition duration-300 ease-in-out transform bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl hover:from-teal-600 hover:to-emerald-600 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 shadow-lg"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 ">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-xl font-extrabold text-teal-700 transition duration-300 hover:text-teal-800 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
