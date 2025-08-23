import React from "react";
import { FaHtml5, FaReact, FaCss3Alt, FaUnity } from "react-icons/fa";
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
    },
    {
      icon: FaCss3Alt,
      title: "CSS-3",
      color: "text-blue-600",
      titleColor: "text-blue-600",
    },
    {
      icon: RiTailwindCssFill,
      title: "Tailwind CSS",
      color: "text-cyan-500",
      titleColor: "text-cyan-500",
    },
    {
      icon: FaReact,
      title: "React",
      color: "text-sky-500",
      titleColor: "text-sky-500",
    },
    {
      icon: SiJavascript,
      title: "JavaScript",
      color: "text-yellow-400",
      titleColor: "text-yellow-400",
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
      color: "text-blue-700",
      titleColor: "text-blue-700",
    },
    {
      icon: SiAdobephotoshop,
      title: "Adobe Photoshop",
      color: "text-blue-800",
      titleColor: "text-blue-800",
    },
    {
      icon: FaUnity,
      title: "Unity",
      color: "text-slate-200",
      titleColor: "text-slate-200",
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
                  className="flex justify-center items-center md:basis-1/2 lg:basis-1/3 md:pl-2"
                >
                  <Card
                    icon={skill.icon}
                    iconColor={skill.color}
                    parg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac justo nibh. Nulla non justo porttitor, pellentesque est sit amet, tempor lorem."
                    title={skill.title}
                    titleColor={skill.titleColor}
                    // btnColor={index === current ? "bg-cyan-300" : "bg-white"}
                    bgColor="bg-bgcolor2/20"
                    btnShow="hidden"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Skills;
