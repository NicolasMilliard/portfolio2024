import { syne } from "@utils/fonts";
// Components
import Image from "next/image";
import Link from "next/link";

interface SocialLinkProps {
  text: string;
  link: string;
  icon: string;
}

const SocialLink = ({ text, link, icon }: SocialLinkProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={`${syne.className} flex gap-2 hover:text-congo_pink`}
    >
      <Image src={icon} alt="" width={24} height={24} />
      <span>{text}</span>
    </Link>
  );
};

export default SocialLink;
