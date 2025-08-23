import React from "react";
import { FaHtml5, FaReact, FaCss3Alt, FaUnity } from "react-icons/fa";
import { FaFlutter, FaDartLang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript, SiAdobephotoshop } from "react-icons/si";
import Card from "../components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../components/ui/carousel";

const Skills = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const skills = [
    {
      icon: FaHtml5,
      title: "HTML-5",
      color: "text-orange-600",
      titleColor: "text-orange-600",
      levelText: "Intermediate",
      parg: "Used to structure the content of all web pages.",
    },
    {
      icon: FaCss3Alt,
      title: "CSS-3",
      color: "text-blue-600",
      titleColor: "text-blue-600",
      levelText: "Advanced",
      parg: "Essential for styling and presenting web content beautifully.",
    },
    {
      icon: RiTailwindCssFill,
      title: "Tailwind CSS",
      color: "text-cyan-500",
      titleColor: "text-cyan-500",
      levelText: "Advanced",
      parg: "A utility-first CSS framework for building custom user interfaces.",
    },
    {
      icon: FaReact,
      title: "React",
      color: "text-sky-500",
      titleColor: "text-sky-500",
      levelText: "Intermediate",
      parg: "A JavaScript library for building dynamic and interactive user interfaces.",
    },
    {
      icon: SiJavascript,
      title: "JavaScript",
      color: "text-yellow-400",
      titleColor: "text-yellow-400",
      levelText: "Advanced",
      parg: "The core language for adding interactive behavior to websites.",
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
      color: "text-blue-700",
      titleColor: "text-blue-700",
      levelText: "Advanced",
      parg: "A superset of JavaScript that adds static types for improved code quality.",
    },
    {
      icon: FaFlutter,
      title: "Flutter",
      color: "text-cyan-500",
      titleColor: "text-cyan-500",
      levelText: "Advanced",
      parg: "Google's UI toolkit for building natively compiled applications for any platform.",
    },
    {
      icon: FaDartLang,
      title: "Dart",
      color: "text-indigo-600",
      titleColor: "text-indigo-600",
      levelText: "Advanced",
      parg: "A client-optimized language for building fast apps on any platform.",
    },
    {
      icon: FaUnity,
      title: "Unity",
      color: "text-slate-200",
      titleColor: "text-slate-200",
      levelText: "Beginner",
      parg: "A powerful game engine for creating 2D, 3D, and AR/VR games.",
    },
  ];

  return (
    <>
      <section id="skills" className="bg-bgcolor1">
        <div className="container mx-auto py-20 text-white">
          <h1 className="text-center text-4xl font-bold md:pb-20">
            My <span className="text-cyan-300">Skills</span>
          </h1>
          <Carousel setApi={setApi}>
            <CarouselContent className="max-sm:m-20 md:-ml-2">
              {skills.map((skill, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center md:basis-5/12 md:pl-2"
                >
                  <Card
                    icon={skill.icon}
                    iconColor={skill.color}
                    parg={skill.parg}
                    title={skill.title}
                    titleColor={skill.titleColor}
                    // btnColor={index === current ? "bg-cyan-300" : "bg-white"}
                    bgColor="bg-bgcolor2/20"
                    btnShow="hidden"
                    leveltext={skill.levelText}
                    padding={0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Skills;
