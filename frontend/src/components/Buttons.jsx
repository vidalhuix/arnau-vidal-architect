import { FaEye, FaFileDownload } from "react-icons/fa";

export const BtnLiveDemo = ({ homepage }) => {
  return (
    <div className="p-2 rounded-full bg-gray-800 no-underline hover:scale-105 ease-in duration-100 ">
      <a
        className="flex flex-row items-center "
        href={homepage}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEye size={30} className="invert" />
        <p className="text-sm text-white ml-2 whitespace-nowrap">Live demo</p>
      </a>
    </div>
  );
};


export const BtnDownload = () => {
  return (
    <div className="p-4">
      <a
        href="/public/pdf/CV Arnau Vidal - Architect.pdf" 
        download="CV_Arnau_Vidal.pdf" 
        className="relative flex flex-row justify-center p-1 items-center px-4 py-2 border-gray-800  hover:scale-105  duration-100 group"
      >
        <FaFileDownload size={42} className="fill-gray-800 shadow-md " />
        <span className="absolute hidden ml-4 font-semibold text-sm gray-200 overflow-hidden group-hover:block group-hover:animate-reveal pl-[190px]">
          CV_Arnau_Vidal.pdf
        </span>
      </a>
    </div>
  );
};
