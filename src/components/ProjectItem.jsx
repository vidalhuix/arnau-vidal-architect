export const ProjectItem = ({
  name,
  year,
  office,
  client,
  role,
  description,
  images,

}) => {
 
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-500">
      <h3 className="absolute text-white bg-black/50 px-2 text-2xl text-shadow font-bold text-center group-hover:hidden">
        {name.toUpperCase()}
      </h3>
     <p>{year}</p>
     <p>{client}</p>
     <p>{office}</p>
     <p>{description}</p>
    </div>
  );
};
