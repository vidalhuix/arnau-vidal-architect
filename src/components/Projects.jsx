import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = t('projects_data.projects', { returnObjects: true }).filter(
    (p) => p.show
  );

  return (
    <div id="projects" className="m-auto mt-7 sm:pl-10 p-4 h-full">
      <div className="max-w-5xl m-auto pb-10">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
          {t('projects_data.title')}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="container overflow-hidden relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 bg-black cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={`/${project.id}/Thumnail.jpg`}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover opacity-60  group hover:opacity-100 ease-in filter grayscale-[0.4] transition-all duration-300"
              />
              <h2 className="absolute text-white  px-2 text-2xl text-shadow font-bold text-center group-hover:hidden">
                {project.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectItem
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};
