import React from "react";
import Card from "../components/Card";
import { MdWeb, MdOutlineAppSettingsAlt } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <section id="services" className="bg-bgcolor2">
        <div className="container mx-auto text-white py-20 space-y-20">
          <h1 className="text-4xl font-bold text-center">
            My <span className="text-cyan-300">Services</span>
          </h1>
          {/* Services Row */}
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <Card
              title="App Development"
              icon={MdOutlineAppSettingsAlt}
              parg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a ligula orci. Morbi non nibh sed velit tempor ornare. Curabitur ipsum erat, interdum eu erat vel, maximus tincidunt metus."
            />
            <Card
              title="Web Development"
              icon={MdWeb}
              parg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a ligula orci. Morbi non nibh sed velit tempor ornare. Curabitur ipsum erat, interdum eu erat vel, maximus tincidunt metus."
              btnColor="bg-cyan-300"
              btnText="text-white"
            />
            <Card
              title="Game Development"
              icon={FaGamepad}
              parg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a ligula orci. Morbi non nibh sed velit tempor ornare. Curabitur ipsum erat, interdum eu erat vel, maximus tincidunt metus."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
