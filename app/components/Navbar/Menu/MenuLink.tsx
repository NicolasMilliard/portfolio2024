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
      } transition-colors duration-100 hover:text-congo_pink`}
    >
      {textLink}
    </Link>
  );
};

export default MenuLink;
