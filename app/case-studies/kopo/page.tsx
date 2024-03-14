// Components
import Image from "next/image";
import { PrimaryLink, SocialLink } from "@app/components/Link";
import { Paragraph } from "@app/components/Text";
import { MainTitle, SectionTitle, Title } from "@app/components/Title";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kopo | Nicolas Milliard",
  description: "Kopo case study.",
};

const Kopo = () => {
  const githubIcon = "/images/social/github-logo.svg";

  return (
    <>
      <section className="mb-32 flex flex-col items-center gap-10">
        <MainTitle>Kopo</MainTitle>
        <Title>Your energy renovation made easy</Title>
        <div className="flex items-center gap-8">
          <PrimaryLink href="" target="_blank">
            Visit project
          </PrimaryLink>
          <SocialLink href="" target="_blank" icon={githubIcon}>
            Repository
          </SocialLink>
        </div>
        <Image
          src="/images/case-studies/kopo/kopo-dapp.webp"
          alt="Kopo dApp - Nicolas Milliard"
          width={1920}
          height={1080}
        />
      </section>
      <section className="mb-20 flex flex-col gap-6">
        <SectionTitle>Introduction</SectionTitle>
        <Paragraph>
          Kopo is a groundbreaking dApp simplifying Energy Saving Certificates
          (ESC) application processes, providing real-time tracking and storing
          all files securely on the blockchain for transparency.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col gap-6">
        <SectionTitle>Project Context</SectionTitle>
        <Paragraph>
          In France, ESC acquisition is complex and prone to fraud, with a
          significant impact on achieving emission reduction targets. Kopo
          addresses these challenges by streamlining the application process,
          ensuring security, and facilitating access to grants.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col gap-6">
        <SectionTitle>Presentation of Kopo</SectionTitle>
        <Paragraph>
          Kopo is a decentralized platform utilizing blockchain for transparent
          ESC application management. Users create folders, submit requests, and
          track progress securely. Smart contracts ensure immutable
          record-keeping.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col gap-6">
        <SectionTitle>Technologies Used</SectionTitle>
        <Paragraph>
          Kopo utilizes Next.js, Ethers.js, and TailwindCSS for frontend
          development, and Hardhat, OpenZeppelin, and Chai for backend smart
          contract development. The team employed a range of tools for seamless
          integration and efficient operation.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col gap-6">
        <SectionTitle>Team</SectionTitle>
        <Paragraph>
          The project was executed by a multidisciplinary team comprising
          developers, blockchain consultants, and DeFi experts. Their
          collaboration ensured the successful implementation of Kopo's
          innovative solution.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col gap-6">
        <SectionTitle>Features</SectionTitle>
        <Paragraph>
          Kopo offers intuitive user paths for beneficiaries and obligated
          parties, streamlining the ESC application process. Smart contracts
          manage document validation, ensuring security and authenticity.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col gap-6">
        <SectionTitle>Conclusion</SectionTitle>
        <Paragraph>
          Kopo revolutionizes ESC management, providing a secure, transparent,
          and efficient solution. Its use of cutting-edge technologies and smart
          contracts minimizes transaction costs while maximizing functionality,
          ultimately benefiting both users and obligated parties.
        </Paragraph>
      </section>
    </>
  );
};

export default Kopo;
