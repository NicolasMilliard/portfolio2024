// Components
import { Paragraph } from "@components/Text";
import { GradientTitle } from "@components/Title";
// Data
import { experiences } from "@app/data/experiences";
// Types
import { ExperiencesList } from "@app/types/experiences";

const ExperienceDetails = ({ activeTab }: { activeTab: ExperiencesList }) => {
  return (
    <div className="w-full">
      {experiences.map((experience) => (
        <div key={experience.id}>
          {activeTab === experience.company && (
            <>
              <div className="mb-4 flex flex-col items-start justify-between gap-5 md:flex-row">
                <GradientTitle>{experience.job_title}</GradientTitle>
                <p>
                  {experience.start_date} - {experience.end_date}
                </p>
              </div>
              <ul className="list-disc">
                {experience.tasks.map((task, index) => (
                  <li key={index}>
                    <Paragraph>{task}</Paragraph>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceDetails;
