'use client';

import { useScopedI18n } from '@app/locales/client';
import { syne } from '@app/utils/fonts';
import { usePathname } from 'next/navigation';
// Components
import MenuLink from './MenuLink';

const Menu = ({ className = 'text-black' }: { className?: string }) => {
  const pathName = usePathname();
  const tMenu = useScopedI18n('Menu');

  return (
    <menu
      className={`${syne.className} flex items-center justify-center gap-4 md:justify-end md:gap-10 ${className}`}
    >
      <li>
        <MenuLink path={pathName} target="/" textLink={tMenu('home')} />
      </li>
      <li>
        <MenuLink
          path={pathName}
          target="/case-studies"
          textLink={tMenu('caseStudies')}
        />
      </li>
      <li>
        <MenuLink path={pathName} target="/resume" textLink={tMenu('resume')} />
      </li>
      <li>
        <MenuLink
          path={pathName}
          target={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          textLink={tMenu('contact')}
        />
      </li>
    </menu>
  );
};

export default Menu;
