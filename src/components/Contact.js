import React from "react";


export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container flex justify-center items-center px-15 py-18 pl-5 pt-20 mx-auto flex sm:flex-nowrap flex-wrap">
          <h2 className="flex justify-center items-center text-white sm:text-4xl text-3xl font-medium title-font mb-2">
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

