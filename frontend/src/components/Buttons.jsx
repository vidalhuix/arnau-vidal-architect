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
    const translatedText = t('download'); // Get the translated text
    return `CV Arnau Vidal - ${translatedText}.pdf`;
  };

  const getFilePath = () => {
    const translatedText = t('download');
    return `/public/pdf/CV Arnau Vidal - ${translatedText}.pdf`;
  };

  const fileName = getFileName();
  const filePath = getFilePath();

  return (
    <div className="p-4">
      <a
        href={filePath}
        download={fileName}
        className="relative flex flex-row justify-center p-1 items-center px-4 py-2 border-gray-800  hover:scale-105  duration-100 group"
      >
        <FaFileDownload size={42} className="fill-gray-800 " />
        <span className="absolute hidden w-[300px] text-gray-800 font-semibold text-sm gray-200 overflow-hidden group-hover:block group-hover:animate-reveal pl-[200px]">
          {fileName}
        </span>
      </a>
    </div>
  );
};
