// Components
import { PrimaryButton } from "@app/components/Button";
import { GradientParagraph, Paragraph } from "@app/components/Text";
import { SectionTitle, SubTitle } from "@components/Title";
// Data
import { case_studies } from "@app/data/case_studies";

const CaseStudies = () => {
  return (
    <section className="my-20">
      <SectionTitle>Case Studies</SectionTitle>
      <div>
        {case_studies.map((case_study) => (
          <div key={case_study.id} className="my-16">
            <>
              <SubTitle>{case_study.title}</SubTitle>
              <div className="my-4">
                <GradientParagraph>{case_study.tech_stack}</GradientParagraph>
              </div>
              <Paragraph>{case_study.description}</Paragraph>
              <div className="mt-6">
                <PrimaryButton>View the case study</PrimaryButton>
              </div>
            </>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
