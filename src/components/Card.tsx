import React from "react";
import type { IconType } from "react-icons";

type CardProps = {
  btnColor?: string;
  icon: IconType;
  iconColor?: string;
  title: string;
  titleColor?: string;
  parg: string;
  pargColor?: string;
  btnText?: string;
  bgColor?: string;
  btnShow?: string;
};

const Card = ({
  btnColor = "bg-white",
  bgColor = "bg-bgcolor1",
  btnShow,
  icon: Icon,
  iconColor = "text-cyan-300",
  title,
  titleColor = "text-cyan-300",
  parg,
  pargColor = "text-white",
  btnText = "text-bgcolor1",
}: CardProps) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center space-y-20 items-center hover:border-2 border-cyan-300 h-[485px] w-[385px] ${bgColor} rounded-2xl`}
      >
        <div className="flex  flex-col space-y-2 items-center justify-center">
          <Icon className={`w-20 h-20 ${iconColor}`} />
          <h1 className={`font-bold ${titleColor} text-2xl`}>{title}</h1>
        </div>
        <p className={`text-center ${pargColor} font-medium text-[14px] px-3`}>
          {parg}
        </p>
        <button
          type="button"
          className={`${btnShow} rounded-3xl px-10 py-1 font-bold w-3/4 ${btnText} ${btnColor} hover:cursor-pointer hover:bg-cyan-200`}
        >
          Hire Me
        </button>
      </div>
    </>
  );
};

export default Card;
