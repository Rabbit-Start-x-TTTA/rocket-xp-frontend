"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    if (!newPassword || !confirmPassword) {
      setError("Please fill in all password fields.");
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    if (!token) {
      setError("Token is missing from the URL.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword, token }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Reset failed.");
      }

      setSuccessMessage("Your password has been reset successfully.");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="w-full flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md w-full flex flex-col">
        <h1 className="text-3xl font-bold text-center">Reset Password</h1>
        <p className="mt-2 mb-8 text-sm text-gray-600 text-center">
          Enter your new password below.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {successMessage}
          </div>
        )}

        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          disabled={isLoading}
          placeholder="Enter new password"
          className="w-full p-2 mt-2 mb-4 border rounded"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          disabled={isLoading}
          placeholder="Confirm new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mt-2 mb-4 border rounded"
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-2 mt-2 text-white rounded  cursor-pointer ${
            isLoading ? "bg-gray-400" : "bg-[var(--primary)]"
          }`}
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </section>
  );
}
