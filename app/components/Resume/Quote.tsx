import { getScopedI18n } from '@app/locales/server';
// Components
import { Paragraph } from '@components/Text';

const Quote = async () => {
  const tResume = await getScopedI18n('Resume.Quote');

  return (
    <section className="mb-10 flex flex-col gap-4">
      <Paragraph>{tResume('experience')}</Paragraph>
      <Paragraph>{tResume('tools')}</Paragraph>
      <Paragraph>{tResume('personality')}</Paragraph>
    </section>
  );
};

export default Quote;
