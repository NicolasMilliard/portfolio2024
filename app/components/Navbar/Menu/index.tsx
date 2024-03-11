"use client";

import { syne } from "@utils/fonts";
import { usePathname } from "next/navigation";
// Components
import MenuLink from "./MenuLink";

const Menu = ({ isTextWhite }: { isTextWhite: boolean }) => {
  const pathName = usePathname();
  const formattedPathName = pathName === "/" ? "home" : pathName.slice(1);

  return (
    <menu
      className={`${syne.className} flex w-full items-center justify-center gap-4 md:justify-end md:gap-10 ${isTextWhite ? "text-white" : "text-black"}`}
    >
      <li>
        <MenuLink path={formattedPathName} target="home" textLink="Home" />
      </li>
      <li>
        <MenuLink
          path={formattedPathName}
          target="case-studies"
          textLink="Case Studies"
        />
      </li>
      <li>
        <MenuLink path={formattedPathName} target="resume" textLink="Resume" />
      </li>
      <li>
        <MenuLink
          path={formattedPathName}
          target="contact"
          textLink="Contact"
        />
      </li>
    </menu>
  );
};

export default Menu;
