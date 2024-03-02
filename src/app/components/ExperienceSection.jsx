import React from "react";

export const ExperienceSection = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Experience</h1>
      <div className="flex flex-col w-full relative mt-20">
        {/* Vertical Line */}
        <div className="w-1.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 absolute left-1/2 transform -translate-x-1/2 h-full rounded-xl"></div>

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
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-2 rounded-xl shadow-lg">
                  <div className="block bg-[#121212] rounded-xl p-4">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {experience.title} - {experience.company_name}
                  </h3>
                  <p className="text-slate-400">{experience.date}</p>
                  <ul className="list-disc ml-5">
                    {experience.points.map((point, idx) => (
                      <li key={idx} className="text-slate-300">
                        {point}
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const experiences = [
  {
    title: "React.js Developer Internship",
    company_name: "Redbee Software",
    date: "April 2022 - June 2022",
    points: [
      "Completed a training for ReactJS on Udemy and started a group project.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Redbee Software",
    date: "June 2022 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Developer with Haxe",
    company_name: "Reevotech",
    date: "November 2023 - Present",
    points: [
      "Developing and maintaining web applications using Haxe.",
      "Implementing responsive design and ensuring compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
