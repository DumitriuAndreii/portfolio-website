"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import { TabButton } from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id:"skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"education",
        content: (
            <ul className="list-disc pl-2">
                <li>CNI</li>
                <li>CNI</li>
                <li>CNI</li>
                <li>CNI</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id:"certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>ECDL</li>
                <li>ECDL</li>
                <li>ECDL</li>
                <li>ECDL</li>
            </ul>
        )
    },
]

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/about-section-2.webp"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Bibendum est ultricies integer quis auctor elit sed. Aliquet
            porttitor lacus luctus accumsan tortor posuere. Mauris rhoncus
            aenean vel elit scelerisque mauris pellentesque pulvinar. Magna eget
            est lorem ipsum. In tellus integer feugiat scelerisque varius. Dui
            id ornare arcu odio. Cursus turpis massa tincidunt dui ut ornare
            lectus sit amet. Eleifend donec pretium vulputate sapien nec. In
            ante metus dictum at tempor commodo ullamcorper a lacus. eu.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton><TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((section) => section.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
