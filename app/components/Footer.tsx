"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/contexts/ThemeContext';

export const Footer: React.FC = () => {
  const theme = useTheme();

  const quickLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  const customerCare = [
    { name: 'Shipping Info', href: '/shipping-info' },
    { name: 'Returns', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="text-brand-name">
              {theme.brandName}
            </h3>
            <p className="text-gray-400 mb-4">
              Your premier destination for quality bicycles and accessories.
            </p>
            <div className="flex space-x-4">
              {theme.social.facebook && (
                <a
                  href={theme.social.facebook}
                  className="text-gray-400 hover:text-accent transition-colors"
                  data-testid="link-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {theme.social.twitter && (
                <a
                  href={theme.social.twitter}
                  className="text-gray-400 hover:text-accent transition-colors"
                  data-testid="link-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {theme.social.instagram && (
                <a
                  href={theme.social.instagram}
                  className="text-gray-400 hover:text-accent transition-colors"
                  data-testid="link-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="cursor-pointer text-gray-400 hover:text-white transition-colors"
                    data-testid={`link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              {customerCare.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid={`link-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Get updates on new products and special offers.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                data-testid="input-newsletter-email"
              />
              <Button
                className="bg-accent hover:bg-green-600 ml-2"
                data-testid="button-newsletter-submit"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p data-testid="text-copyright">
            &copy; {new Date().getFullYear()} {theme.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
