// Types
import { ExperiencesList } from '@app/types/experiences';

interface TabsProps {
  activeTab: ExperiencesList;
  onTabChange: (tab: ExperiencesList) => void;
}

const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  return (
    <ul className="flex gap-4 overflow-x-scroll rounded-lg px-4 py-2 sm:overflow-x-visible lg:flex-col lg:gap-0">
      {Object.values(ExperiencesList).map((experience) => (
        <li key={experience}>
          <button
            className={`border-b-2 border-ultramarine p-1 text-ultramarine duration-200 lg:border-b-0 lg:border-l-2 lg:py-2 lg:pl-2 ${activeTab === experience ? 'opacity-100' : 'opacity-20 hover:border-l-congo_pink hover:text-congo_pink hover:opacity-80'}`}
            onClick={() => onTabChange(experience)}
          >
            {experience}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
