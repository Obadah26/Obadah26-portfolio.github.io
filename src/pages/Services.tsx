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
              parg="I design and develop custom mobile applications for both iOS and Android platforms. Whether you need a simple utility app or a complex business solution, I focus on building intuitive and reliable apps that deliver a great user experience."
              levelShow="hidden"
              padding={20}
            />
            <Card
              title="Web Development"
              icon={MdWeb}
              parg="I specialize in building responsive, high-performance websites and web applications. My focus is on creating seamless user experiences using modern technologies to ensure your project is scalable, secure, and visually appealing."
              btnColor="bg-cyan-300"
              btnText="text-white"
              levelShow="hidden"
              padding={20}
            />
            <Card
              title="Game Development"
              icon={FaGamepad}
              parg="I design and code engaging games from concept to completion. I bring creative ideas to life with a focus on polished mechanics, immersive worlds, and an enjoyable player experience that keeps users coming back for more."
              levelShow="hidden"
              padding={20}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
