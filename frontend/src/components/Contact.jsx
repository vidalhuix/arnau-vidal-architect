import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { useState } from 'react';

export const Contact = () => {
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
    <div id="contact" className="mx-auto my-7 p-4 ">
      <div className="max-w-3xl m-auto  p-4">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
          {t('contact.title')}
        </h1>
        <div className="flex flex-row m-auto justify-center gap-4 items-center pt-6 max-w-[100px]  w-full">
          <a
            href="https://www.linkedin.com/in/arnau-vidal-4266a940/"
            target="_blank"
          >
            <FaLinkedin size={50} className="cursor-pointer hover:scale-105 fill-[#9f1239]" />
          </a>
          <div className="relative flex flex-col justify-center items-center  group cursor-pointer">
            <a
              href={filePath}
              download={fileName}
              className="relative flex flex-row justify-center p-1 items-center px-4 py-2 border-gray-800  hover:scale-105  duration-100 group"
            >
              <FaFileDownload size={42} className="fill-[#9f1239]  " />
              <span className="absolute hidden w-[300px] text-[#9f1239] font-semibold text-sm gray-200 overflow-hidden group-hover:block group-hover:animate-reveal pl-[200px]">
                {fileName}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
