"use client";
import Logo from "@/components/logo";
import Link from "next/link";
import Modal from "@/components/modal";
import { Fragment, useState } from "react";
import { DatePicker } from "@/components/datepicker";

import React from "react";

const EmployerProjectDetails = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      <main className="">
        <div className="bg-color_hover h-screen ">
          <div className="p-4 pl-20">
            <Fragment>
              <div className="flex justify-end pr-44 pb-4 ">
                <button
                  className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover rounded px-4 py-2 mt-4"
                  onClick={() => setShowModal(true)}
                >
                  Create Project
                </button>
              </div>
              <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div className="flex flex-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-text_tertiary font-bold text-gray-900 dark:text-white">
                    Create Project
                  </h3>
                </div>
                <input
                  type="text"
                  className="border p-2 mb-6  my-8  rounded-md focus:outline-none focus:border-blue-500 w-full"
                  placeholder="Project Name"
                />
                <input
                  type="text"
                  className="border p-2 mb-6  my-2  rounded-md focus:outline-none focus:border-blue-500 w-full"
                  placeholder="Email Address, Separated by comma"
                />
                <div className="flex space-x-5">
                  {" "}
                  <div className="w-full">
                    <DatePicker label={"Start Time"} />
                  </div>{" "}
                  <div className="w-full">
                    <DatePicker label={"End Time"} />
                  </div>{" "}
                </div>
                <div className="mb-6 mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 block w-full"
                    placeholder="Project Details........"
                  />
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover rounded px-4 py-2 mt-4 w-full">
                    Create Project
                  </button>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button className="border rounded hover:text-text_tertiary  text-text_secondary bg-gray-200 px-4 py-2 mt-4 w-full">
                    Cancel
                  </button>
                </div>
              </Modal>
            </Fragment>
            <div className="bg-white h-half w-3/4 mx-auto  ">
              <h1 className="text-text_tertiary font-bold  text-lg  pt-4 pl-6 mt-4">
                Projects LineUp
              </h1>
              <div className="grid grid-cols-4 gap-2 p-2 ">
                <h3 className=" text-text_tertiary font-bold  text-sm p-5">
                  Project Name
                </h3>
                <h3 className="text-text_tertiary font-bold text-sm  p-5">
                  Start Date
                </h3>
                <h3 className=" text-text_tertiary font-bold text-sm p-5">
                  Due Date
                </h3>

                <h3 className="text-text_tertiary font-bold text-sm p-5">
                  Status
                </h3>

                {/* GRID 1 */}
                <Link
                  href="/employer-dashboard/project-details/1"
                  className=" hover:bg-color_hover p-5 cursor-pointer"
                >
                  Project 1
                </Link>

                <p className=" hover:bg-color_hover p-5">Dec 1, 2023</p>
                <p className=" hover:bg-color_hover p-5">Dec 31, 2023</p>
                <select
                  className="p-5"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="In Progress" className="text-yellow-500">
                    In Progress
                  </option>
                  <option value="Pending" className="text-red-500">
                    Pending
                  </option>
                  <option
                    value="Completed "
                    className="text-green-500 border-none"
                  >
                    Completed
                  </option>
                </select>

                {/*GRID 2*/}
                <p className=" p-5">Project 2</p>
                <p className=" p-5">Dec 1, 2023</p>
                <p className=" p-5">Dec 31, 2023</p>
                <select
                  className="p-5"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="In Progress" className="text-yellow-500">
                    In Progress
                  </option>
                  <option value="Pending" className="text-red-500">
                    Pending
                  </option>
                  <option
                    value="Completed "
                    className="text-green-500 border-none"
                  >
                    Completed
                  </option>
                </select>
                {/*GRID 2*/}
                <p className=" p-5">Project 3</p>
                <p className=" p-5">Dec 1, 2023</p>
                <p className=" p-5">Dec 31, 2023</p>
                <select
                  className="p-5"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="In Progress" className="text-yellow-500">
                    In Progress
                  </option>
                  <option value="Pending" className="text-red-500">
                    Pending
                  </option>
                  <option
                    value="Completed "
                    className="text-green-500 border-none"
                  >
                    Completed
                  </option>
                </select>

                {/*GRID 2*/}
                <p className="p-5">Project 4</p>
                <p className=" p-5">Dec 1, 2023</p>
                <p className=" p-5">Dec 31, 2023</p>
                <select
                  className="p-5"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="In Progress" className="text-yellow-500">
                    In Progress
                  </option>
                  <option value="Pending" className="text-red-500">
                    Pending
                  </option>
                  <option
                    value="Completed "
                    className="text-green-500 border-none"
                  >
                    Completed
                  </option>
                </select>

                {/*GRID 2*/}
                <p className="p-5">Project 5</p>
                <p className=" p-5">Dec 1, 2023</p>
                <p className=" p-5">Dec 31, 2023</p>
                <select
                  className="p-5"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="In Progress" className="text-yellow-500">
                    In Progress
                  </option>
                  <option value="Pending" className="text-red-500">
                    Pending
                  </option>
                  <option
                    value="Completed "
                    className="text-green-500 border-none"
                  >
                    Completed
                  </option>
                </select>

                <p className="p-5">Project 6</p>
                <p className=" p-5">Dec 1, 2023</p>
                <p className=" p-5">Dec 31, 2023</p>
                <select
                  className="p-5"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="In Progress" className="text-yellow-500">
                    In Progress
                  </option>
                  <option value="Pending" className="text-red-500">
                    Pending
                  </option>
                  <option
                    value="Completed "
                    className="text-green-500 border-none"
                  >
                    Completed
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployerProjectDetails;
