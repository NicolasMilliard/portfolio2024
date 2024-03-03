// Types
import { ExperiencesList } from "@app/types/experiences";

interface TabsProps {
  activeTab: ExperiencesList;
  onTabChange: (tab: ExperiencesList) => void;
}

const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  return (
    <ul>
      {Object.values(ExperiencesList).map((experience) => (
        <li key={experience}>
          <button
            className={`border-l-2 border-l-ultramarine py-2 pl-2 text-ultramarine ${activeTab === experience ? "opacity-100" : "opacity-20 hover:opacity-60"}`}
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
