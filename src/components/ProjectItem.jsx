import { IoClose } from 'react-icons/io5';
import { FaLink } from 'react-icons/fa6';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const ProjectItem = ({ project, onClose }) => {
  // Use the exact number of images from project data
  const images = Array.from({ length: project.images }, (_, i) => {
    const num = String(i + 1).padStart(2, '0'); // Formats as 01, 02, 03...
    return `/${project.id}/${num}.jpg`;
  });

  const link = project;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-white p-6  max-w-4xl w-full max-h-[90vh] overflow-auto">
        <button
          className="absolute top-2 right-2 text-gray-800"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 5000,
            arrows: true,
            pagination: true,
          }}
          className="mt-4"
        >
          {images.map((src, index) => (
            <SplideSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full max-h-[70vh] rounded-lg object-contain"
              />
            </SplideSlide>
          ))}
        </Splide>

        <div className="mt-4">
          <h2 className=" text-lg font-semibold">
            <span className="text-lg font-normal">{project.year} - </span>
            {project.name}
            {' - '}
            {project.location}
          </h2>
          <span className="text-lg font-normal"> {project.role}</span>
          <div className="flex flex-row gap-3 items-center">
            <p className="text-gray-600">{project.description}</p>
            <a href={project.link}>
              <FaLink className="fill-[#9f1239]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

