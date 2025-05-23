import { useTranslation } from "react-i18next";
import BackgroundMain from "/src/assets/bg-header-2.jpg";
import ProfileImg from "/src/assets/profile-pic.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BtnDownload } from "./Buttons";

export default function Main() {

  const { t } = useTranslation();

  return (
    <div id="main" className="relative">
      <img
        className="w-full h-[75vh] object-cover object-top opacity-70 z-0 scale-x-[-1]"
        src={BackgroundMain}
        alt="/"
      />
      <div className="w-full hh-[75vh] absolute top-0 left-0 bg-white/5">
        <div className="m-auto pl-10 p-4 max-w-4xl h-full w-full flex flex-col justify-center items-start">
          <h1 className="sm:text-5xl my-4 text-4xl text-gray-800">
          {/* {t("main.greeting-1")} */}
          <br />
            <span className="text-[#9f1239] font-bol"> Arnau Vidal</span>
          {t("main.greeting-2")}
          </h1>
          <h1 className="sm:text-5xl font-bold text-4xl text-gray-800">
          {t("main.title")}
          </h1>

          <div className=" flex justify-between items-center gap-1 pt-6 max-w-[100px] w-full">
            <a
              href="https://www.linkedin.com/in/arnau-vidal-4266a940/"
              target="_blank"
            >
              <FaLinkedin
                size={50}
                className="cursor-pointer hover:scale-105 fill-gray-800 "
              />
            </a>
            <BtnDownload />
          </div>
        </div>
      </div>
      <img
        src={ProfileImg}
        alt="profile image"
        className=" bottom-11 absolute rounded-full border-4 white-blue-500 shadow-lg
         right-4 w-[200px] translate-y-1/3 scale-x-[1] md:mr-[25%]"
      ></img>
    </div>
  );
}
