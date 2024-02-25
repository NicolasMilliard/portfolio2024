// Components
import { Paragraph } from "./components/Text";
import { MainTitle, Title } from "./components/Title";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Front-End Developer | Nicolas Milliard",
  description: "Welcome to my portfolio!",
};

const Home = () => {
  return (
    <main>
      <MainTitle>Nicolas Milliard</MainTitle>
      <Title isWidest={true}>Front-End Developer</Title>
      <section className="mt-8">
        <Paragraph>
          I&apos;m an 8+ years experienced Front-End Developer.
        </Paragraph>
        <Paragraph>
          I usually work with React JS and React Native in TypeScript.
        </Paragraph>
      </section>
    </main>
  );
};

export default Home;
