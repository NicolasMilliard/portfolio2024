import "./globals.css";
import { buenosAires } from "./utils/fonts";
// Components
import Navbar from "./containers/Navbar";

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
        <div className="relative bg-grey md:mx-8 md:my-10 md:rounded-3xl md:shadow-xl">
          <Navbar />
          <main className="px-15 py-14">{children}</main>
        </div>
      </body>
    </html>
  );
}
