"use client";

import { useEffect, useState } from "react";
// Components
import Logo from "@components/Navbar/Logo";
import Menu from "@components/Navbar/Menu";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [dynamicBorder, setDynamicBorder] = useState<string>("");

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    scrollPosition > 40
      ? setDynamicBorder("rounded-b-3xl")
      : setDynamicBorder("rounded-3xl");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className="sticky top-0 w-full h-128">
      <div
        className={`absolute z-20 w-full h-128 flex justify-between items-center px-60 py-40 bg-white duration-300 ${dynamicBorder}`}
      >
        <Logo />
        <Menu />
      </div>
      <div className="absolute z-10 w-full h-128 top-0 left-0  px-60 py-40 blur-lg bg-gradient-to-r from-ultramarine to-congo_pink rounded-3xl"></div>
    </nav>
  );
};

export default Navbar;
