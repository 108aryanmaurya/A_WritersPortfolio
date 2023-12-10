import React from "react";
import { Link } from "react-router-dom";
import NewsletterCard from "../pages/NewsletterCard";
export default function Footer() {
  return (
    <>
      <footer className="bg-white  z-50 mt-20">
        <div className=" w-full py-6 max-lg:py-2 px-20 max-lg:px-5">
          <div className="md:flex md:justify-between">
            <div className="max-sm:my-5 max-sm:mb-10">
              <h1 class="text-xl my-1 font-bold font-CooperHevitt">
                Susbcribe to our Newsletter
              </h1>
              <NewsletterCard />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      More Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline ">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      Books
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
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
          <hr className="my-6 border-gray-200  lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <Link to="/" className="hover:underline font-serif mr-3">
                A.M Gautam
              </Link>
              © 2024{" "}
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
