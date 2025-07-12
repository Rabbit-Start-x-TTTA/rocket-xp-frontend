"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    alert("If your email exists, you’ll receive a reset link.");
  };

  return (
    <section className="w-full flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md">
        <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
        <p className="mt-2 mb-8 text-sm text-gray-600  text-center">
          Enter your email address and we&lsquo;ll send you a link to reset your
          password.
        </p>
        <label className="text-sm font-medium">Email Address</label>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mt-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 mt-2 bg-[var(--primary)] text-white rounded cursor-pointer"
        >
          Send Reset Link
        </button>
        <button
          type="button"
          className="w-full p-2 mt-2 rounded cursor-pointer"
        >
          Back to sign in
        </button>
      </form>
    </section>
  );
}
