'use client';

import { syne } from '@utils/fonts';
import { usePathname } from 'next/navigation';
// Components
import MenuLink from './MenuLink';

const Menu = ({ isTextWhite }: { isTextWhite: boolean }) => {
  const pathName = usePathname();

  return (
    <menu
      className={`${syne.className} flex items-center justify-center gap-4 md:justify-end md:gap-10 ${isTextWhite ? 'text-white' : 'text-black'}`}
    >
      <li>
        <MenuLink path={pathName} target="/" textLink="Home" />
      </li>
      <li>
        <MenuLink
          path={pathName}
          target="/case-studies"
          textLink="Case Studies"
        />
      </li>
      <li>
        <MenuLink path={pathName} target="/resume" textLink="Resume" />
      </li>
      <li>
        <MenuLink
          path={pathName}
          target="mailto:contact@nicolasmilliard.fr"
          textLink="Contact"
        />
      </li>
    </menu>
  );
};

export default Menu;
