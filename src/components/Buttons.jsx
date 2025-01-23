import { FaGithub, FaEye, FaFileDownload } from "react-icons/fa";

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

export const BtnViewCode = ({ git_url }) => {
  return (
    <div className="p-2 rounded-full bg-gray-800 no-underline hover:scale-105 ease-in duration-100 ">
      <a className="flex flex-row items-center " href={git_url} target="_blank">
        <FaGithub size={30} className="invert" />
        <p className="block text-sm text-white ml-2 whitespace-nowrap">
          View the code
        </p>
      </a>
    </div>
  );
};
export const BtnDownload = () => {
  return (
    <div className="p-4">
      <a
        href="/public/pdf/CV Arnau Vidal - Architect.pdf" // Path to the PDF file in the public folder
        download="CV_Arnau_Vidal_Architect.pdf" // Suggested filename when the file is downloaded
        className="flex flex-row justify-center p-1 items-center px-4 py-2 border-2 border-gray-800 rounded-full shadow-md hover:scale-105   ease-in duration-200 group"
      >
        <FaFileDownload size={31} className="fill-gray-800" />
        <span className="hidden ml-4 font-semibold text-sm overflow-hidden group-hover:block">
          CV_Arnau_Vidal.pdf
        </span>
      </a>
    </div>
  );
};
