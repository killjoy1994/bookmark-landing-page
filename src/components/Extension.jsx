import React from "react";
import {data} from "../data"
import { twMerge } from "tailwind-merge";

export default function Extension() {
  return (
    <div className="px-7 pt-14 md:mt-20">
      <div className="md:max-w-[900px] md:mx-auto">
        <h2 className="text-neutral-veryDarkBlue text-3xl text-center sm:text-2xl sm:mb-3 lg:text-4xl font-medium mb-5">Download the extension</h2>
        <p className="font-light text-center text-neutral-grayishBlue sm:text-base sm:mb-3 lg:text-xl mb-5">
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      {/* CARD */}
      <div className="flex flex-col sm:mt-20 sm:flex-row sm:justify-center sm:gap-x-8 gap-y-7">
        {data.extensions.map((data) => {     
          return (
            <div key={data.id} className={"extensions-card py-8 sm:max-w-[400px] sm:px-6 shadow-lg"} >
              <img className="m-auto" src={data.imgSrc} alt="" />
              <div className="px-6 py-2">
                <p className="text-neutral-veryDarkBlue text-2xl text-center font-medium my-1">{data.title}</p>
                <p className="font-light text-center text-neutral-grayishBlue">{data.desc}</p>
              </div>
              <div className="bg-dots w-full h-1 my-5"></div>
              <button className="block m-auto bg-blue-500 rounded-md px-8 py-3 border-2 hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-500 text-slate-50 font-medium">Add & Install Extension</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
