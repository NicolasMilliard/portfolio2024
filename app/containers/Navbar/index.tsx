"use client";

import { useEffect, useState } from "react";
// Components
import Logo from "@components/Navbar/Logo";
import Menu from "@components/Navbar/Menu";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [dynamicBorder, setDynamicBorder] = useState<string>("rounded-3xl");
  const [dynamicHeight, setDynamicHeight] = useState<string>("h-32");

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (scrollPosition > 40) {
      setDynamicBorder("rounded-b-3xl");
      setDynamicHeight("h-24");
    } else {
      setDynamicBorder("rounded-3xl");
      setDynamicHeight("h-32");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className="sticky top-0 z-50">
      <div
        className={`absolute z-20 flex ${dynamicHeight} px-15 w-full items-center justify-between bg-white py-10 duration-200 ${dynamicBorder}`}
      >
        <Logo />
        <Menu />
      </div>
      <div
        className={`absolute left-0 top-0 z-10 ${dynamicHeight} px-15 w-full rounded-3xl bg-gradient-to-r from-ultramarine to-congo_pink py-10 blur-lg`}
      />
    </nav>
  );
};

export default Navbar;
