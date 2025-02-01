import { FaEye, FaFileDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const getFileName = () => {
    return `CV Arnau Vidal - ${t('download')}.pdf`;
  };

  const getFilePath = () => {
    return `/pdf/CV Arnau Vidal - ${t('download')}.pdf`;
  };

  const handleDownload = () => {
    const filePath = getFilePath();
    window.open(filePath, '_blank');
  };

  return (
    <div className="p-4">
      <button
        onClick={handleDownload}
        className="relative flex flex-row justify-center p-1 items-center px-4 py-2 border-gray-800 hover:scale-105 duration-100 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        aria-label={`Download ${getFileName()}`}
        aria-describedby="file-name-tooltip"
      >
        <FaFileDownload size={42} className="fill-gray-800" />
        <span className="absolute hidden w-[300px] text-gray-800 font-semibold text-sm overflow-hidden group-hover:block group-hover:animate-reveal pl-[200px]">
          {getFileName()}
        </span>
      </button>
    </div>
  );
};
