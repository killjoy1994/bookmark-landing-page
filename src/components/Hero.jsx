import React from "react";
import HeroImage from "../assets/images/illustration-hero.svg";

export default function Hero() {
  return (
    <section className="grid sm:grid-cols-2 sm:flex-row sm:container mx-auto mt-11 gap-y-3">
      <div className="sm:order-2">
        <img className="h-full w-full" src={HeroImage} alt="" />
        {/* <div className="absolute bg-blue-700 h-[280px] rounded-l-full w-[400px]"></div> */}
      </div>
      <div className="text-center sm:text-start px-3 sm:px-0 sm:place-self-center">
        <h1 className=" text-neutral-veryDarkBlue text-3xl sm:text-2xl sm:mb-3 lg:text-4xl font-medium mb-5">A Simple Bookmark Manager</h1>
        <p className="font-light text-neutral-grayishBlue sm:text-base sm:mb-3 lg:text-xl mb-5">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-center sm:justify-start gap-x-4">
          <button className="bg-primary-softBlue sm:text-sm p-5 sm:p-2 rounded-md font-medium text-slate-50">Get it on Chrome</button>
          <button className="p-5 sm:p-2 sm:text-sm rounded-md font-medium  shadow-md bg-slate-100 bg-opacity-70 text-slate-500">Get it on Firefox</button>
        </div>
      </div>
  
    </section>
  );
}
