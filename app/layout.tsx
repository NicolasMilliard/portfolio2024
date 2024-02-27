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
        <div className="relative my-40 mx-32 rounded-3xl bg-grey shadow-xl">
          <Navbar />
          <main className="py-54 px-60">{children}</main>
        </div>
      </body>
    </html>
  );
}
