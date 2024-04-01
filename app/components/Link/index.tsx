import { syne } from "@utils/fonts";
// Components
import Image from "next/image";
import Link from "next/link";
// Types
import type { ReactNode } from "react";

interface LinkProps {
  href: string;
  target: "_blank" | "_self";
  children: ReactNode;
}

interface IconLinkProps extends LinkProps {
  icon: string;
}

export const PrimaryLink = ({ href, target, children }: LinkProps) => {
  return (
    <div className="group relative inline-block">
      <Link
        href={href}
        target={target}
        className={`${syne.className} text-grey-100 relative z-10 rounded-xl bg-black px-6 py-3 font-semibold`}
      >
        {children}
      </Link>
      <div className="absolute inset-0 -top-2 h-10 rounded-xl bg-gradient-to-br from-ultramarine to-congo_pink opacity-0 blur-lg duration-200 group-hover:opacity-100"></div>
    </div>
  );
};

export const SecondaryLink = ({ href, target, children }: LinkProps) => {
  return (
    <div className="group relative inline-block">
      <Link
        href={href}
        target={target}
        className={`${syne.className} text-grey-100 relative z-10 rounded-xl bg-black px-6 py-3 font-semibold`}
      >
        {children}
      </Link>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-ultramarine to-congo_pink opacity-0 blur-lg duration-200 group-hover:opacity-100"></div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: string;
  children: ReactNode;
}

export const SocialLink = ({ href, target, icon, children }: IconLinkProps) => {
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
