import type { ReactNode } from 'react';

export type LinkProps = {
  href: string;
  target: '_blank' | '_self';
  children: ReactNode;
};
