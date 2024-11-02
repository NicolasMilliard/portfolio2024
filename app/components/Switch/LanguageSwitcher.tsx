'use client';

import { useChangeLocale, useCurrentLocale } from '@app/locales/client';
import Image from 'next/image';

const LanguageSwitcher = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div className="group relative z-50 inline-block">
      <div className="fixed right-0 top-2/4 z-20 rounded-l-3xl bg-white px-2 py-4 md:right-8">
        <div className="flex flex-col gap-4">
          <ButtonFlag
            lang="fr"
            currentLang={locale}
            setLang={changeLocale}
            src="/images/languages/france_flag.svg"
            alt="FR"
          />
          <ButtonFlag
            lang="en"
            currentLang={locale}
            setLang={changeLocale}
            src="/images/languages/usa_flag.svg"
            alt="EN"
          />
        </div>
      </div>
      <div className="fixed inset-0 left-auto right-0 top-2/4 z-10 h-28 w-12 rounded-3xl bg-gradient-to-br from-ultramarine to-congo_pink blur-lg md:right-8"></div>
    </div>
  );
};

type Lang = 'fr' | 'en';

type ButtonFlagProps = {
  lang: Lang;
  currentLang: Lang;
  setLang: (lang: Lang) => void;
  src: string;
  alt: string;
};

const ButtonFlag = ({
  lang,
  currentLang,
  src,
  alt,
  setLang,
}: ButtonFlagProps) => {
  return (
    <button
      className={`hover:opacity-100 hover:drop-shadow-lg ${lang === currentLang ? 'opacity-100 drop-shadow-lg' : 'opacity-40'}`}
      onClick={() => setLang(lang)}
    >
      <Image src={src} alt={alt} width={32} height={32} />
    </button>
  );
};

export default LanguageSwitcher;
