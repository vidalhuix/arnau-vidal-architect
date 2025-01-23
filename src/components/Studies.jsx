import { WorkItem } from "./WorkItem";

export const Studies = () => {
  const data = [
    {
      year: "2003-2011",
      title: "UPC ETSAV (Technical College of Architecture in Vallés, Catalonia)",
      duration: "8 years",
      details: "Architect career degree + Master.",
    },
    {
      year: "2007-2008",
      title: "BME Budapest",
      duration: "1 years",
      details: "European exchange program, Erasmus.",
    },
  ];
  return (
    <div id="resume" className="mx-auto  mb-7 sm:pl-10 pt-0 p-4 bg-stone-100">
      <div className="max-w-3xl mx-auto  mb-7 pt-0 p-4">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
          Studies
        </h1>
        {data.map((item, idx) => (
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
