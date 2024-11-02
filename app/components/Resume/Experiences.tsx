'use client';

import { useCurrentLocale, useScopedI18n } from '@app/locales/client';
// Data
import { ENGLISH_EXPERIENCES, FRENCH_EXPERIENCES } from '@data/experiences';
// Components
import { List, ListItem } from '@components/List';
import { Paragraph } from '@components/Text';
import { GradientTitle, SubTitle } from '@components/Title';

const Experiences = () => {
  const locale = useCurrentLocale();
  const tResume = useScopedI18n('Resume.Introduction');

  const experiences =
    locale === 'fr' ? FRENCH_EXPERIENCES : ENGLISH_EXPERIENCES;

  return (
    <section>
      <SubTitle>{tResume('workExperience')}</SubTitle>
      {experiences.map((experience) => (
        <div key={experience.id} className="mb-10">
          <>
            <div className="mb-4 flex flex-col items-start justify-between">
              <div className="my-4 flex flex-col gap-2 md:flex-row md:items-center">
                <SubTitle>{experience.company}</SubTitle>
                <div className="hidden h-full w-0.5 rounded bg-black md:block">
                  &nbsp;
                </div>
                <GradientTitle>{experience.job_title}</GradientTitle>
              </div>
              <p>
                {experience.start_date} - {experience.end_date} |{' '}
                {experience.location}
              </p>
            </div>
            <List className="list-disc">
              {experience.tasks.map((task, index) => (
                <ListItem key={index} className="ml-4">
                  <Paragraph>{task}</Paragraph>
                </ListItem>
              ))}
            </List>
          </>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
