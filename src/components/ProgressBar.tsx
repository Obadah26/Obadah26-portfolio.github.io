import React from "react";

type ProgressBarProps = {
  progress?: number;
};

const ProgressBar = ({ progress = 0 }: ProgressBarProps) => {
  return (
    <>
      <div className="w-full bg-cyan-50 rounded-full h-5 dark:bg-bgcolor2 relative">
        {/* Progress Bar */}
        <div
          className="bg-cyan-300 h-full rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
        {/* Text over the progress bar */}
        <span className="absolute inset-0 flex items-end justify-end text-white font-bold text-[12px] pr-1">
          {progress}%
        </span>
      </div>
    </>
  );
};

export default ProgressBar;
