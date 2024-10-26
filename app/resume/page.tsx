// Data
import { experiences } from '@app/data/experiences';
// Components
import { List, ListItem } from '@app/components/List';
import { Quote, Sidebar } from '@app/containers/Resume';
import { Paragraph } from '@components/Text';
import { GradientTitle, MainTitle, SubTitle, Title } from '@components/Title';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Front-End Developer | Nicolas Milliard',
  description: 'My resume',
};

const Resume = () => {
  return (
    <div className="flex flex-col lg:px-20 xl:px-40">
      <div className="flex flex-col md:flex-row md:gap-10">
        <Sidebar />
        <div>
          <div className="mb-10 hidden gap-4 md:flex md:flex-col">
            <MainTitle>Nicolas Milliard</MainTitle>
            <Title isWidest={true}>Front-End Developer</Title>
          </div>
          <Quote />
          <section>
            <SubTitle>Work Experience</SubTitle>
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
        </div>
      </div>
    </div>
  );
};

export default Resume;
