// Components
import { PrimaryLink, SocialLink } from "@app/components/Link";
import { Paragraph } from "@app/components/Text";
import {
  MainTitle,
  SectionTitle,
  SubTitle,
  Title,
} from "@app/components/Title";
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
      <section>
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
      </section>
      <section>
        <SectionTitle>Introduction</SectionTitle>
        <SubTitle>Presentation of the Kopo project</SubTitle>
        <Paragraph>
          Kopo is an innovative dApp that allows individuals to simplify the
          process of applying for Energy Saving Certificates (ESC). With Kopo,
          beneficiaries can follow in real time the progress of their
          application from the platform. The particularity of Kopo is that all
          the files created are stored on the blockchain, thus offering
          transparency and total traceability.
        </Paragraph>
        <Paragraph>
          Moreover, since the blockchain is unforgeable and immutable, records
          cannot be altered or deleted. The dApp has been developed to be easy
          to use, secure and transparent to provide an optimal user experience.
        </Paragraph>
        <SubTitle>Project context: ESC in France</SubTitle>
        <Paragraph>
          In France, the Energy Saving Certificates (ESC) have been set up to
          help individuals finance their energy renovation work. However, the
          process to obtain these aids is often long and opaque, with many backs
          and forth between the different stakeholders, which can take more than
          6 months.
        </Paragraph>
        <Paragraph>
          In addition, there has been an increase in the number of cases of
          fraud, which has led to a strengthening of control and security
          measures, with an anti-fraud budget that has risen from 0.5 million
          euros to 7 million euros in just three years. Yet ESC are essential to
          achieving Europe&apos;s 2050 greenhouse gas emission reduction
          targets. It is important to note that the slightest error or
          irregularity can invalidate a folder, which can discourage individuals
          from undertaking energy renovation work.
        </Paragraph>
        <Paragraph>
          Kopo was developed in this context to simplify and secure the ESC
          application process and thus facilitate access to grands for
          individuals.
        </Paragraph>
        <SubTitle>Objective of the case study</SubTitle>
        <Paragraph>
          In France, the Energy Saving Certificates (ESC) have been set up to
          help individuals finance their energy renovation work. However, the
          process to obtain these aids is often long and opaque, with many backs
          and forth between the different stakeholders, which can take more than
          6 months.
        </Paragraph>
        <Paragraph>
          In addition, there has been an increase in the number of cases of
          fraud, which has led to a strengthening of control and security
          measures, with an anti-fraud budget that has risen from 0.5 million
          euros to 7 million euros in just three years. Yet ESC are essential to
          achieving Europe&apos;s 2050 greenhouse gas emission reduction
          targets. It is important to note that the slightest error or
          irregularity can invalidate a folder, which can discourage individuals
          from undertaking energy renovation work.
        </Paragraph>
        <Paragraph>
          Kopo was developed in this context to simplify and secure the ESC
          application process and thus facilitate access to grands for
          individuals.
        </Paragraph>
      </section>
    </>
  );
};

export default Kopo;
