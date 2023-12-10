import React from "react";
import { Link } from "react-router-dom";
import NewsletterCard from "../pages/NewsletterCard";
export default function Footer() {
  return (
    <>
      <footer className="bg-white  z-50 mt-20">
        <div className=" w-full py-6 max-lg:py-2 px-20 max-lg:px-5">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <NewsletterCard />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      BlueSky
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      Tailwind CSS
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline ">
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      Linkedin
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link to="/" className="hover:underline font-serif">
                BlogLink
              </Link>
              <span> . </span>
              All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fa fa-facebook"></i>
              </Link>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fa fa-twitter"></i>
              </Link>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fa fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
