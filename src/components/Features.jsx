import React, { useState } from "react";
import Tab1Image from "../assets/images/illustration-features-tab-1.svg";
import { twMerge } from "tailwind-merge";
import { data } from "../data";

export default function Features() {
  const [activeTab, setActiveTab] = useState(1);

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
            <button
              onClick={() => {
                setActiveTab(1);
              }}
              className={twMerge("inline-block py-4", activeTab === 1 ? "tab-active" : "")}
            >
              Simple Bookmarking
            </button>
          </li>
          <li className="w-full text-center border-y sm:border-t-0 border-opacity-30 border-collapse border-neutral-grayishBlue text-slate-800 font-medium">
            <button
              onClick={() => {
                setActiveTab(2);
              }}
              className={twMerge("inline-block py-4", activeTab === 2 ? "tab-active" : "")}
            >
              Speedy Searching
            </button>
          </li>
          <li className="inline-block w-full text-center border-y sm:border-t-0 border-opacity-30 border-collapse border-neutral-grayishBlue text-slate-800 font-medium">
            <button
              onClick={() => {
                setActiveTab(3);
              }}
              className={twMerge("inline-block py-4", activeTab === 3 ? "tab-active" : "")}
            >
              Easy Sharing
            </button>
          </li>
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 sm:justify-between sm:container mx-auto mt-11 sm:gap-x-8 gap-y-20">
        {data.features
          .filter((data) => {
            if (data.id == activeTab) {
              return data;
            }
          })
          .map((data) => {
            return (
              <>
                <img className="h-full w-full" src={data.img} alt="" />
                <div className="text-center sm:pl-[15px] lg:pl-[70px] sm:text-start px-3 sm:px-0 sm:place-self-center">
                  <h2 className=" text-neutral-veryDarkBlue text-3xl sm:text-2xl sm:mb-3 lg:text-4xl font-medium mb-5">{data.title}</h2>
                  <p className="font-light text-neutral-grayishBlue sm:text-base sm:mb-3 lg:text-xl mb-5">{data.desc}</p>
                  <div className="flex justify-center sm:justify-start gap-x-4">
                    <button className="hidden sm:inline-block bg-primary-softBlue sm:text-sm px-4 py-2 rounded-md font-medium text-slate-50">More Info</button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
