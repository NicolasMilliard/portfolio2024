// Components
import Link from 'next/link';

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
      href={target}
      className={`${
        path === target ? 'text-ultramarine' : ''
      } transition-colors duration-200 hover:text-congo_pink`}
    >
      {textLink}
    </Link>
  );
};

export default MenuLink;
