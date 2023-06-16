import React from 'react'
import logoBookmark from "../assets/images/logo-bookmark.svg";
import OpenToggle from "../assets/images/icon-hamburger.svg";
import CloseToggle from "../assets/images/icon-close.svg";
import { twMerge } from 'tailwind-merge';

export default function ModalNavbar({isShow, setToggle}) {
  return (
    <div className={twMerge("inset-0 bg-blue-950 bg-opacity-90", isShow ? 'fixed' : 'hidden')} >
        <div className="p-12">
          <div className="flex justify-between">
            <img className="shrink-0 h-10" src={logoBookmark} alt="" />
            <button onClick={() => setToggle(false)} className='shrink-0'>
              <img className="h-6" src={CloseToggle} alt="" />
            </button>
          </div>
          <ul className="mt-12 flex flex-col items-center">
            <li className="border-y border-opacity-30 border-white w-full py-6 text-white font-thin  tracking-[3px] text-center">FEATURES</li>
            <li className="border-b border-opacity-30 border-white w-full py-6 text-center text-white tracking-[3px] font-thin">PRICING</li>
            <li className="border-b border-opacity-30 border-white w-full py-6 text-center text-white tracking-[3px] font-thin">CONTACT</li>
            <li className="w-full py-6 flex justify-center items-center">
              <button  className="inline-block border-2 border-white rounded-md py-2 w-full text-white font-md tracking-[2px] text-center">LOGIN</button>
            </li>
          </ul>
        </div>
      </div>
  )
}
