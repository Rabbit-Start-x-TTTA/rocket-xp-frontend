"use client";

import React, { useState, FormEvent } from "react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useEffect } from "react";


const Register: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    async function doSignOut() {
      await signOut({ redirect: false });
    }
    doSignOut();
  }, []);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    if (!email.trim()) {
      newErrors.email = "กรุณากรอกอีเมล";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    if (!password) newErrors.password = "กรุณากรอกรหัสผ่าน";

    if (!confirmPassword) {
      newErrors.confirmPassword = "กรุณายืนยันรหัสผ่าน";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      

      if (res.ok) {
        router.push("/register/create");
      } else {
        console.log(errors);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-200"
      style={{ backgroundColor: "#F8F4FF" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-4 flex flex-col gap-6"
      >
        <h1 className="text-2xl text-black font-mono font-bold tracking-tight text-center">
          Sign Up
        </h1>

        {/* Sign Up with Google */}
        <Button
          onClick={() =>
            signIn("google", {
              callbackUrl: "/register/create",
              prompt: "select_account",
            })
          }
          className="mx-auto flex items-center gap-2 px-4 py-1 rounded-full font-semibold bg-gradient-to-r from-purple to-pink text-white text-sm shadow hover:from-pink hover:to-purple transition-colors"
          type="button"
          style={{ minWidth: 140 }}
        >
          <Image
            src="/google_logo.png"
            alt="Google Logo"
            width={18}
            height={18}
            priority={true}
          />
          Google
        </Button>
        {/* Or separator */}
        <div className="flex items-center justify-center mt-4">
          <hr className="flex-grow border-gray-400" />
          <span className="mx-3 text-gray-600 font-semibold">or</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        {/* Email */}
        <div>
          <Label
            htmlFor="email"
            className="block pl-3 text-gray-800 font-semibold"
          >
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block bg-gray-100 p-2 mt-0.5 mb-1 rounded-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <Label
            htmlFor="password"
            className="block pl-3 text-gray-900 mb-1 font-semidinblod"
          >
            รหัสผ่าน
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block bg-gray-100 p-2 my-1 rounded-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <Label
            htmlFor="confirmPassword"
            className="block pl-3 text-gray-800 mb-1 font-semidinblod "
          >
            ยืนยันรหัสผ่าน
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block bg-gray-100 p-2 my-1 rounded-full"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Create Account */}
        <Button
          type="submit"
          className="w-1/2 mx-auto mt-4 py-2 rounded-full font-semibold bg-gradient-to-r from-purple to-pink text-white text-base shadow hover:from-pink hover:to-[purple transition-colors"
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default Register;
