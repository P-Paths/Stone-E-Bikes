"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const Footer: React.FC = () => {
  const theme = useTheme();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Platform', href: '/platform' },
    { name: 'Partnerships', href: '/partnerships' },
  ];

  const companyLinks = [
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="py-12" style={{ backgroundColor: '#000000', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'white' }}>
              {theme.brandName}
            </h3>
            <p className="mb-4" style={{ color: '#D1D5DB' }}>
              Revolutionizing electric mobility with our innovative quad-cycle platform.
            </p>
            <div className="flex space-x-4">
              {theme.social.facebook && (
                <a
                  href={theme.social.facebook}
                  className="transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C6A600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {theme.social.twitter && (
                <a
                  href={theme.social.twitter}
                  className="transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C6A600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {theme.social.instagram && (
                <a
                  href={theme.social.instagram}
                  className="transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C6A600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'white' }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="transition-colors no-underline"
                    style={{ color: '#D1D5DB' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#C6A600'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'white' }}>Contact</h4>
            <ul className="space-y-2" style={{ color: '#D1D5DB' }}>
              <li>
                <Link 
                  href="/contact" 
                  className="transition-colors no-underline"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C6A600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  Get in Touch
                </Link>
              </li>
              <li>{theme.contact.email}</li>
              <li>{theme.contact.phone}</li>
              <li className="whitespace-pre-line">{theme.contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: '#6B7280', color: '#9CA3AF' }}>
          <p>&copy; {new Date().getFullYear()} {theme.brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
