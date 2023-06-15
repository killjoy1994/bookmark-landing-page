import React, { useState } from "react";
import logoBookmark from "../assets/images/logo-bookmark.svg";
import OpenToggle from "../assets/images/icon-hamburger.svg";
import CloseToggle from "../assets/images/icon-close.svg";
import { twMerge } from "tailwind-merge";
import ModalNavbar from "./ModalNavbar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="flex items-center justify-between px-10 py-5 xl:px-16 xl:py-8">
      <div className={twMerge("h-8 shrink-0", toggle ? 'hidden' : 'visible')} >
        <img className="h-full w-full" src={logoBookmark} alt="" />
      </div>
      <ul className="hidden sm:flex justify-between items-center gap-x-4 lg:gap-x-8 font-normal text-xl text-slate-700">
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
        <li>
          <button className="px-8 py-1 lg:px-10 lg:py-2 bg-red-400 font-medium rounded-md text-slate-50">Login</button>
        </li>
      </ul>
      <button className={twMerge("inline-block sm:hidden h-5", toggle ? 'hidden' : 'visible')} >
        <img className="w-full h-full" src={OpenToggle} alt="Open" />
      </button>
      {/* Modal active mobile */}
      <ModalNavbar />
    </nav>
  );
}
