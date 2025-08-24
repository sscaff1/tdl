import type { Metadata } from 'next';
import { Yellowtail, Open_Sans } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

const yellowtail = Yellowtail({
  variable: '--font-yellowtail',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tour de Louisiane',
  description: 'A Louisiana cycling race for over 50 years.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${yellowtail.variable}`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
