import React from "react";

export default function Features() {
  return (
    <div className="mt-32">
      <div className="mx-auto text-center px-3 mb-6 max-w-xl sm:text-xl ">
        <h2 className="font-medium text-2xl text-slate-800">Features</h2>
        <p className="text-neutral-grayishBlue">Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
      <div>
        <ul className="flex flex-col sm:flex-row">
            <li><button>Simple Bookmarking</button></li>
            <li><button>Speedy Searching</button></li>
            <li><button>Easy Sharing</button></li>
        </ul>
      </div>
    </div>
  );
}
