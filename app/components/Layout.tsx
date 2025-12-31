import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { CartNotification } from './CartNotification';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <CartNotification />
    </div>
  );
};
