export const Skills = () => {
  const skillsData = [
    {
      category: "Sofware tools",
      items: [
        "Revit",
        "Naviate",
        "Enscape",
        "AutoCAD",
        "Bluebeam",
        "Sketchup",
        "Solibri",
        "Photoshop + Adobe Ai/iD/Ps",
      ],
    },
    {
      category: "Enviroments",
      items: ["BIM", "Google", "Microsoft", "BEAST audits"],
    },
    {
      category: "Experience & Qualifications",
      items: [
        "Architecture degree",
        "12 years working experience:",
        "+2 years as a supervisor",
        "in large projects",
        "in collaboration",
        "in process design & development",
        "in planning and delivery",
      ],
    },
    {
      category: "Languages",
      items: ["English", "Swedish", "Catalan", "Spanish"],
    },
    {
      category: "Others",
      items: ["Driving license B, C1 & C"],
    },
  ];

  return (
    <div id="skills" className=" ">
      <div className=" m-auto sm:pl-10 p-5 max-w-4xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-gray-800">Skills</h1>
        <div className="grid md:grid-cols-2 gap-12 lg:grid-cols-3 mt-8">
          {skillsData.map((skillSection, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="inline-block px-2 py-1 font-semibold text-xl text-white bg-gray-800 rounded-md">
                {skillSection.category}
              </h2>
              <ul className="flex flex-col gap-2">
                {skillSection.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-lg text-gray-600 px-2 py-1 bg-gray-200"
                  >
                    {item}
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
