import React from "react";
import { FaHtml5 } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <section id="skills" className="bg-bgcolor1">
        <div className="container mx-auto px-6 text-white">
          <h1 className="font-bold text-center pt-20 text-4xl">
            My <span className="text-cyan-300">Skills</span>
          </h1>
          {/* Main Row */}
          <div className="flex flex-col justify-between space-y-5 py-10 md:flex-row md:space-y-0">
            {/* Left Row */}
            <div className="flex flex-row justify-center items-center space-x-5">
              {/* Icon Column */}
              <div className="flex flex-col space-y-5">
                <FaHtml5 className="w-20 h-20" />
                <FaHtml5 className="w-20 h-20" />
                <FaHtml5 className="w-20 h-20" />
                <FaHtml5 className="w-20 h-20" />
              </div>
              {/* Name & Progress Column */}
              <div className="flex flex-col space-y-12">
                <div>
                  <h1>HTML5</h1>
                  <progress></progress>
                </div>
                <div>
                  <h1>HTML5</h1>
                  <progress></progress>
                </div>
                <div>
                  <h1>HTML5</h1>
                  <progress></progress>
                </div>
                <div>
                  <h1>HTML5</h1>
                  <progress></progress>
                </div>
              </div>
            </div>
            {/* Right Row */}
            <div className="flex flex-row justify-center items-center space-x-5">
              {/* Icon Column */}
              <div className="flex flex-col space-y-5">
                <FaHtml5 className="w-20 h-20" />
                <FaHtml5 className="w-20 h-20" />
                <FaHtml5 className="w-20 h-20" />
                <FaHtml5 className="w-20 h-20" />
              </div>
              {/* Name & Progress Column */}
              <div className="flex flex-col space-y-12">
                <div>
                  <h1>HTML5</h1>
                  <progress></progress>
                </div>
                <div>
                  <h1>HTML5</h1>
                  <progress></progress>
                </div>
                <div>
                  <h1>HTML5</h1>
                  <progress></progress>
                </div>
                <div>
                  <h1>HTML5</h1>
                  <progress></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
