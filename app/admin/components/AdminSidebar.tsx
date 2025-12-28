'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  FileText, 
  Settings,
  QrCode,
  X 
} from 'lucide-react';
import { Button } from '../../../client/src/components/ui/button';
import { useSidebar } from './SidebarContext';

interface AdminSidebarProps {
  role: string;
}

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Leads', href: '/admin/leads', icon: Users },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Content', href: '/admin/content', icon: FileText },
  { name: 'QR Code', href: '/admin/qr-code', icon: QrCode },
];

const superAdminNav = [
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar({ role }: AdminSidebarProps) {
  const pathname = usePathname();
  const { isOpen, closeSidebar } = useSidebar();
  const isSuperAdmin = role === 'super_admin';

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 z-50
          transform transition-transform duration-200 ease-in-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Close button for mobile */}
          <div className="flex justify-end p-4 lg:hidden">
            <Button variant="ghost" size="sm" onClick={closeSidebar}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/admin' && pathname.startsWith(item.href));
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeSidebar}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${isActive
                      ? 'bg-primary text-white'
                      : 'text-muted hover:bg-gray-100 hover:text-primary'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}

            {isSuperAdmin && (
              <>
                <div className="pt-4 border-t border-gray-200">
                  {superAdminNav.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeSidebar}
                        className={`
                          flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                          ${isActive
                            ? 'bg-primary text-white'
                            : 'text-muted hover:bg-gray-100 hover:text-primary'
                          }
                        `}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </nav>
        </div>
      </aside>
    </>
  );
}

