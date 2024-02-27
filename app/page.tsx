// Components
import Image from "next/image";
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
    <section className="flex items-center mt-8">
      <Image
        src="/images/prism.png"
        alt="Nicolas Milliard"
        width={512}
        height={512}
      />
      <div>
        <MainTitle>Nicolas Milliard</MainTitle>
        <Title isWidest={true}>Front-End Developer</Title>
        <Paragraph>
          I&apos;m an 8+ years experienced Front-End Developer.
        </Paragraph>
        <Paragraph>
          I usually work with React JS and React Native in TypeScript.
        </Paragraph>
      </div>
    </section>
  );
};

export default Home;
