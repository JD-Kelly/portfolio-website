import React from "react";
import { SearchIcon } from "@heroicons/react/solid";


export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 pt-20 mx-auto text-center lg:px-40">
        < SearchIcon className="mx-auto inline-block w-10 mb-4" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            I'm open to new opportunities.
          </h2>
      </div>
      <div className="flex justify-center items-center pb-10 pr-6 pt-6">
        <button className="text-white font-bold bg-indigo-500 border-0 py-2 px-6 ml-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <a href="resume.pdf" target="_blank">View CV</a>
        </button>
      </div>
    </section>
  );
}

