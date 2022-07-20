import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdSchool } from "react-icons/md";
import { navLinks } from "./navLinks";

function Header() {
  const [active, setActive] = useState("");

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

  return (
    <div className="mt-10 sticky w-full top-0 bg-white bg-opacity-80 backdrop-blur-sm z-10">
      <div className="container flex justify-between items-center font-openSans ">
        <div className="text-6xl">
          <MdSchool className="fill-custom-green" />
        </div>

        <div className="flex justify-between items-center text-custom-gray4 font-semibold">
          {navLinks.map((navLink) => (
            <div key={navLink.id}>
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
                        <Link href={subLink.link} key={subLink.id} passHref>
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
    </div>
  );
}

export default Header;
