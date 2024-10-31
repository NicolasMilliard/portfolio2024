'use client';

import { useCurrentLocale } from '@app/locales/client';
// Components
import { Paragraph } from '@components/Text';
import { GradientTitle } from '@components/Title';
// Data
import { ENGLISH_EXPERIENCES, FRENCH_EXPERIENCES } from '@data/experiences';

const ExperienceDetails = ({ activeTab }: { activeTab: string }) => {
  const locale = useCurrentLocale();

  const experiences =
    locale === 'fr' ? FRENCH_EXPERIENCES : ENGLISH_EXPERIENCES;

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
