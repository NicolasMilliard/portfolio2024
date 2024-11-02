import { syne } from '@app/utils/fonts';
// Components
import Image from 'next/image';
import Link from 'next/link';
// Types
import type { LinkProps } from '@app/types/Link';

interface IconLinkProps extends LinkProps {
  icon: string;
}

const SocialLink = ({ href, target, icon, children }: IconLinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={`${syne.className} flex gap-2 hover:text-congo_pink`}
    >
      <Image src={icon} alt="" width={24} height={24} />
      <span>{children}</span>
    </Link>
  );
};

export default SocialLink;
