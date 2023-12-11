import React from "react";
import { Link } from "react-router-dom";
export default function SocialLinks() {
  return (
    <>
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <i className="fa fa-facebook"></i>
      </Link>
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <i className="fa fa-linkedin"></i>
      </Link>
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <i className="fa fa-twitter"></i>
      </Link>
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <i className="fa fa-instagram"></i>
      </Link>
    </>
  );
}
