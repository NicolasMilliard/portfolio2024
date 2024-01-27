import type { Metadata } from "next";
import "./globals.css";
import { buenosAires } from "./utils/fonts";

export const metadata: Metadata = {
  title: "Front-End Developer | Nicolas Milliard",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${buenosAires.className} overflow-x-hidden bg-gradient-to-r from-ultramarine to-congo_pink`}
      >
        <main className="my-40 mx-32 py-54 px-60 rounded-3xl bg-grey shadow-xl">
          {children}
        </main>
      </body>
    </html>
  );
}
