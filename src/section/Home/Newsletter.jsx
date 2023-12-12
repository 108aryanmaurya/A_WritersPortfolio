import React from "react";
import NewsletterCard from "../../components/NewsletterCard";
export default function Newsletter() {
  return (
    <>
      <div class="font-sans my-32 w-full h-full flex justify-center items-center">
        <div class="w-[640px] mx-5">
          <h1 class="text-center text-5xl 2xl:text-6xl font-bold font-CooperHevitt">
            Newsletter
          </h1>
          <p class="text-center 2xl:text-xl mt-2  font-montserrat">
            Stay up to date with Aditya's latest Reads and News
          </p>
          <div className="mt-10 max-sm:mt-5 mb-5">
            <NewsletterCard />
          </div>
          <p class="text-center 2xl:text-lg font-montserrat">
            *No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </>
  );
}
