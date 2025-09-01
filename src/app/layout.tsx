import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'DreamWeave Digital',
  description:
    'DreamWeave Digital is a digital marketing, social media, and web development company.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased flex flex-col'
        )}
      >
        <div className="relative z-0 overflow-x-clip flex flex-col flex-grow">
          <div className="absolute top-0 -left-64 w-96 h-96 bg-secondary rounded-full opacity-30 animate-pulse" />
          <div className="absolute -bottom-64 -right-32 w-96 h-96 bg-secondary rounded-full opacity-30 animate-pulse animation-delay-3000" />
          <div className="relative z-10 flex flex-col flex-grow">
            <Header />
            <main className="flex-grow animate-in fade-in duration-500">{children}</main>
            <Footer />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
