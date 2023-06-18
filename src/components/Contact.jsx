import React from "react";

export default function Contact() {
  return (
    <div className="bg-primary-softBlue w-full mt-16 text-slate-50 py-12 mx-auto gap-y-5 flex justify-center flex-col items-center">
      <p className="text-opacity-70 font-normal tracking-[3px] text-xs">35,000+ ALREADY JOINED</p>
      <h2 className="font-medium text-xl text-center px-7">Stay up-to-date with what we’re doing</h2>
      <form action="" className="px-7 w-full sm:max-w-[550px]" >
        <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-5  sm:justify-center">
          <input type="text" placeholder="Enter your email address" className="input bg-slate-50 w-full rounded" />
          <button className="bg-primary-softRed w-full rounded sm:max-w-[200px] py-3" type="submit">Contact Us</button>
        </div>
      </form>
    </div>
  );
}
