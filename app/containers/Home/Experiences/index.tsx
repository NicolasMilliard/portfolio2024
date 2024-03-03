"use client";

import { useEffect, useRef, useState } from "react";
// Components
import { SectionTitle } from "@components/Title";
import ExperienceDetails from "./ExperienceDetails";
import Tabs from "./Tabs";
// Types
import { ExperiencesList } from "@app/types/experiences";

const Experiences = () => {
  const [height, setHeight] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<ExperiencesList>(
    ExperiencesList.yper
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: ExperiencesList) => {
    setActiveTab(tab);
  };

  // TODO: Not working, fix it
  useEffect(() => {
    console.log("height", height);
    if (sectionRef.current) {
      setHeight(sectionRef.current.clientHeight);
      // const { height } = sectionRef.current.getBoundingClientRect();
      // setHeight(height);
    }
  }, [sectionRef, height]);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto"
      style={{ maxWidth: "976px" }}
    >
      <div className="absolute z-20 w-full items-center justify-between rounded-3xl bg-white px-60 py-40 duration-100">
        <div className="mb-40">
          <SectionTitle>Experiences</SectionTitle>
        </div>
        <div className="flex gap-20">
          <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
          <ExperienceDetails activeTab={activeTab} />
        </div>
      </div>
      <div
        style={{ height: height }}
        className="absolute left-0 top-0 z-10 w-full rounded-3xl bg-gradient-to-r from-ultramarine to-congo_pink px-60 py-40 blur-lg duration-100"
      />
    </section>
  );
};

export default Experiences;
