import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: 'Animated Ascent - Personal Portfolio',
  description: 'A modern, visually captivating personal portfolio by Your Name.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <div className="animated-gradient-background" />
        <Header />
        <main className="flex-grow relative z-10 pt-[var(--header-height)]">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
