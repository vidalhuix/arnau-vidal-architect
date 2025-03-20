export const WorkItem = ({ year, place, duration, details, projects }) => {
  return (
    <ol className="flex flex-col md:row relative border-l-[2px] border-[#9f1239]">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 rounded-full bg-[#9f1239] mt-1.5 -left-1.5 border-white" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-gray-800 rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-gray-800 ">{place}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </div>
        <p className="w-full mt-2 text-base font-normal text-stone-500">
          {details}
        </p>

        {projects && projects.length > 0 && (
          <div className="mt-4">
            <ul className="list-none pl-5 mt-2 text-sm text-stone-500">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="mb-2 flex flex-wrap justify-start items-center gap-1"
                >
                  <span className=" font-semibold text-gray-700">
                    {project.name}
                  </span>
                  <span className=" font-semibold mr-1 text-gray-700 text-xs">
                    {project.year}
                  </span>
                  <span className="  text-gray-700">{project.role}</span>
                  {/* <span className="my-1 text-sm font-normal leading-none text-stone-400">
                    Client:{' '}
                  </span> */}
                  <p className="inline-block text-gray-500">
                    {project.description}
                    <span className=" text-stone-500">
                      {' '}
                      {project.location}.
                  <span className="text-gray-500"> {project.client}.</span>
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    </ol>
  );
};
