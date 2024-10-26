import './globals.css';
import { buenosAires } from './utils/fonts';
// Components
import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
// Types
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${buenosAires.className} overflow-x-hidden bg-gradient-to-r from-ultramarine to-congo_pink`}
      >
        <div className="relative bg-grey-100 md:mx-8 md:my-10 md:rounded-3xl md:shadow-xl">
          <Navbar />
          <main className="px-8 pb-14 pt-15 md:px-15 md:pt-30">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
