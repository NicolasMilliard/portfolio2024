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
    <nav className="sticky top-0 h-128 w-full">
      <div
        className={`absolute z-20 flex h-128 w-full items-center justify-between bg-white px-60 py-40 duration-100 ${dynamicBorder}`}
      >
        <Logo />
        <Menu />
      </div>
      <div className="absolute left-0 top-0 z-10 h-128 w-full  rounded-3xl bg-gradient-to-r from-ultramarine to-congo_pink px-60 py-40 blur-lg"></div>
    </nav>
  );
};

export default Navbar;
