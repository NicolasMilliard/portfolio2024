// Types
import type { ReactNode } from 'react';

const GradientParagraph = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <p
      className={`${className} w-fit bg-gradient-to-r from-ultramarine to-congo_pink bg-clip-text font-normal text-transparent`}
    >
      {children}
    </p>
  );
};

export default GradientParagraph;
