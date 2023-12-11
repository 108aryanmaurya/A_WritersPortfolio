import React from "react";

export default function ContactForm() {
  return (
    <>
      <section class="bg-gray-900  max-sm:px-6 py-12 max-sm:py-16">
        <div class="flex justify-evenly items-center max-sm:flex-col gap-5">
          <form id="form" class="w-[70%] max-sm:w-[90%]  font-montserrat">
            <h1 class="text-4xl pb-4 text-white font-bold font-CooperHevitt max-lg:text-center">
              Get in touch
            </h1>
            <div className="flex">
              <input
                id="name"
                type="text"
                placeholder="FIRST NAME"
                class="w-full h-12 px-4 bg-transparent outline-none text-white border border-solid border-gray-400  transition duration-300 ease-in-out focus:scale-105 hover:bg-gray-600 focus:bg-gray-600 hover:text-white"
                required
              />
              <input
                id="name"
                type="text"
                placeholder="LAST NAME"
                class="w-full h-12 px-4 bg-transparent outline-none text-white border border-solid border-gray-400  transition duration-300 ease-in-out focus:scale-105 hover:bg-gray-600 focus:bg-gray-600 hover:text-white"
                required
              />
            </div>
            <input
              id="email"
              type="text"
              placeholder="E-MAIL"
              class="w-full h-12 px-4 bg-transparent outline-none text-white border border-solid border-gray-400  transition duration-300 ease-in-out focus:scale-105 hover:bg-gray-600 focus:bg-gray-600 hover:text-white"
              required
            />
            <textarea
              id="message"
              placeholder="MESSAGE"
              cols={4}
              class="w-full h-24 p-4 bg-transparent outline-none text-white border border-solid border-gray-400  transition duration-300 ease-in-out focus:scale-105 hover:bg-gray-600 focus:bg-gray-600 hover:text-white"
              required
            ></textarea>
            <button
              type="submit"
              class="w-full h-full bg-white text-black p-3 justify-center flex items-center cursor-pointer hover:bg-gray-200 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
