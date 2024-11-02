'use client';

import { useScopedI18n } from '@app/locales/client';
import { useEffect, useRef, useState } from 'react';
// Components
import { SectionTitle } from '@components/Title';
import ExperienceDetails from './ExperienceDetails';
import Tabs from './Tabs';

const defaultTab = 'yper_lead_front_end_developer';

const Experiences = () => {
  const t = useScopedI18n('Homepage.Experiences');

  const [height, setHeight] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (sectionRef.current) {
        setHeight(sectionRef.current.clientHeight);
      }
    });

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      resizeObserver.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        resizeObserver.unobserve(currentSectionRef);
      }
    };
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      setHeight(sectionRef.current.clientHeight);
    }
  }, [activeTab]);

  return (
    <section
      className="relative mx-auto mb-32 max-w-244"
      style={{ height: height }}
    >
      <div
        ref={sectionRef}
        className="absolute z-20 w-full items-center justify-between rounded-3xl bg-white px-8 py-10 md:px-15"
      >
        <div className="mb-10">
          <SectionTitle>{t('title')}</SectionTitle>
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
