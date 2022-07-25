import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Amazon Web Services",
    percentage: "100%",
  },
  {
    id: 2,
    title: "Cloud Architecture",
    percentage: "100%",
  },
  {
    id: 3,
    title: "Cloud Development",
    percentage: "100%",
  },
  {
    id: 4,
    title: "Software Architecture",
    percentage: "100%",
  },
  {
    id: 5,
    title: "Agile Methodologies",
    percentage: "100%",
  },
  {
    id: 10,
    title: "Software Project Management",
    percentage: "80%",
  },
  {
    id: 11,
    title: "DevOps",
    percentage: "80%",
  },
]
const skillProgrammingData = [
  {
    id: 12,
    title: "JavaScript",
    percentage: "80%",
  },
  {
    id: 13,
    title: "TypeScript",
    percentage: "80%",
  },
  {
    id: 14,
    title: "Node.js",
    percentage: "80%",
  },
  {
    id: 20,
    title: "Java",
    percentage: "60%",
  },
  {
    id: 21,
    title: "Spring Boot",
    percentage: "60%",
  },
];
const skillDatabaseData = [
  {
    id: 1,
    title: "DynamoDB",
    percentage: "80%",
  },
  {
    id: 2,
    title: "SQL",
    percentage: "80%",
  },
  {
    id: 3,
    title: "MongoDB",
    percentage: "60%",
  },
  // {
  //   id: 3,
  //   title: "TailwindCSS",
  //   percentage: "90%",
  // },
  // {
  //   id: 4,
  //   title: "Javascript",
  //   percentage: "70%",
  // },
  // {
  //   id: 5,
  //   title: "ReactJS",
  //   percentage: "70%",
  // },
  // {
  //   id: 6,
  //   title: "ExpressJS",
  //   percentage: "60%",
  // },
  // {
  //   id: 7,
  //   title: "MongoDB",
  //   percentage: "50%",
  // },
  // {
  //   id: 8,
  //   title: "Git, Github",
  //   percentage: "80%",
  // },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-xl text-gray-800 font-bold mb-4">Methodologies</h3>
          </div>
        </div>
        <div className="w-full flex flex-wrap">
          {skillData.map((skill, id) => (
            <SkillItem skill={skill} key={id} />
          ))}
        </div>
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-xl text-gray-800 font-bold mb-4">Programming Languages/Frameworks</h3>
          </div>
        </div>
        <div className="w-full flex flex-wrap">
        {skillProgrammingData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
        </div>
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-xl text-gray-800 font-bold mb-4">Databases</h3>
          </div>
        </div>
        <div className="w-full flex flex-wrap">
        {skillDatabaseData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
        </div> 
      </div>
    </div>
  );
};

export default Skills;
