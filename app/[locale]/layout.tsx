import { buenosAires } from '../utils/fonts';
import './globals.css';
import { Providers } from './providers';
// Components
import LanguageSwitcher from '@app/components/Switch/LanguageSwitcher';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
// Types
import type { ReactNode } from 'react';

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${buenosAires.className} overflow-x-hidden bg-gradient-to-r from-ultramarine to-congo_pink`}
      >
        <Providers locale={locale}>
          <div className="relative bg-grey-100 md:mx-8 md:my-10 md:rounded-3xl md:shadow-xl">
            <Navbar />
            <LanguageSwitcher />
            <main className="px-8 pb-14 pt-15 md:px-15 md:pt-30">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
