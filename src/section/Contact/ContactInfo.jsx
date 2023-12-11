import React from "react";
import SocialLinks from "../../components/SocialLinks";
export default function ContactInfo() {
  return (
    <>
      <div className="max-lg:flex flex-col justify-center items-center max-lg:mb-10">
        <h1 class="text-5xl max-sm:text-3xl font-Oswald mb-5">Contact Info</h1>

        <div className="max-lg:flex justify-center items-center flex-col mb-5">
          <h1 className="text-3xl max-md:text-xl font-CooperHevitt">
            PRESS AND EVENTS
          </h1>

          <div className="max-lg:flex justify-center items-center flex-col">
            <ul className="max-lg:flex justify-center items-center flex-col font-montserrat">
              <li>Publisher's </li>
              <li>The Orion Publishing Group</li>
              <li>enquiries@hachette.co.uk</li>
            </ul>
          </div>
        </div>
        <div className="max-lg:flex justify-center items-center flex-col">
          {" "}
          <h1 className="text-3xl  max-md:text-xl font-CooperHevitt">
            LITERARY REPRESENTATION
          </h1>
          <div className="max-lg:flex justify-center items-center flex-col">
            <ul className="max-lg:flex justify-center items-center flex-col font-montserrat">
              <li>Agent</li>
              <li>Sam Copeland, RCW Literary Agency</li>
              <li>info@rcwlitagency.com</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 text-xl py-4 sm:mt-0">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
