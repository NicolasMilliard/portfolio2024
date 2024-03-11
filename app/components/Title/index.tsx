import { buenosAires, syne } from "@utils/fonts";
// Types
import type { ReactNode } from "react";

export const MainTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className={`${syne.className} text-6xl font-normal text-black`}>
      {children}
    </h1>
  );
};

export const Title = ({
  children,
  isWidest,
}: {
  children: ReactNode;
  isWidest?: boolean;
}) => {
  return (
    <h2
      className={`${
        buenosAires.className
      } text-4xl font-extralight text-black ${
        isWidest ? "tracking-widest" : ""
      }`}
    >
      {children}
    </h2>
  );
};

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className={`${syne.className} text-4xl font-normal text-black`}>
      {children}
    </h2>
  );
};

export const SubTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className={`${syne.className} text-3xl font-semibold text-black`}>
      {children}
    </h2>
  );
};

export const GradientTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      className={`${syne.className} bg-gradient-to-r from-ultramarine to-congo_pink bg-clip-text text-xl font-semibold text-transparent`}
    >
      {children}
    </h2>
  );
};
