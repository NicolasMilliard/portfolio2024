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
  const marginBottom = "8rem";
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: ExperiencesList) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      sectionRef.current && setHeight(sectionRef.current.clientHeight);
    });

    const currentSectionRef = sectionRef.current;

    currentSectionRef && resizeObserver.observe(currentSectionRef);

    return () => {
      currentSectionRef && resizeObserver.unobserve(currentSectionRef);
    };
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      setHeight(sectionRef.current.clientHeight);
    }
  }, [activeTab]);

  return (
    <section
      className="max-w-244 relative mx-auto"
      style={{ height: height, marginBottom: marginBottom }}
    >
      <div
        ref={sectionRef}
        className="absolute z-20 w-full items-center justify-between rounded-3xl bg-white px-8 py-10 md:px-15"
      >
        <div className="mb-10">
          <SectionTitle>Experiences</SectionTitle>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
          <ExperienceDetails activeTab={activeTab} />
        </div>
      </div>
      <div
        style={{ height: height }}
        className="absolute left-0 top-0 z-10 w-full rounded-3xl bg-gradient-to-r from-ultramarine to-congo_pink blur-lg"
      />
    </section>
  );
};

export default Experiences;
