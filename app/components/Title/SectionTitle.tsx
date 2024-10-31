import { syne } from '@app/utils/fonts';
// Types
import type { ReactNode } from 'react';

const SectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h2
      className={`${syne.className} text-4xl font-normal text-black ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
