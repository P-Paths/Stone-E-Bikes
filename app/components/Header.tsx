"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const theme = useTheme();
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white text-black shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer transition-opacity hover:opacity-80" data-testid="logo">
              <img 
                src="/images/Logo/STONE E-BIKESLOGO.png" 
                alt="Stone E-Bikes" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`cursor-pointer transition-colors ${
                  isActive(item.href)
                    ? 'text-accent font-medium'
                    : 'text-black hover:text-accent'
                }`}
                data-testid={`nav-${item.name.toLowerCase()}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={openCart}
              className="relative p-2 text-black hover:text-accent"
              data-testid="button-cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-accent text-black font-bold text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center px-1 shadow-lg border-2 border-white"
                  data-testid="text-cart-count"
                >
                  {itemCount}
                </span>
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2 bg-white" data-testid="mobile-menu">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`cursor-pointer block px-3 py-2 transition-colors ${
                  isActive(item.href)
                    ? 'text-accent font-medium'
                    : 'text-black hover:text-accent'
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                data-testid={`mobile-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
