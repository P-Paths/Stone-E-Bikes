"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Platform', href: '/platform' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b" style={{ borderColor: '#E5E7EB', position: 'sticky' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer transition-opacity hover:opacity-80" data-testid="logo">
              <img 
                src="/images/Logo/STONE E-BIKESLOGO.png" 
                alt="Stone E-Bikes" 
                className="h-16 w-auto"
                style={{ maxHeight: '64px' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center" style={{ position: 'relative', zIndex: 100 }}>
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="cursor-pointer transition-colors font-medium text-lg hover:opacity-80 no-underline"
                style={{
                  color: isActive(item.href) ? '#C6A600' : '#004225',
                  textDecoration: 'none',
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 100,
                  minWidth: '60px',
                  textAlign: 'center'
                }}
                data-testid={`nav-${item.name.toLowerCase()}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
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
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2 bg-white" data-testid="mobile-menu" style={{ position: 'relative', zIndex: 100 }}>
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="cursor-pointer block px-3 py-2 transition-colors font-medium text-lg hover:opacity-80"
                style={{
                  color: isActive(item.href) ? '#C6A600' : '#004225',
                  textDecoration: 'none',
                  display: 'block'
                }}
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
