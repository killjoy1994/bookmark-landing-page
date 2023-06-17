import React, { useState } from "react";
import Tab1Image from "../assets/images/illustration-features-tab-1.svg";

export default function Features() {
  const [IsTabActive, setIsTabActive] = useState(true)
  return (
    <div className="mt-32 px-7 sm:container sm:mx-auto">
      <div className="mx-auto text-center mb-6 max-w-xl sm:text-xl">
        <h2 className="font-medium text-2xl text-slate-800">Features</h2>
        <p className="text-neutral-grayishBlue">
          Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the
          go.
        </p>
      </div>
      <div>
        <ul className="flex flex-col items-center sm:flex-row sm:w-4/6 sm:mx-auto px-3">
          <li className="w-full text-center border-y sm:border-t-0 border-opacity-30 border-collapse border-neutral-grayishBlue  text-slate-800 font-medium">
            <button className="tab-active inline-block py-4">Simple Bookmarking</button>
          </li>
          <li className="w-full text-center border-y sm:border-t-0 border-opacity-30 border-collapse border-neutral-grayishBlue text-slate-800 font-medium">
            <button className="inline-block py-4">Speedy Searching</button>
          </li>
          <li className="inline-block w-full text-center border-y sm:border-t-0 border-opacity-30 border-collapse border-neutral-grayishBlue text-slate-800 font-medium">
            <button className="py-4">Easy Sharing</button>
          </li>
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 sm:flex-row sm:container mx-auto mt-11 sm:gap-x-8 gap-y-20">
        <div className="sm:order-2">
          <img className="h-full w-full" src={Tab1Image} alt="" />
          {/* <div className="absolute bg-blue-700 h-[280px] rounded-l-full w-[400px]"></div> */}
        </div>
        <div className="text-center sm:text-start px-3 sm:px-0 sm:place-self-center">
          <h2 className=" text-neutral-veryDarkBlue text-3xl sm:text-2xl sm:mb-3 lg:text-4xl font-medium mb-5">Bookmark in one click</h2>
          <p className="font-light text-neutral-grayishBlue sm:text-base sm:mb-3 lg:text-xl mb-5">
            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
          </p>
          <div className="flex justify-center sm:justify-start gap-x-4">
            <button className="hidden sm:inline-block bg-primary-softBlue sm:text-sm px-4 py-2 rounded-md font-medium text-slate-50">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
