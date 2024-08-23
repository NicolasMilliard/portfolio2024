// Components
import { List, ListItem } from "@app/components/List";
import { Paragraph } from "@components/Text";
import { GradientTitle, MainTitle, Title } from "@components/Title";

const Resume = () => {
  return (
    <>
      <MainTitle>Nicolas Milliard</MainTitle>
      <Title>Front-End Developer</Title>
      <section>
        <GradientTitle>Education</GradientTitle>
        <Paragraph>
          BSC Degree Computer Science<br />
          UFR Ingémedia<br />
          Setp. 2015 - June 2016
        </Paragraph>
        <Paragraph>
          Associate&apos;s Degree Computer Science<br />
          IUT MMI<br />
          Setp. 2013 - June 2015
        </Paragraph>
      </section>
      <section>
        <GradientTitle>Skills</GradientTitle>
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
          <ListItem>Truffle</ListItem>
          <ListItem>Viewm</ListItem>
          <ListItem>Ethers.js</ListItem>
        </List>
      </section>
      <section>
        <GradientTitle>Certifications</GradientTitle>
        <Paragraph>
          Blockchain Developer<br />
          Alyra School<br />
          2022
        </Paragraph>
        <Paragraph>
          React Native<br />
          OpenClassrooms<br />
          2021
        </Paragraph>
      </section>
      <section>
        <GradientTitle>Languages</GradientTitle>
        <Paragraph>
          French (native)
        </Paragraph>
        <Paragraph>
          English (fluent)
        </Paragraph>
      </section>
    </>
  );
};

export default Resume;
