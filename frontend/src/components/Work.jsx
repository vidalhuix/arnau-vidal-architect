import { useTranslation } from "react-i18next";
import { WorkItem } from "./WorkItem"; // Assuming the path to WorkItem is correct

export const Work = () => {
  const { t } = useTranslation();

  return (
    <div id="resume" className="m-auto mt-7 sm:pl-10 p-4 bg-stone-100">
      <div className="max-w-3xl m-auto mt-7 pb-0 p-4">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
          {t("work.title")}
        </h1>

        {t("work.categories", { returnObjects: true }).map((category) => {
          // Filter projects that belong to this category's place
          const categoryProjects = t("projects_data", { returnObjects: true }).filter(
            (project) => project.office === category.place
          );

          return (
            <WorkItem
              key={category.place} // Using the place as a unique key
              year={category.year}
              name={category.name}
              place={category.place}
              duration={category.duration}
              details={category.details}
              projects={categoryProjects}
            />
          );
        })}
      </div>
    </div>
  );
};
