// Components
import { Paragraph } from '@components/Text';
import { GradientTitle } from '@components/Title';
// Data
import { experiences } from '@app/data/experiences';

const ExperienceDetails = ({ activeTab }: { activeTab: string }) => {
  return (
    <div className="w-full">
      {experiences.map((experience) => (
        <div key={experience.id}>
          {activeTab === experience.id && (
            <>
              <div className="mb-4 flex flex-col items-start justify-between gap-5 md:flex-row">
                <GradientTitle>{experience.job_title}</GradientTitle>
                <p>
                  {experience.start_date} - {experience.end_date}
                </p>
              </div>
              <ul className="flex list-disc flex-col gap-2">
                {experience.tasks.map((task, index) => (
                  <li key={index} className="ml-4">
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
