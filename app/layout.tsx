import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { Toaster } from './components/ui/toaster';
import { QueryClientProvider } from './components/QueryClientProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stone E-Bikes - Revolutionary Quad-Cycle Mobility Platform',
  description: 'Revolutionizing electric mobility with our innovative quad-cycle platform. Seeking strategic partnerships and pilot programs to bring accessible, safe transportation solutions to communities nationwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <ThemeProvider>
            <CartProvider>
              <div className="min-h-screen flex flex-col bg-white">
                <Header />
                <main className="flex-1 w-full">
                  {children}
                </main>
                <Footer />
              </div>
              <Toaster />
            </CartProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
