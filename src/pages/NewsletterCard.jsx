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
      <form method="post" class="relative flex items-center">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.com"
          class="w-full bg-transparent py-3 pl-5 pr-20 border-2 border-solid border-black rounded-0 outline-none placeholder:text-black/50"
          required
        />
        <button
          type="submit"
          class="absolute h-full right-0 bg-black text-white px-5 flex items-center cursor-pointer hover:bg-black/80"
        >
          Subscribe
        </button>
      </form>
    </>
  );
}
