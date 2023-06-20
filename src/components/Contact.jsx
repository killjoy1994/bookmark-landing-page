import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";


export default function Contact() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);
  const [leaveField, setLeaveField] = useState(false)

  useEffect(() => {
    const isEmpty = email.trim().length === 0
    if(isEmpty && submitted) {
      setIsValid(false)
    } else if(touched && isEmpty && submitted) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [email, touched, submitted, leaveField])

  const onClickHandler = () => {
    setSubmitted(true);
  };

  console.log("Is Valid: ", !isValid)

  return (
    <div className="bg-primary-softBlue w-full mt-16 text-slate-50 py-12 mx-auto gap-y-5 flex justify-center flex-col items-center">
      <p className="text-opacity-70 font-normal tracking-[3px] text-xs">35,000+ ALREADY JOINED</p>
      <h2 className="font-medium text-xl text-center px-7">Stay up-to-date with what we’re doing</h2>
      <form action="" className="px-7 w-full sm:max-w-[550px]">
        <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-5  sm:justify-center">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={() => setTouched(true)}
            onBlur={() => 
              setIsValid(true)  
            }
            type="text"
            placeholder="Enter your email address"
            className={twMerge("input bg-slate-50 text-slate-800 w-full rounded", !isValid ? "border-2 border-primary-softRed" : "")}
          />
          <button onClick={onClickHandler} type="button" className="bg-primary-softRed w-full rounded sm:max-w-[180px] py-3">
            Contact Us
          </button>
        </div>
        {!isValid && submitted && (
          <div className="text-slate-50 text-sm mt-1">Please enter a valid email address.</div>
        )}
      </form>
    </div>
  );
}
