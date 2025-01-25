import { ProjectItem } from "./ProjectItem";

export const Projects = () => {

  const project_data = [
  
    {
      id: "",
      name: "",
      year: "",
      office: "",
      client: "",
      role: "",
      description: "",
      thumbnail: "",
      link: "",
      images: [

      ],
    },

  ];
  

  return (
    <div id="projects" className="my-7 p-4 mx-auto max-w-5xl">
      <h1 className="mb-6 text-4xl font-bold text-center text-gray-800">
        Featured projects
      </h1>
        <div className="grid md:grid-cols-2 gap-12 lg:grid-cols-3 ">
          {project_data.map((project) => (
            <ProjectItem
              key={project.id}
              name={project.name}
              year={project.year}
              office={project.office}
              client={project.client}
              role={project.role}
              description={project.description}
              link={project.link}
              images={project.images}
            />
          ))}
        </div>

    </div>
  );
};
