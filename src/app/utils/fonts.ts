import { Syne } from "next/font/google";
import localFont from "next/font/local";

export const syne = Syne({ weight: ["400", "600"], subsets: ["latin"] });
export const buenosAires = localFont({
  src: [
    {
      path: "../../../public/fonts/BuenosAires-Regular.woff",
      weight: "400",
    },
    {
      path: "../../../public/fonts/BuenosAires-Thin.woff",
      weight: "200",
    },
  ],
});
