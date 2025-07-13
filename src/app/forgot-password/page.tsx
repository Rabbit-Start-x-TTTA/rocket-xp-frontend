"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Something went wrong. Please try again."
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="w-full flex items-center justify-center h-screen">
        <div className="max-w-md text-center">
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-center mb-4">Email Sent!</h1>
          <p className="text-gray-600 mb-8">
            Email has been sent to your email address with instructions to reset
            your password.
          </p>
          <Link
            href="/login"
            className="block w-full p-2 mt-2 bg-[var(--primary)] text-white rounded cursor-pointer text-center"
          >
            Back to Sign In
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md w-full px-4">
        <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
        <p className="mt-2 mb-8 text-sm text-gray-600 text-center">
          Enter your email address and we&rsquo;ll send you a link to reset your
          password.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="w-full p-2 mt-2 mb-4 border rounded disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-2 mt-2 bg-[var(--primary)] text-white rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>

        <Link
          href="/login"
          className="block w-full p-2 mt-2 text-center rounded text-[var(--primary)] hover:underline"
        >
          Back to Sign In
        </Link>
      </form>
    </section>
  );
}
