// Components
import { Paragraph } from "@components/Text";
import { MainTitle, Title } from "@components/Title";
import Image from "next/image";

const Introduction = () => {
  return (
    <section className="mt-8 flex items-center">
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

export default Introduction;
