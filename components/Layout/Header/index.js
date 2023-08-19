import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdSchool } from "react-icons/md";
import { navLinks } from "./navLinks";
import Buttonhamburger from "./ButtonHamburger";
import { FaAngleDown } from "react-icons/fa";

function Header() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState("");

  const showSubMenu = (index) => {
    if (active === index) {
      return setActive(null);
    }

    setActive(index);
  };

  const { pathname } = useRouter();

  const activeClass = (path) =>
    pathname === path
      ? "border-b-4 border-custom-green text-custom-green"
      : "border-b-4 border-transparent";

  const activeSubLinkClass = (subLinks, navId) => {
    const value = subLinks?.find((subLink) => subLink.link === pathname);

    if (pathname === value?.link && active !== navId) {
      return "bg-green-400";
    } else {
      return "";
    }
  };

  return (
    <div className="mt-3 lg:mt-10 sticky w-full top-0 bg-white bg-opacity-80 backdrop-blur-sm z-10">
      <div className="container flex justify-between items-center font-openSans">
        <Link href="/" passHref>
          <a>
            <div className="text-6xl cursor-pointer">
              <MdSchool className="fill-custom-green" />
            </div>
          </a>
        </Link>

        <div className="mr-2 lg:hidden">
          <Buttonhamburger toggle={toggle} setToggle={setToggle} />
        </div>

        <div className="hidden lg:flex justify-between items-center text-custom-gray4 font-semibold">
          {navLinks.map((navLink) => (
            <div key={navLink.link}>
              {!navLink.subLinks ? (
                <Link href={navLink.link} passHref>
                  <a
                    className={`p-5 cursor-pointer hover:text-custom-green ${activeClass(
                      navLink.link
                    )}`}
                  >
                    {navLink.name}
                  </a>
                </Link>
              ) : (
                <div
                  onMouseEnter={() => showSubMenu(navLink.id)}
                  onMouseLeave={() => showSubMenu("")}
                >
                  <p className={`p-5 cursor-pointer hover:text-custom-green`}>
                    {navLink.name}
                  </p>
                  <div className="absolute top-[63px] divide-y shadow-inner bg-custom-gray6">
                    {active === navLink.id &&
                      navLink.subLinks.map((subLink) => (
                        <Link key={subLink.link} href={subLink.link} passHref>
                          <div className="pl-5 pr-20 py-3 text-custom-gray5 text-sm font-light hover:bg-gray-200 transition duration-300 cursor-pointer">
                            <a>{subLink.name}</a>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`lg:hidden absolute w-full  bg-custom-green transition-[grid-template-rows] duration-300 ease-linear grid ${
          toggle ? "grid-rows-[1fr] " : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="py-8 px-5 flex flex-col w-full gap-1">
            {navLinks.map((navLink) => (
              <Fragment key={navLink.link}>
                {!navLink.subLinks ? (
                  <Link href={navLink.link} passHref>
                    <a
                      className={` lg:cursor-pointer font-bold py-2 pl-5 text-white rounded-md ${
                        pathname === navLink.link ? "bg-green-400" : ""
                      }`}
                    >
                      {navLink.name}
                    </a>
                  </Link>
                ) : (
                  <div className="" onClick={() => showSubMenu(navLink.id)}>
                    <p
                      className={`flex items-center gap-3 lg:cursor-pointer font-bold py-2 pl-5 text-white rounded-md ${activeSubLinkClass(
                        navLink.subLinks,
                        navLink.id
                      )}`}
                    >
                      {navLink.name}
                      <span
                        className={`text-lg transition duration-300 ${
                          active === navLink.id && "rotate-180"
                        }`}
                      >
                        <FaAngleDown />
                      </span>
                    </p>
                    <div
                      className={`lg:hidden w-full transition-[grid-template-rows] duration-300 ease-linear grid ${
                        active === navLink.id
                          ? "grid-rows-[1fr] "
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="py-2 px-5 flex flex-col w-full gap-1">
                          {navLink.subLinks.map((subLink) => (
                            <Link
                              key={subLink.link}
                              href={subLink.link}
                              passHref
                            >
                              <a
                                className={` lg:cursor-pointer font-bold py-2 pl-5 text-white rounded-md ${
                                  pathname === subLink.link
                                    ? "bg-green-400"
                                    : ""
                                }`}
                              >
                                {subLink.name}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
