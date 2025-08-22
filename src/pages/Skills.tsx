import React from "react";
import { FaHtml5, FaReact, FaCss3Alt, FaUnity } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript, SiAdobephotoshop } from "react-icons/si";
import ProgressBar from "../components/ProgressBar";

const Skills = () => {
  return (
    <>
      <section id="skills" className="bg-bgcolor1">
        <div className="container mx-auto px-6 text-white">
          <h1 className="font-bold text-center pt-20 text-4xl">
            My <span className="text-cyan-300">Skills</span>
          </h1>
          {/* Main Row */}
          <div className="flex flex-col justify-center space-y-5 py-10 md:space-x-50 md:flex-row md:space-y-0">
            {/* Left Row */}
            <div className="flex flex-row justify-center items-center space-x-5">
              {/* Icon Column */}
              <div className="flex flex-col space-y-5">
                <FaHtml5 className="w-20 h-20 text-orange-700" />
                <FaCss3Alt className="w-20 h-20 text-cyan-500" />
                <RiTailwindCssFill className="w-20 h-20 text-cyan-400" />
                <FaReact className="w-20 h-20 text-cyan-400" />
              </div>
              {/* Name & Progress Column */}
              <div className="flex flex-col space-y-12 w-48 font-bold">
                <div className="space-y-2">
                  <h1>HTML-5</h1>
                  <ProgressBar progress={80} />
                </div>
                <div className="space-y-2">
                  <h1>CSS-3</h1>
                  <ProgressBar progress={75} />
                </div>
                <div className="space-y-2">
                  <h1>Tailwind CSS</h1>
                  <ProgressBar progress={75} />
                </div>
                <div className="space-y-2">
                  <h1>React</h1>
                  <ProgressBar progress={60} />
                </div>
              </div>
            </div>
            {/* Right Row */}
            <div className="flex flex-row justify-center items-center space-x-5">
              {/* Icon Column */}
              <div className="flex flex-col space-y-5">
                <SiJavascript className="w-20 h-20 text-yellow-300" />
                <SiTypescript className="w-20 h-20 text-cyan-400" />
                <SiAdobephotoshop className="w-20 h-20 text-cyan-400" />
                <FaUnity className="w-20 h-20 text-black" />
              </div>
              {/* Name & Progress Column */}
              <div className="flex flex-col space-y-12 w-48 font-bold">
                <div className="space-y-2">
                  <h1>JavaScript</h1>
                  <ProgressBar progress={80} />
                </div>
                <div className="space-y-2">
                  <h1>TypeScript</h1>
                  <ProgressBar progress={80} />
                </div>
                <div className="space-y-2">
                  <h1>Adobe Photoshop</h1>
                  <ProgressBar progress={50} />
                </div>
                <div className="space-y-2">
                  <h1>Unity</h1>
                  <ProgressBar progress={40} />
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
