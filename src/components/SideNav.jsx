import React, { useRef } from "react";
import { navLinks } from "./constants";
import { Link } from "react-router-dom";
export default function SideNav(props) {
  const { NavStatus } = props;

  return (
    <>
      <div
        id="mySidenav"
        className="backdrop-blur-sm fixed select-none w-screen sidenav bg-Opacitywhite h-[100vh] overflow-hidden  z-[99] transition-all ease-in-out delay-75 duration-200"
      >
        <div className="w-full flex justify-start  select-none h-full bg-white shadow-lg overflow-hidden dark:bg-darkBgMain flex-col">
          <div className="flex w-auto mt-24">
            <ul className="flex-1 flex flex-col items-center gap-8">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`px-2 ${
                    (location.pathname === "/" && item.href === "/home") ||
                    location.pathname === item.href
                      ? "border-b-[1px] border-b-gray-600 "
                      : ""
                  }`}
                >
                  <Link
                    to={item.href}
                    className={`font-CooperHevitt text-lg max-sm:text-xl text-slate-gray`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
