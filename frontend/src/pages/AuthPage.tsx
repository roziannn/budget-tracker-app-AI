"use client";
import react, { useState } from "react";
import Image from "next/image";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const AuthPage = () => {
  const [type, setType] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = type === "login";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-8 sm:p-12 min-h-[750px] flex flex-col justify-center">
          {/* title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{isLogin ? "Sign In" : "Sign Up"}</h2>
          <p className="text-sm text-gray-600 mb-4">{isLogin ? "Welcome Back!" : "Let's Sign Up To Get Started!"}</p>
          {/* form input buat reg or login */}
          <form action="" className="space-y-4">
            {/* muncul while kondisi !login (register) */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input type="text" placeholder="Firda Rosiana Tanj" className="w-full mt-1 px-4 py-2 border rounded-md border-gray-400" />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3 pt-1 text-gray-500 text-sm">+62</div>
                    <input type="text" placeholder="8xxxxxxx" className="pl-12 w-full mt-1 px-4 py-2 border rounded-md border-gray-400" />
                  </div>
                </div>
              </div>
            )}
            {/* default muncul while kondisi login/register */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full
               mt-1 px-4 py-2 border rounded-md border-gray-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  className="w-full
               mt-1 px-4 py-2 border rounded-md border-gray-400"
                />
                <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                  {" "}
                  {/* ini default mata nya kan pw jd pas di klik baru bs text */}
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="flex items-center">
                <input id="terms" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the {""}{" "}
                  <button type="button" className="text-indigo-600 hover:underline">
                    term & privacy policy
                  </button>
                </label>
              </div>
            )}

            {/* btn submit form */}
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md flex 
            items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              {isLogin ? "Let's Explore" : "Get Started"}
            </button>

            {/* btn untk change kondisi reg/login */}
            <p className="mt-6 text-sm text-center text-gray-600">
              {/* logic kondisi login or not dr setType yg dikilk (state) */}
              {isLogin ? (
                <>
                  Don't have an account? {""}
                  <button type="button" className="text-indigo-600 hover:underline" onClick={() => setType("register")}>
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account? {""}
                  <button type="button" className="text-indigo-600 hover:underline" onClick={() => setType("login")}>
                    Sign In
                  </button>
                </>
              )}
            </p>
          </form>
        </div>

        <div className="hidden md:block bg-indigo-600 relative min-h-[750px] w-full">
          <Image src="/images/auth-img.png" alt="Auth Image" fill className="object-cover" priority />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
