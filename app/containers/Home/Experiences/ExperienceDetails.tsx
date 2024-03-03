// Components
import { Paragraph } from "@components/Text";
import { GradientTitle } from "@components/Title";
// Data
import { experiences } from "@app/data/experiences";
// Types
import { ExperiencesList } from "@app/types/experiences";

const ExperienceDetails = ({ activeTab }: { activeTab: ExperiencesList }) => {
  return (
    <div>
      {experiences.map((experience) => (
        <div key={experience.id}>
          {activeTab === experience.company && (
            <>
              <div className="flex items-center justify-between gap-5">
                <div className="mb-4">
                  <GradientTitle>{experience.job_title}</GradientTitle>
                </div>
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
