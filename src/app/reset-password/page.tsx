"use client";

export default function ResetPassword() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Resetting password...");
  }

  return (
    <section className="w-full flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md flex flex-col ">
        <h1 className="text-3xl font-bold text-center">Reset Password</h1>
        <p className="mt-2 mb-8 text-sm text-gray-600  text-center">
          Enter your new password below. Make sure it is strong and secure.
        </p>
        <label>New Password</label>
        <input
          type="password"
          name="new-password"
          className="w-full p-2 mt-2 mb-4 border rounded"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          className="w-full p-2 mt-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 mt-2 bg-[var(--primary)] text-white rounded cursor-pointer"
        >
          Reset Password
        </button>
      </form>
    </section>
  );
}
