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
  levelShow?: string;
  leveltext?: string;
  padding: number;
};

const Card = ({
  btnColor = "bg-white",
  bgColor = "bg-bgcolor1",
  btnShow,
  levelShow,
  leveltext,
  icon: Icon,
  iconColor = "text-cyan-300",
  title,
  titleColor = "text-cyan-300",
  parg,
  pargColor = "text-white",
  btnText = "text-bgcolor1",
  padding = 0,
}: CardProps) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center space-y-20 items-center hover:border-2 border-cyan-300 h-[485px] w-[385px] ${bgColor} rounded-2xl`}
      >
        <div
          className={`flex flex-col space-y-2 items-center justify-center pt-${padding}`}
        >
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
        <span
          className={`${levelShow} bg-white text-bgcolor2 text-center py-2 w-4/5 h-10 rounded-full font-semibold`}
        >
          {leveltext}
        </span>
      </div>
    </>
  );
};

export default Card;
