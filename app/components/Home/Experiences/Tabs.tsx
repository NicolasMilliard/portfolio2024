'use client';

import { useCurrentLocale } from '@app/locales/client';
// Data
import { ENGLISH_EXPERIENCES, FRENCH_EXPERIENCES } from '@data/experiences';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  const locale = useCurrentLocale();

  const experiences =
    locale === 'fr' ? FRENCH_EXPERIENCES : ENGLISH_EXPERIENCES;

  return (
    <ul className="flex gap-4 overflow-x-scroll rounded-lg px-4 py-2 sm:overflow-x-visible lg:flex-col lg:gap-0">
      {experiences?.map((experience) => (
        <li key={experience.id}>
          <button
            className={`border-b-2 border-ultramarine p-1 text-ultramarine duration-200 lg:border-b-0 lg:border-l-2 lg:py-2 lg:pl-2 ${activeTab === experience.id ? 'opacity-100' : 'opacity-20 hover:border-l-congo_pink hover:text-congo_pink hover:opacity-80'}`}
            onClick={() => onTabChange(experience.id)}
          >
            {experience.company}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
