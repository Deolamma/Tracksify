"use client";
import Link from "next/link";
import Logo from "@/components/logo";

import React, { ReactEventHandler, useState } from "react";

import { toast } from "sonner";

const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Submitted");
  };

  return (
    <div className="">
      <main className="">
        <div className="bg-color_hover h-screen ">
          <div className="flex items-center p-4 bg-white">
            <div className="p-4  ">
              <Logo />
            </div>

            <div className="space-x-20 pl-80">
              <a
                href="./app/page.tsx"
                className=" bg-color_hover rounded-full px-2 py-2 m-2 hover:text-text_secondary font-sm hover:text-black text-text_secondary"
              >
                Home
              </a>
              <a href="#" className="text-text_tertiary  font-sm">
                Employee
              </a>
              <a href="#" className="text-text_tertiary font-sm">
                Project
              </a>
              <a
                href="#"
                className=" border rounded-full  bg-text_secondary  text-white  font-sm px-3 py-2 hover:bg-color_hover hover:text-text_tertiary"
              >
                FO
              </a>
            </div>
          </div>
          <div className="bg-grey-200 h-half w-3/4 mx-auto pl-8 ">
            <div className="p-10 px-10 py-2 pr-50">
              <p className="text-text_tertiary font-bold pt-5 mt-2 px-5 text-2xl">
                Check In
              </p>
            </div>
            <div className=" w-1/2 flex flex-col px-10 py-2 pr-50">
              <div>
                <h1 className="font-normal ">
                  Kindly enter your work information
                </h1>

                <form
                  onSubmit={handleSubmit}
                  className="font-product-sans font-sm "
                >
                  <div className=" mb-4 ">
                    <label
                      className="block  text-sm font-bold mb-2"
                      htmlFor="email address"
                    ></label>
                    <textarea
                      className="  border rounded py-4 px-5 w-full  leading-tight outline-none "
                      id="textinput"
                      typeof="text"
                      placeholder="Work Start time: Eg 11:30 am"
                    />
                  </div>
                  <div className=" mb-4 ">
                    <label
                      className="block  text-sm font-bold mb-2"
                      htmlFor="work start time"
                    ></label>
                    <textarea
                      className="  border rounded py-4 px-5 w-full  leading-tight outline-none "
                      id="textinput"
                      typeof="text"
                      placeholder="Work End time: Eg 5:00 pm"
                    />
                  </div>
                  <h1 className="font-Bold ">Work Done</h1>
                  <textarea
                    className="  border rounded py-12 px-5 w-full  leading-tight outline-none "
                    // id="textinput"
                    typeof="text"
                    placeholder="Work Done"
                  />
                  <div className="">
                    <button
                      className="border bg-text_secondary text-white hover:text-text_tertiary hover:hover-white w-full font-bold text-text_tertiary py-4 px-5 rounded mt-5 "
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
