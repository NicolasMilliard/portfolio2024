import { List, ListItem } from "@app/components/List";
import { Paragraph } from "@app/components/Text";
import { GradientTitle } from "@app/components/Title";

const Sidebar = () => {
  return (
    <div className="mb-10 hidden gap-6 xs:flex xs:flex-col lg:max-w-52">
      <div className="flex flex-col gap-8 sm:flex-row md:flex-col md:gap-10">
        <section>
          <GradientTitle>Education</GradientTitle>
          <div className="flex flex-col gap-2">
            <Paragraph>
              <span className="font-normal">BSC Degree Computer Science</span>
              <br />
              UFR Ingémedia
              <br />
              Setp. 2015 - June 2016
            </Paragraph>
            <Paragraph>
              <span className="font-normal">
                Associate&apos;s Degree Computer Science
              </span>
              <br />
              IUT MMI
              <br />
              Setp. 2013 - June 2015
            </Paragraph>
          </div>
        </section>
        <section>
          <GradientTitle>Skills</GradientTitle>
          <div className="flex gap-4 md:flex-col md:gap-0">
            <List>
              <ListItem>JavaScript (ES6)</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>HTML 5</ListItem>
              <ListItem>CSS 3</ListItem>
              <ListItem>Solidity</ListItem>
            </List>
            <List>
              <ListItem>React JS</ListItem>
              <ListItem>React Native</ListItem>
              <ListItem>Redux</ListItem>
              <ListItem>Recoil JS</ListItem>
              <ListItem>Jest</ListItem>
            </List>
            <List>
              <ListItem>Hardhat</ListItem>
              <ListItem>Wagmi</ListItem>
              <ListItem>Ethers.js</ListItem>
            </List>
          </div>
        </section>
      </div>
      <div className="flex flex-row gap-4 md:flex-col md:gap-6">
        <section>
          <GradientTitle>Certifications</GradientTitle>
          <div className="flex flex-col gap-2">
            <Paragraph>
              <span className="font-normal">Blockchain Developer</span>
              <br />
              Alyra School
              <br />
              2022
            </Paragraph>
            <Paragraph>
              <span className="font-normal">React Native</span>
              <br />
              OpenClassrooms
              <br />
              2021
            </Paragraph>
          </div>
        </section>
        <section>
          <GradientTitle>Languages</GradientTitle>
          <Paragraph>French (native)</Paragraph>
          <Paragraph>English (fluent)</Paragraph>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
