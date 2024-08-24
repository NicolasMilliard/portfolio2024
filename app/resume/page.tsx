// Data
import { experiences } from "@app/data/experiences";
// Components
import { List, ListItem } from "@app/components/List";
import { Quote, Sidebar } from "@app/containers/Resume";
import { Paragraph } from "@components/Text";
import { GradientTitle, MainTitle, SubTitle, Title } from "@components/Title";

const newestToOldest = experiences.reverse();

const Resume = () => {
  return (
    <>
      <div className="mb-10 flex flex-col gap-4">
        <MainTitle>Nicolas Milliard</MainTitle>
        <Title isWidest={true}>Front-End Developer</Title>
      </div>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div>
          <Quote />
          <section>
            <SubTitle>Work Experience</SubTitle>
            <div>
              {newestToOldest.map((experience) => (
                <div key={experience.id}>
                  <>
                    <div className="mb-4 flex flex-col items-start justify-between gap-5">
                      <SubTitle>{experience.company}</SubTitle>
                      <GradientTitle>{experience.job_title}</GradientTitle>
                      <p>
                        {experience.start_date} - {experience.end_date} |{" "}
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Resume;
