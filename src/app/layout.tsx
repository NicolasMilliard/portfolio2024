import type { Metadata } from "next";
import { inter } from "./utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Front-End Developer | Nicolas Milliard",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
