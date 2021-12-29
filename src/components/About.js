import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font pb-3 sm:text-7xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jonny.
          </h1>
          <h2 className="hidden lg:inline-block sm:text-5xl pb-7">
            I love to build impactful software. 
          </h2>
          <div>
            <a href="https://www.linkedin.com/in/j-kelly/" target="_blank">
          <img 
            className="rounded-full"
            src="./linkedin.png"
            width="60" 
            height="60" 
          />
          </a>
          </div>
          <div>
            <a href="https://github.com/JD-Kelly" target="_blank">
          <img
            className="rounded-full pt-4"
            src="./github.png"
            width="60" 
            height="60" 
          />
          </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./portrait.jpg"
          />
        </div>
      </div>
    </section>
  );
}