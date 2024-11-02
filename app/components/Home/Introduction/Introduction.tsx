import { getScopedI18n } from '@app/locales/server';
// Components
import { Paragraph } from '@components/Text';
import { MainTitle, Title } from '@components/Title';
import Image from 'next/image';

const Introduction = async () => {
  const tIntroduction = await getScopedI18n('Homepage.Introduction');

  return (
    <section className="mb-32 flex items-center justify-center gap-20 lg:px-20 xl:px-40">
      <div className="hidden lg:block">
        <Image
          src={`/images/assets/prism.png`}
          alt="Nicolas Milliard"
          width={360}
          height={335}
          quality={100}
          className="mb-20 mr-40 mt-10"
        />
      </div>
      <div>
        <MainTitle>Nicolas Milliard</MainTitle>
        <div className="my-2">
          <Title isWidest={true}>{tIntroduction('title')}</Title>
        </div>
        <Paragraph>{tIntroduction('experience')}</Paragraph>
        <Paragraph>{tIntroduction('tools')}</Paragraph>
      </div>
    </section>
  );
};

export default Introduction;
