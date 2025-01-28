import { useTranslation } from "react-i18next";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";
import { useState } from "react";


export const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("arnauvidal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <div id="contact" className="mx-auto my-7 p-4 ">
      <div className="max-w-3xl m-auto  p-4">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
        {t("contact.title")}
        </h1>
        <div className="flex flex-row m-auto justify-center gap-4 items-center pt-6 max-w-[100px]  w-full">
          <a
            href="https://www.linkedin.com/in/arnau-vidal-4266a940/"
            target="_blank"
          >
            <FaLinkedin size={50} className="cursor-pointer  fill-[#9f1239]" />
          </a>
          <div className="relative flex flex-col justify-center items-center group cursor-pointer">
            <FaFileDownload size={42} className="fill-[#9f1239]" />
            <span className="hidden bottom-[-30px] absolute ml-4 text-sm overflow-hidden text-[#9f1239] group-hover:block">
              CV_Arnau_Vidal.pdf
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
