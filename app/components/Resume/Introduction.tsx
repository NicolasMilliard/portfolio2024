'use client';

import { useScopedI18n } from '@app/locales/client';
// Components
import { MainTitle, Title } from '@components/Title';

const Introduction = () => {
  const tResume = useScopedI18n('Resume.Introduction');

  return (
    <div className="mb-10 hidden gap-4 md:flex md:flex-col">
      <MainTitle>Nicolas Milliard</MainTitle>
      <Title isWidest={true}>{tResume('title')}</Title>
    </div>
  );
};

export default Introduction;
