import React, { useState } from "react";

export default function NewsletterCard({ onSubscribe }) {
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const subscribeHandler = () => {
    if (!isValidEmail(email.trim())) {
      return;
    }

    setEmail("");

    // Call the onSubscribe prop
    if (onSubscribe) {
      onSubscribe();
    }
  };

  return (
    <>
      <div className="mb-6 max-sm:mb-0 flex justify-center max-sm:flex-col items-center gap-2">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="group block w-full max-sm:w-[80%] p-2  text-lg rounded-md dark:text-darkTextMain text-gray-900 border-2 dark:bg-darkBgPrimary border-gray-300 dark:border-gray-700  outline-none transition-colors duration-300 ease-in-out"
          placeholder="Enter your email"
        />
        <button
          type="button"
          onClick={subscribeHandler}
          className="border-2 border-slate-200 h-full dark:hover:border-blue-400   rounded-md   px-4 py-1 font-semibold text-black"
        >
          Subscribe
        </button>
      </div>
    </>
  );
}
