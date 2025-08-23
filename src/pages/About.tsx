import React from "react";
import Divider from "../components/Divider";

const About = () => {
  return (
    <>
      <section id="about" className="bg-bgcolor2 py-20">
        <div className="container mx-auto px-6 space-y-16 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              About <span className="text-cyan-300">Me</span>
            </h1>
            <p className="mx-auto text-base max-w-2xl mt-4">
              I am a professional web developer with over three years of
              experience. My expertise includes HTML5, CSS3, JavaScript, and
              modern frameworks like React and TypeScript. I also build mobile
              applications with Flutter and Dart, and have foundational
              knowledge in Unity. My passion is delivering successful projects
              with 100% client satisfaction.
            </p>
          </div>
          <Divider />
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              My <span className="text-cyan-300">Services</span>
            </h2>
          </div>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Service */}
            <div className="p-8 border border-gray-700 rounded-lg text-center">
              <h3 className="font-bold text-xl text-cyan-300 mb-2">Design</h3>
              <p className="text-sm text-gray-400">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you throughout the
                process.
              </p>
            </div>
            {/* Development Service */}
            <div className="p-8 border border-gray-700 rounded-lg text-center">
              <h3 className="font-bold text-xl text-cyan-300 mb-2">
                Development
              </h3>
              <p className="text-sm text-gray-400">
                I can develop the site based on your designs, ensuring high
                performance, scalability, and a seamless user experience across
                all devices.
              </p>
            </div>
            {/* Maintenance Service */}
            <div className="p-8 border border-gray-700 rounded-lg text-center">
              <h3 className="font-bold text-xl text-cyan-300 mb-2">
                Maintenance
              </h3>
              <p className="text-sm text-gray-400">
                I provide ongoing maintenance and support to ensure your website
                remains secure, up-to-date, and fully functional, handling any
                necessary updates or bug fixes.
              </p>
            </div>
          </div>
          <Divider />
        </div>
      </section>
    </>
  );
};

export default About;
