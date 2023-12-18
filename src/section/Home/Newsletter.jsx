import React from "react";
import NewsletterCard from "../../components/NewsletterCard";
export default function Newsletter() {
  return (
    <>
      <div class="font-sans w-full h-full flex justify-center items-center bg-white p-36 max-md:py-24 max-sm:py-16 max-sm:p-10 max-sm:px-0">
        <div class="w-[640px] max-sm:w-full mx-5">
          <h1 class="text-center text-5xl 2xl:text-6xl font-bold font-CooperHevitt">
            Newsletter
          </h1>
          <p class="text-center 2xl:text-xl mt-2  font-montserrat">
            Stay up to date with Aditya's latest Reads and News
          </p>
          <div className="mt-5 max-sm:mt-5 mb-5">
            <NewsletterCard />
          </div>
        </div>
      </div>
    </>
  );
}
