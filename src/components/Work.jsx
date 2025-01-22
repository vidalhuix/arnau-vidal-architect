import { WorkItem } from "./WorkItem";

export const Work = () => {
  const data = [
    {
      year: "2022-2023",
      title: "LINDBERG STENBERG Architects",
      duration: "7 month",
      details: "",
      projects: [
        {
          year: "",
          title: "Hasselnöten",
          description:
            "12.380m² 73 rental apartments & 52 för sale. Program Management. Uppland's Väsby.",
          client: "PEAB",
        },
        {
          year: "",
          title: "Finnberget ",
          description:
            "Responsible architect. 27.000m². around  300 units. Competition project in Finnberget, Kvarnholmen.",
          client: "JM",
        },
        {
          year: "",
          title: "Rördrömmen",
          description:
            "20.000m². around 200 apartment units. Sketch of exploitation in Sigtuna.",
          client: "JM",
        },
        {
          year: "",
          title: "Smörlottsgatan",
          description:
            "12.270m². 191 apartments. Sketch for new layout and building permit.",
          client: "Balder",
        },
      ],
    },
    {
      year: "2016-2022",
      title: "Arkitema",
      duration: "6 years",
      details:
        "Further developed my knowledge in housing, especially during the construction documents. Oriented in both model manager role and responsible architect. Worked in Revit in BIM environments.",
      projects: [
        {
          year: "2022",
          title: "Korsängen",
          description:
            "Responsible architect. 3 residential buildings + 2 lokals, 'NärBo' concept. 122 rental units in Enköping.",
          client: "PEAB",
        },
        {
          year: "2020-2021",
          title: "Väsjön",
          description:
            "Responsible architect. 206 new housing cooperatie apartments Composed of two city blocks of 3 floors + attic. With collective garden and shared underground garage.",
          client: "Magnolia",
        },
        {
          year: "2019-2020",
          title: "Åhusen",
          description:
            "Model manager from project brief, system documentation and building plans. 14.230m², 194 rental apartments. Planning and design of three new residential buildings in Upplands Väsby Center.",
          client: "Väsbyhem",
        },
        {
          year: "2019-2020",
          title: "Täby Park",
          description:
            " Part of the working team. Project of 12.000 m², 145 apartments + garage + 4 locals. Sketch, project brief, system documentation and building permits & plans + sales material for construction of an apartment building in Täby park.",
          client: "Viktor Hanson",
        },
        {
          year: "2018-2019",
          title: " Lappi's Student Housing",
          description:
            "Model manager. Competition project 800 student apartment, 28.000 m². Final project 4 residential towers with 145 student apartments. From sketch, project brief, system documentation and building permits & plans. Läppkärrsberget Frescati, Stockholm.",
          client: "SSSB & PEAB",
        },
        {
          year: "2017-2019",
          title: "Lingontuvan",
          description:
            "Model manager. Extent 7200m², 95 new housing cooperative apartment units. Planning and design of new residential building in the Vega area, Haninge.",
          client: "Viktor Hanson",
        },
      ],
    },
    {
      year: "2014-2016",
      title: "Aedis Arkitekter",
      duration: "2 years",
      details:
        "Worked in different design stages from an early stage until construction deed. Most projects were based on drawings from 3D laser scanning and Revit modeling. ",
      projects: [
        {
          year: "2014-2015",
          title: "Kv. Klockarbacke",
          description:
            "Visualizer and Model manager. 127 cooperative apartments designed in two apartment towers shareing the first 3 floor plans. With locals and undergroundgarage in Huddinge Center.",
          client: "Einar Mattsson",
        },
        {
          year: "2015-2016",
          title: "Västra ",
          description: "",
          client: "",
        },
      ],
    },
    {
      year: "2012-2014",
      title: "Argo Arkitekter",
      duration: "2 years",
      details:
        "Worked mainly in early stages of the projects with a focus on housing, from private villas to apartment buildings and new blocks. Learned swedish ​​among other things.",
      projects: [],
    },
    {
      year: "2011-2012",
      title: "Consultant Architect",
      duration: "1 years",
      details: "Renovation and visualization.",
      projects: [],
    },
    {
      year: "2010-2011",
      title: "Archi21 Architect office",
      duration: "1,5 years",
      details:
        "Intership. Early stage design, drawings, modeling and visualization.",
      projects: [],
    },
  ];
  return (
    <div id="resume" className="m-auto  my-7 sm:pl-10 p-4 bg-stone-100">
      <div className="max-w-3xl m-auto  my-7 p-4">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
          Work
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
