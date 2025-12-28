import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/')) {
      router.push(href);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Platform', href: '/platform' },
    { name: 'Partnerships', href: '/partnerships' },
  ];

  const companyLinks = [
    { name: 'Contact', href: '/contact' },
    { name: 'About Us', href: '/about' },
    { name: 'Platform Details', href: '/platform' },
    { name: 'Partnership Opportunities', href: '/partnerships' },
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
              Revolutionizing electric mobility with our innovative quad-cycle platform.
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
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="cursor-pointer text-gray-400 hover:text-white transition-colors text-left"
                    data-testid={`link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                    data-testid={`link-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>info@stonee-bikes.com</p>
              <p>313-495-2887</p>
              <p>15151 W 8 Mile<br />Detroit, Michigan</p>
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
