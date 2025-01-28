import { useTranslation } from "react-i18next";
import { WorkItem } from "./WorkItem";

export const Studies = () => {
  const { t } = useTranslation();

  // Fetch studies data dynamically from translations
  const studiesData = t("studies.categories", { returnObjects: true });

  return (
    <div id="resume" className="mx-auto  mb-7 sm:pl-10 pt-0 p-4 bg-stone-100">
      <div className="max-w-3xl mx-auto  mb-7 pt-0 p-4">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
        {t("studies.title")}
        </h1>
        {studiesData.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            projects={item.projects}
          />
        ))}
      </div>
    </div>
  );
};
