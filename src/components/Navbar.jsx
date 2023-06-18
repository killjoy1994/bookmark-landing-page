import React, { useState } from "react";
import logoBookmark from "../assets/images/logo-bookmark.svg";
import OpenToggle from "../assets/images/icon-hamburger.svg";
import CloseToggle from "../assets/images/icon-close.svg";
import { twMerge } from "tailwind-merge";
import ModalNavbar from "./ModalNavbar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="flex items-center justify-between sm:container p-7 sm:pt-10 mx-auto">
      <div className={twMerge("h-6 sm:h-8", toggle ? 'hidden' : 'visible')} >
        <img className="h-full w-full" src={logoBookmark} alt="" />
      </div>
      <ul className="hidden gap-x-3 sm:flex sm:gap-x-6 xl:gap-x-12 justify-between items-center text-xs sm:text-base lg:text-lg text-slate-700">
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
        <li>
          <button className="px-8 py-2 bg-primary-softRed text-sm font-normal rounded-md text-slate-50">LOGIN</button>
        </li>
      </ul>
      <button className={twMerge("inline-block sm:hidden h-5", toggle ? 'hidden' : 'visible')} onClick={() => setToggle(true)} >
        <img className="w-full h-full" src={OpenToggle} alt="Open" />
      </button>
      {/* Modal active mobile */}
      <ModalNavbar isShow={toggle} setToggle={setToggle} />
    </nav>
  );
}
