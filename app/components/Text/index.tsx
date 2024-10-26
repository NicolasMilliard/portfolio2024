// Types
import type { ReactNode } from 'react';

export const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <p className={`${className} max-w-200 font-book text-black`}>{children}</p>
  );
};

export const GradientParagraph = ({
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
