import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./constants";
import SideNav from "./SideNav";
import { AMGautmaBlack, AMGautmaWhite } from "../assets/icons";
import { AMG, AMGautam, AMGautam2, AMGautam3 } from "../assets/images";

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
        className={`bg-white  
        } border-white relative top-0 select-none z-[100] transition-all ease-in-out duration-300`}
      >
        <nav
          className={` ${
            location.pathname === "/About" ||
            location.pathname.includes("/Book") ||
            location.pathname.includes("/Story") ||
            location.pathname.includes("/Article")
              ? " !text-white absolute flex-row justify-between px-10 max-md:px-0 "
              : " !text-black  relative flex-col justify-center "
          } top-0 flex  max-md:flex-row max-md:justify-between py-2 pb-6 max-md:py-2 items-center w-full`}
        >
          <div
            className={`transition-all duration-300 items-center max-md:m-0 mt-0 max-md:ml-2a`}
          >
            {location.pathname.includes("/About") ||
            location.pathname.includes("/Book") ||
            location.pathname.includes("/Story") ||
            location.pathname.includes("/Article") ? (
              <img
                src={showNav ? AMGautmaBlack : AMGautmaWhite}
                className="h-16 2xl:h-20 max-md:h-14 max-sm:h-12"
                alt=""
              />
            ) : (
              <img
                src={AMGautmaBlack}
                className="h-16 2xl:h-20 max-md:h-14 max-sm:h-12 "
                alt=""
              />
            )}
          </div>
          <div className="flex items-center w-auto mt-2 max-sm:mt-0 2xl:mb-2">
            <ul className="flex-1 flex items-center gap-8 max-md:hidden">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`px-2 ${
                    (location.pathname === "/" && item.href === "/home") ||
                    location.pathname === item.href
                      ? "border-b-[1px] "
                      : ""
                  }
                  ${
                    location.pathname === "/About"
                      ? "border-b-white"
                      : "border-b-gray-600"
                  }
                  `}
                >
                  <Link
                    to={item.href}
                    className={`font-CooperHevitt text-lg 2xl:text-2xl  text-slate-gray`}
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
              <div className="relative group outline-none hover:bg-transparent">
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 ">
                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div
                      className={`${
                        location.pathname.includes("/About") ||
                        location.pathname.includes("/Book") ||
                        location.pathname.includes("/Article")
                          ? " bg-white "
                          : " bg-black "
                      } h-[2px] w-7 transform transition-all duration-300 origin-left ${
                        showNav ? "translate-y-6 delay-100" : ""
                      }`}
                    ></div>
                    <div
                      className={`${
                        location.pathname.includes("/About") ||
                        location.pathname.includes("/Book") ||
                        location.pathname.includes("/Article")
                          ? " bg-white "
                          : " bg-black "
                      } h-[2px] w-7 rounded transform transition-all duration-300 ${
                        showNav ? "translate-y-6 delay-75" : ""
                      }`}
                    ></div>
                    <div
                      className={`${
                        location.pathname.includes("/About") ||
                        location.pathname.includes("/Book") ||
                        location.pathname.includes("/Article")
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
                        className={`absolute bg-black h-[2px] w-5 transform transition-all duration-200 ${
                          showNav
                            ? "rotate-45 delay-300 group-focus:rotate-45"
                            : "rotate-0 delay-300"
                        }`}
                      ></div>
                      <div
                        className={`absolute bg-black h-[2px] w-5 transform transition-all duration-200 ${
                          showNav
                            ? "-rotate-45 delay-300 group-focus:-rotate-45"
                            : "-rotate-0 delay-300"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
