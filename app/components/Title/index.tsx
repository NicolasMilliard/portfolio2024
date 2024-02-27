import { buenosAires, syne } from "@utils/fonts";

export const MainTitle = ({ children }: { children: any }) => {
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
  children: any;
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
