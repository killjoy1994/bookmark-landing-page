import React, { useState } from "react";
import AccordionFaq from "./AccordionFaq";

export default function FaqTest() {
  const [checked, setChecked] = useState(false);

  console.log(checked);

  return (
    <div className="mt-20 sm:mt-48 px-7 w-full sm:max-w-[700px] sm:mx-auto">
      <h2 className="text-neutral-veryDarkBlue text-2xl font-medium text-center mb-5">Frequently Asked Questions</h2>
      <p className="text-center text-neutral-grayishBlue text-base">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      <div>
        <div className="collapse collapse-arrow border-b-2 rounded-none border-s-slate-400">
          <input type="checkbox" />
          <div className="collapse-title text-lg text-slate-700 font-medium">
            <p>What is Bookmark?</p>
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare
              mattis.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border-b-2 rounded-none border-s-slate-400">
          <input type="checkbox" />
          <div className="collapse-title text-lg text-slate-700 font-medium">
            <p>How can I request a new browser?</p>
          </div>
          <div className="collapse-content">
            <p>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet
              convallis ultricies.Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border-b-2 rounded-none border-s-slate-400">
          <input type="checkbox" />
          <div className="collapse-title text-lg text-slate-700 font-medium">
            <p>Is there a mobile app?</p>
          </div>
          <div className="collapse-content">
            <p>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est
              pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border-b-2 rounded-none border-s-slate-400">
          <input type="checkbox" />
          <div className="collapse-title text-slate-700 text-lg font-medium">
            <p>What about other Chromium browsers?</p>
          </div>
          <div className="collapse-content">
            <p>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut
              velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
