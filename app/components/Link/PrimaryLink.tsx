import { syne } from '@app/utils/fonts';
// Components
import Link from 'next/link';
// Types
import type { LinkProps } from '@app/types/Link';

const PrimaryLink = ({ href, target, children }: LinkProps) => {
  return (
    <div className="group relative inline-block">
      <Link
        href={href}
        target={target}
        className={`${syne.className} relative z-10 rounded-xl bg-black px-6 py-3 font-semibold text-grey-100`}
      >
        {children}
      </Link>
      <div className="absolute inset-0 -top-2 h-10 rounded-xl bg-gradient-to-br from-ultramarine to-congo_pink opacity-0 blur-lg duration-200 group-hover:opacity-100"></div>
    </div>
  );
};

export default PrimaryLink;
