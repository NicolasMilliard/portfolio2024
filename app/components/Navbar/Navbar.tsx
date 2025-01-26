'use client';

import { useEffect, useState } from 'react';
// Components
import Logo from '@components/Navbar/Logo/Logo';
import Menu from '@components/Navbar/Menu/Menu';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [dynamicBorder, setDynamicBorder] = useState<string>('md:rounded-3xl');

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (scrollPosition > 40) {
      setDynamicBorder('md:rounded-b-3xl');
    } else {
      setDynamicBorder('md:rounded-3xl');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div
        className={`relative z-20 flex h-32 w-full items-center justify-center gap-16 bg-white px-8 duration-200 md:px-15 lg:justify-between lg:px-20 xl:px-60 ${dynamicBorder}`}
      >
        <Logo />
        <Menu />
      </div>
      <div
        className={`absolute left-0 top-0 z-10 h-32 w-full bg-gradient-to-r from-ultramarine to-congo_pink blur-lg md:rounded-3xl`}
      />
    </nav>
  );
};

export default Navbar;
