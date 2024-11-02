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
  title: 'SmartVote | Nicolas Milliard',
  description: 'SmartVote case study.',
};

const SmartVote = async () => {
  const tSmartVote = await getScopedI18n('CaseStudies.SmartVote');

  return (
    <>
      <section className="mb-32 flex flex-col items-center gap-10">
        <MainTitle>{tSmartVote('title')}</MainTitle>
        <Title>{tSmartVote('slogan')}</Title>
        <div className="flex items-center gap-8">
          <PrimaryLink href="https://my-smartvote.vercel.app/" target="_blank">
            {tSmartVote('visitProject')}
          </PrimaryLink>
          <SocialLink
            href="https://github.com/NicolasMilliard/SmartVote"
            target="_blank"
            icon={githubLogo}
          >
            {tSmartVote('repository')}
          </SocialLink>
        </div>
        <Image
          src="/images/case-studies/smartvote/smartvote-dapp.webp"
          alt="SmartVote dApp - Nicolas Milliard"
          width={640}
          height={360}
          quality={100}
          className="rounded-3xl shadow-lg"
        />
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">
          {tSmartVote('Introduction.title')}
        </SectionTitle>
        <Paragraph>{tSmartVote('Introduction.content.0.paragraph')}</Paragraph>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">
          {tSmartVote('TechnologiesUsed.title')}
        </SectionTitle>
        <Paragraph>
          {tSmartVote('TechnologiesUsed.content.0.paragraph')}
        </Paragraph>
        <Paragraph>
          {tSmartVote('TechnologiesUsed.content.1.paragraph')}
        </Paragraph>
        <Paragraph>
          {tSmartVote('TechnologiesUsed.content.2.paragraph')}
        </Paragraph>
        <Image
          src="/images/case-studies/smartvote/smartvote-eip-1167.webp"
          alt="SmartVote dApp - Nicolas Milliard"
          width={640}
          height={175}
          quality={100}
          className="rounded-3xl py-2 shadow-lg"
        />
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">
          {tSmartVote('Features.title')}
        </SectionTitle>
        <GradientParagraph className="lg:w-200">Front-end</GradientParagraph>
        <Paragraph>{tSmartVote('Features.content.0.paragraph')}</Paragraph>
        <GradientParagraph className="lg:w-200">Blockchain</GradientParagraph>
        <Paragraph className="lg:w-200">
          {tSmartVote('Features.content.1.paragraph')}
        </Paragraph>
        <ul className="col flex max-w-200 list-disc flex-col gap-2">
          <li className="ml-4">
            <Paragraph>{tSmartVote('Features.content.2.paragraph')}</Paragraph>
          </li>
          <li className="ml-4">
            <Paragraph>{tSmartVote('Features.content.3.paragraph')}</Paragraph>
          </li>
          <li className="ml-4">
            <Paragraph>{tSmartVote('Features.content.4.paragraph')}</Paragraph>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SmartVote;
