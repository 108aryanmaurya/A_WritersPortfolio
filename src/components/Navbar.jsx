import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./constants";
import SideNav from "./SideNav";

const Navbar = () => {
  const location = useLocation();
  const [showNav, setNav] = useState(false);

  useEffect(() => {
    setNav(false);
  }, [location]);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  const NavStatus = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <>
      {showNav && <SideNav NavStatus={NavStatus}></SideNav>}
      <section
        id="navbar"
        className="relative top-0 select-none z-[100] transition-all ease-in-out duration-300"
      >
        <header
          className={`flex items-center ${
            showNav ? "" : "border-b border-gray-100 "
          }  w-full bg-white`}
        >
          <nav
            className={` ${
              location.pathname === "/About"
                ? " !text-white absolute flex-row justify-between px-10 max-md:px-0 "
                : " !text-black  relative flex-col justify-center "
            }  top-0 flex  max-md:flex-row max-md:justify-between my-5 max-md:my-2 items-center w-full`}
          >
            <div
              className={` ${
                location.pathname === "/About" ? "" : ""
              } head-title flex font-serif items-center text-4xl max-md:text-2xl tracking-wide my-3 max-md:m-0 mt-0 max-md:ml-5`}
            >
              <span>A</span>ditya&nbsp;
              <span>G</span>outam
            </div>

            <div className="flex items-center w-auto">
              <ul className="flex-1 flex items-center gap-8 max-md:hidden">
                {navLinks.map((item) => (
                  <li key={item.label} className="px-2">
                    <Link
                      to={item.href}
                      className={`head-menu tracking-wider leading-normal text-xl dark:hover:text-secondary hover:text-primaryMain text-slate-gray dark:text-darkTextMain ${
                        (location.pathname === "/" && item.href === "/home") ||
                        location.pathname === item.href
                          ? "underline"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className="hidden max-md:block outline-none"
                onClick={NavStatus}
              >
                <button className="relative group outline-none hover:bg-transparent">
                  <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 ">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                      <div
                        className={`${
                          location.pathname === "/About"
                            ? " bg-white "
                            : " bg-black "
                        } h-[2px] w-7 transform transition-all duration-300 origin-left ${
                          showNav ? "translate-y-6 delay-100" : ""
                        }`}
                      ></div>
                      <div
                        className={`${
                          location.pathname === "/About"
                            ? " bg-white "
                            : " bg-black "
                        } h-[2px] w-7 rounded transform transition-all duration-300 ${
                          showNav ? "translate-y-6 delay-75" : ""
                        }`}
                      ></div>
                      <div
                        className={`${
                          location.pathname === "/About"
                            ? " bg-white "
                            : " bg-black "
                        } h-[2px] w-7 transform transition-all duration-300 origin-left ${
                          showNav ? "translate-y-6" : ""
                        }`}
                      ></div>

                      <div
                        className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
                          showNav ? "translate-x-0 group-focus:w-12" : ""
                        }`}
                      >
                        <div
                          className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 ${
                            showNav
                              ? "rotate-45 delay-300 group-focus:rotate-45"
                              : "rotate-0 delay-300"
                          }`}
                        ></div>
                        <div
                          className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 ${
                            showNav
                              ? "-rotate-45 delay-300 group-focus:-rotate-45"
                              : "-rotate-0 delay-300"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </nav>
        </header>
      </section>
    </>
  );
};

export default Navbar;
