// Components
import { PrimaryLink } from '@app/components/Link';
import { PrimaryButton } from '@components/Button';
import { GradientParagraph, Paragraph } from '@components/Text';
import { SectionTitle, SubTitle } from '@components/Title';
import CaseStudyImage from './CaseStudyImage';
// Data
import { case_studies } from '@data/case_studies';

const CaseStudies = () => {
  return (
    <section className="mb-32 flex flex-col items-center justify-center md:mx-20">
      <SectionTitle>Case Studies</SectionTitle>
      {case_studies.map(
        ({ id, link, title, tech_stack, description }, index) => {
          const isOdd = index % 2 === 1;

          return (
            <div key={id} className="my-16 flex items-center gap-40">
              {isOdd && <CaseStudyImage index={index} title={title} />}
              <div>
                <SubTitle>{title}</SubTitle>
                <div className="my-4">
                  <GradientParagraph>{tech_stack}</GradientParagraph>
                </div>
                <div className="max-w-128">
                  <Paragraph>{description}</Paragraph>
                </div>
                <div className="mt-8">
                  {link ? (
                    <PrimaryLink href={`case-studies/${link}`} target="_self">
                      View the case study
                    </PrimaryLink>
                  ) : (
                    <PrimaryButton disabled={link === null}>
                      View the case study
                    </PrimaryButton>
                  )}
                </div>
              </div>
              {!isOdd && <CaseStudyImage index={index} title={title} />}
            </div>
          );
        },
      )}
    </section>
  );
};

export default CaseStudies;
