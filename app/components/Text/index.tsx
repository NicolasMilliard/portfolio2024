// Types
import type { ReactNode } from "react";

export const Paragraph = ({ children }: { children: ReactNode }) => {
  return <p className="max-w-200 font-book text-black">{children}</p>;
};

export const GradientParagraph = ({ children }: { children: ReactNode }) => {
  return (
    <p className="w-fit bg-gradient-to-r from-ultramarine to-congo_pink bg-clip-text font-normal text-transparent">
      {children}
    </p>
  );
};
