import { getScopedI18n } from '@app/locales/server';
// Components
import { githubLogo } from '@components/Icons';
import { PrimaryLink, SocialLink } from '@components/Link';
import { GradientParagraph, Paragraph } from '@components/Text';
import { MainTitle, SectionTitle, Title } from '@components/Title';
import Image from 'next/image';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kopo | Nicolas Milliard',
  description: 'Kopo case study.',
};

const Kopo = async () => {
  const tKopo = await getScopedI18n('CaseStudies.Kopo');

  return (
    <>
      <section className="mb-32 flex flex-col items-center gap-10">
        <MainTitle>{tKopo('title')}</MainTitle>
        <Title>{tKopo('slogan')}</Title>
        <div className="flex items-center gap-8">
          <PrimaryLink href="https://kopo.vercel.app/" target="_blank">
            {tKopo('visitProject')}
          </PrimaryLink>
          <SocialLink
            href="https://github.com/NicolasMilliard/kopo"
            target="_blank"
            icon={githubLogo}
          >
            {tKopo('repository')}
          </SocialLink>
        </div>
        <Image
          src="/images/case-studies/kopo/kopo-dapp.webp"
          alt="Kopo dApp - Nicolas Milliard"
          width={640}
          height={360}
          quality={100}
          className="rounded-3xl shadow-lg"
        />
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">
          {tKopo('Introduction.title')}
        </SectionTitle>
        <Paragraph>{tKopo('Introduction.content.0.paragraph')}</Paragraph>
        <Paragraph>{tKopo('Introduction.content.1.paragraph')}</Paragraph>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">
          {tKopo('ProjectContext.title')}
        </SectionTitle>
        <Paragraph>{tKopo('ProjectContext.content.0.paragraph')}</Paragraph>
        <Image
          src="/images/case-studies/kopo/kopo-esc-workflow.webp"
          alt="Kopo dApp - Nicolas Milliard"
          width={640}
          height={360}
          quality={100}
          className="rounded-3xl shadow-lg"
        />
        <Paragraph>{tKopo('ProjectContext.content.1.paragraph')}</Paragraph>
        <Paragraph>{tKopo('ProjectContext.content.2.paragraph')}</Paragraph>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">
          {tKopo('Presentation.title')}
        </SectionTitle>
        <Paragraph>{tKopo('Presentation.content.0.paragraph')}</Paragraph>
        <Paragraph>{tKopo('Presentation.content.1.paragraph')}</Paragraph>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">
          {tKopo('TechnologiesUsed.title')}
        </SectionTitle>
        <Paragraph>{tKopo('TechnologiesUsed.content.0.paragraph')}</Paragraph>
        <Paragraph>{tKopo('TechnologiesUsed.content.1.paragraph')}</Paragraph>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">
          {tKopo('Features.title')}
        </SectionTitle>
        <Paragraph>{tKopo('Features.content.0.paragraph')}</Paragraph>
        <Image
          src="/images/case-studies/kopo/kopo-dapp-ux.webp"
          alt="Kopo dApp - Nicolas Milliard"
          width={640}
          height={175}
          quality={100}
          className="rounded-3xl shadow-lg"
        />
        <GradientParagraph className="lg:w-200">Front-end</GradientParagraph>
        <Paragraph>{tKopo('Features.content.1.paragraph')}</Paragraph>
        <Paragraph>{tKopo('Features.content.2.paragraph')}</Paragraph>
        <Paragraph>{tKopo('Features.content.3.paragraph')}</Paragraph>
        <GradientParagraph className="lg:w-200">Blockchain</GradientParagraph>
        <Paragraph className="lg:w-200">
          {tKopo('Features.content.4.paragraph')}
        </Paragraph>
        <ul className="col flex max-w-200 list-disc flex-col gap-2">
          <li className="ml-4">
            <Paragraph>{tKopo('Features.content.5.paragraph')}</Paragraph>
          </li>
          <li className="ml-4">
            <Paragraph>{tKopo('Features.content.6.paragraph')}</Paragraph>
          </li>
          <li className="ml-4">
            <Paragraph>{tKopo('Features.content.7.paragraph')}</Paragraph>
          </li>
          <li className="ml-4">
            <Paragraph>{tKopo('Features.content.8.paragraph')}</Paragraph>
          </li>
        </ul>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">
          {tKopo('Conclusion.title')}
        </SectionTitle>
        <Paragraph>{tKopo('Conclusion.paragraph')}</Paragraph>
      </section>
    </>
  );
};

export default Kopo;
