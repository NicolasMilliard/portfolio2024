// Components
import { PrimaryButton } from "@app/components/Button";
import { GradientParagraph, Paragraph } from "@app/components/Text";
import { SectionTitle, SubTitle } from "@components/Title";
import Image from "next/image";
// Data
import { case_studies } from "@app/data/case_studies";

const CaseStudies = () => {
  return (
    <section className="relative my-20">
      <SectionTitle>Case Studies</SectionTitle>
      <div className="flex">
        <div>
          {case_studies.map((case_study, index) => (
            <div
              key={case_study.id}
              className={`my-16 ${index % 2 === 1 ? "flex gap-20" : "flex gap-20"}`}
            >
              {index % 2 === 1 && (
                <Image
                  src="/images/cube.png"
                  alt="cube"
                  width={212}
                  height={128}
                  quality={100}
                />
              )}
              <div>
                <SubTitle>{case_study.title}</SubTitle>
                <div className="my-4">
                  <GradientParagraph>{case_study.tech_stack}</GradientParagraph>
                </div>
                <Paragraph>{case_study.description}</Paragraph>
                <div className="mt-6">
                  <PrimaryButton>View the case study</PrimaryButton>
                </div>
              </div>
              {index % 2 === 0 && (
                <Image
                  src="/images/cube.png"
                  alt="cube"
                  width={212}
                  height={128}
                  quality={100}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
