import React from "react";

export const Experience = () => {
  return (
    <div className="flex flex-col w-full relative mt-20">
      {/* Vertical Line */}
      <div className="w-0.5 bg-gray-300 absolute left-1/2 transform -translate-x-1/2 h-full"></div>

      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } my-8`}
        >
          {/* Experience Content */}
          <div className={`w-5/12 ${index % 2 === 0 ? "pl-10" : "pr-10"}`}>
            <div
              className={`relative flex items-center ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              {/* Text Container */}
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-red-500">
                  {experience.title} @ {experience.company_name}
                </h3>
                <p className="text-gray-500">{experience.date}</p>
                <ul className="list-disc ml-5">
                  {experience.points.map((point, idx) => (
                    <li key={idx} className="text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
