// Components
import Link from "next/link";

const MenuLink = ({
  path,
  target,
  textLink,
}: {
  path: string;
  target: string;
  textLink: string;
}) => {
  return (
    <Link
      href={`/${target === "home" ? "" : target}`}
      className={`${
        path === target ? "text-ultramarine" : ""
      } hover:text-congo_pink transition-colors duration-100`}
    >
      {textLink}
    </Link>
  );
};

export default MenuLink;
