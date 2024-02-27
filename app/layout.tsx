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
        <div className="relative mx-32 my-40 rounded-3xl bg-grey shadow-xl">
          <Navbar />
          <main className="px-60 py-54">{children}</main>
        </div>
      </body>
    </html>
  );
}
