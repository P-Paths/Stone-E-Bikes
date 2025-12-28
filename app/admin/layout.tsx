import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';
import { AdminSidebar } from './components/AdminSidebar';
import { AdminHeader } from './components/AdminHeader';
import { SidebarProvider } from './components/SidebarContext';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Check if user is admin
  const { data: adminUser } = await supabase
    .from('admin_users')
    .select('*')
    .eq('id', user.id)
    .single();

  if (!adminUser) {
    redirect('/admin/login');
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        <AdminHeader user={adminUser} />
        <div className="flex">
          <AdminSidebar role={adminUser.role} />
          <main className="flex-1 p-4 md:p-8 lg:ml-64">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

