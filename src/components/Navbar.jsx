import React, { useState } from "react";
import logoBookmark from "../assets/images/logo-bookmark.svg";
import OpenToggle from "../assets/images/icon-hamburger.svg";
import CloseToggle from "../assets/images/icon-close.svg";
import { twMerge } from "tailwind-merge";
import ModalNavbar from "./ModalNavbar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="flex items-center z-[9999] justify-between sm:container p-7 sm:pt-10 mx-auto relative">
      <div className={twMerge("h-6 sm:h-8", toggle ? 'hidden' : 'visible')} >
        <img className="h-full w-full" src={logoBookmark} alt="" />
      </div>
      <ul className="hidden gap-x-3  sm:flex sm:gap-x-6 xl:gap-x-12 justify-between items-center text-xs sm:text-base lg:text-lg text-slate-700">
        <li className="hover:text-primary-softRed">Features</li>
        <li className="hover:text-primary-softRed">Pricing</li>
        <li className="hover:text-primary-softRed">Contact</li>
        <li>
          <button className="w-[100px] h-[40px] bg-primary-softRed text-sm font-normal rounded-md hover:text-primary-softRed hover:bg-white hover:border-2 box-border hover:border-primary-softRed text-slate-50">LOGIN</button>
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
