import React from "react";
import type { IconType } from "react-icons";

type CardProps = {
  btnColor?: string;
  icon: IconType;
  title: string;
  parg: string;
  btnText?: string;
};

const Card = ({
  btnColor = "bg-white",
  icon: Icon,
  title,
  parg,
  btnText = "text-bgcolor1",
}: CardProps) => {
  return (
    <>
      <div className="flex flex-col justify-evenly items-center hover:border-2 border-cyan-300 h-[485px] w-[385px] bg-bgcolor1 rounded-2xl">
        <Icon className="w-20 h-20 text-cyan-300" />
        <h1 className="font-bold text-cyan-300 text-2xl">{title}</h1>
        <p className="text-center font-semibold text-[14px] px-2">{parg}</p>
        <button
          type="button"
          className={`rounded-3xl px-10 py-1 font-bold w-3/4 ${btnText} ${btnColor} hover:cursor-pointer hover:bg-cyan-200`}
        >
          Hire Me
        </button>
      </div>
    </>
  );
};

export default Card;
