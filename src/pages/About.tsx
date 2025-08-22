import React from "react";
import Divider from "../components/Divider";

const About = () => {
  return (
    <>
      <section id="about" className="bg-bgcolor2 py-20">
        <div className="container mx-auto px-6 space-y-16 text-white">
          <h1 className="text-4xl font-bold text-center text-white">
            About <span className="text-cyan-300">Me</span>
          </h1>
          <p className="mx-auto text-[16px] text-center max-w-2xl px-6">
            I'm a professional web developer with strong skills in HTML, CSS,
            JavaScript, Tailwind, JQuery, and more. I have been working in this
            field for almost 3 years, and all projects have been completed
            successfully with 100% client satisfaction.
          </p>

          <h1 className="font-bold text-2xl text-center">
            | <span className="text-cyan-300">Explore</span> |
          </h1>
          <Divider />

          {/* Container for Design and Development (First Row) */}
          <div className="flex flex-col mx-auto space-y-16 md:space-y-0 md:flex-row justify-between md:space-x-12">
            {/* Design */}
            <div className="md:w-1/2">
              <h1 className="font-bold text-2xl text-cyan-300 text-center md:text-left">
                Design
              </h1>
              <p className="text-center md:text-left pt-2">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the
                process.
              </p>
            </div>
            {/* Development */}
            <div className="md:w-1/2">
              <h1 className="font-bold text-2xl text-cyan-300 text-center md:text-left">
                Development
              </h1>
              <p className="text-center md:text-left pt-2">
                I can develop the site based on your designs, ensuring high
                performance, scalability, and a seamless user experience across
                all devices.
              </p>
            </div>
          </div>

          {/* Maintenance (Second Row) */}
          <div className="mx-auto mt-16">
            <h1 className="font-bold text-2xl text-cyan-300 text-center">
              Maintenance
            </h1>
            <p className="text-center pt-2 max-w-2xl mx-auto">
              I provide ongoing maintenance and support to ensure your website
              remains secure, up-to-date, and fully functional, handling any
              necessary updates or bug fixes.
            </p>
          </div>
          <Divider />
        </div>
      </section>
    </>
  );
};

export default About;
