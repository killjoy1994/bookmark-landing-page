import React from "react";
import logoBookmark from "../assets/images/logo-bookmark-mobile.svg";
import logoTwitter from "../assets/images/icon-twitter.svg";
import logoFacebook from "../assets/images/icon-facebook.svg";

export default function Footer() {
  return (
    <footer className="bg-neutral-veryDarkBlue lg:px-16" >
      <div className="flex sm:container mx-auto py-10 sm:py-7  sm:px-7 flex-col sm:flex-row sm:justify-between items-center gap-8">
        <div className="flex flex-col sm:gap-x-10 items-center gap-y-8 sm:flex-row ">
          <div className="h-6">
            <img className="h-full text-slate-50" src={logoBookmark} alt="" />
          </div>
          <ul className="text-slate-50 flex sm:flex-row text-sm flex-col gap-5 text-opacity-70 tracking-wider">
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="flex gap-10 items-center">
          <div>
            <img className="h-full mx-auto" src={logoFacebook} alt="" />
          </div>
          <div>
            <img className="h-full mx-auto" src={logoTwitter} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
