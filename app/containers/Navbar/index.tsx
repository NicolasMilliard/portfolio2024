"use client";

import { useEffect, useState } from "react";
// Components
import Logo from "@components/Navbar/Logo";
import Menu from "@components/Navbar/Menu";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [dynamicBorder, setDynamicBorder] = useState<string>("rounded-3xl");
  const [dynamicHeight, setDynamicHeight] = useState<string>("h-128");

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (scrollPosition > 40) {
      setDynamicBorder("rounded-b-3xl");
      setDynamicHeight("h-96");
    } else {
      setDynamicBorder("rounded-3xl");
      setDynamicHeight("h-128");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className="sticky top-0">
      <div
        className={`absolute z-20 flex ${dynamicHeight} w-full items-center justify-between bg-white px-60 py-40 duration-100 ${dynamicBorder}`}
      >
        <Logo />
        <Menu />
      </div>
      <div
        className={`absolute left-0 top-0 z-10 ${dynamicHeight} w-full rounded-3xl bg-gradient-to-r from-ultramarine to-congo_pink px-60 py-40 blur-lg duration-100`}
      />
    </nav>
  );
};

export default Navbar;
