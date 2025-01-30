import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation(); // Hook to access translations

  // Access the skills data from the translation JSON files
  const skillsData = t("skills.categories", { returnObjects: true });

  return (
    <div id="skills" className="">
      <div className="m-auto sm:pl-10 p-5 max-w-4xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          {t("skills.title")} {/* Dynamically get the title */}
        </h1>
        <div className="grid md:grid-cols-2 gap-12 lg:grid-cols-3 mt-8">
          {skillsData.map((skillSection, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="inline-block px-2 py-1 font-semibold text-xl text-white bg-gray-800 rounded-md">
                {skillSection.category} {/* Use category from translation */}
              </h2>
              <ul className="flex flex-col gap-2">
                {skillSection.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-lg text-gray-600 px-2 py-1 bg-gray-200"
                  >
                    {item} {/* Use item from translation */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
