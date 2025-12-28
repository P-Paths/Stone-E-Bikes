'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Menu } from 'lucide-react';
import { Button } from '../../../client/src/components/ui/button';
import { createClient } from '../../../lib/supabase/client';
import { useToast } from '../../../client/src/hooks/use-toast';
import { useSidebar } from './SidebarContext';

interface AdminUser {
  id: string;
  email: string;
  role: string;
  first_name?: string;
  last_name?: string;
}

export function AdminHeader({ user }: { user: AdminUser }) {
  const router = useRouter();
  const { toast } = useToast();
  const supabase = createClient();
  const { toggleSidebar } = useSidebar();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: 'Logged out',
      description: 'You have been logged out successfully.',
    });
    router.push('/admin/login');
    router.refresh();
  };

  const displayName = user.first_name && user.last_name
    ? `${user.first_name} ${user.last_name}`
    : user.email;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-primary">Admin Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted hidden md:block">
            {displayName} ({user.role === 'super_admin' ? 'Super Admin' : 'Admin'})
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-muted hover:text-primary"
          >
            <LogOut className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

