import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Divider = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="h-0.5 w-10 bg-cyan-50"></div>
      <div className="flex flex-row justify-center items-center -space-x-2">
        <div className="h-0.5 w-4 bg-cyan-50 transform rotate-45"></div>
        <div className="h-0.5 w-4 bg-cyan-50 transform rotate-45"></div>
        <ChevronDownIcon className="w-6 h-6 text-cyan-50" />
        <div className="h-0.5 w-4 bg-cyan-50 transform -rotate-45"></div>
        <div className="h-0.5 w-4 bg-cyan-50 transform -rotate-45"></div>
      </div>

      <div className="h-0.5 w-10 bg-cyan-50"></div>
    </div>
  );
};

export default Divider;
