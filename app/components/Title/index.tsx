import { buenosAires, syne } from "@utils/fonts";

export const MainTitle = ({ children }: { children: any }) => {
  return (
    <h1 className={`${syne.className} font-normal text-black text-6xl`}>
      {children}
    </h1>
  );
};

export const Title = ({ children }: { children: any }) => {
  return (
    <h2
      className={`${buenosAires.className} font-extralight text-black text-4xl tracking-widest`}
    >
      {children}
    </h2>
  );
};
