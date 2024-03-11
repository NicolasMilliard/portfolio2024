"use client";

import { useEffect, useState } from "react";
// Components
import Logo from "@components/Navbar/Logo";
import Menu from "@components/Navbar/Menu";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [dynamicBorder, setDynamicBorder] = useState<string>("md:rounded-3xl");
  const [dynamicHeight, setDynamicHeight] = useState<string>("h-32");

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (scrollPosition > 40) {
      setDynamicBorder("md:rounded-b-3xl");
      setDynamicHeight("h-24");
    } else {
      setDynamicBorder("md:rounded-3xl");
      setDynamicHeight("h-32");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className="sticky top-0 z-50">
      <div
        className={`absolute z-20 flex ${dynamicHeight} w-full items-center justify-between bg-white px-4 duration-200 md:px-15 ${dynamicBorder}`}
      >
        <Logo />
        <Menu />
      </div>
      <div
        className={`absolute left-0 top-0 z-10 ${dynamicHeight} w-full bg-gradient-to-r from-ultramarine to-congo_pink blur-lg md:rounded-3xl`}
      />
    </nav>
  );
};

export default Navbar;
