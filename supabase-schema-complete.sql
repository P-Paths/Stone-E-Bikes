-- Complete Supabase Schema for Stone E-Bikes Admin Dashboard
-- Run this ENTIRE file in your Supabase SQL Editor
-- Make sure to run it in order, section by section if needed

-- ============================================
-- SECTION 1: Admin Users Table
-- ============================================

-- Admin users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('super_admin', 'admin')),
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Admins can view admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Super admins can manage admin users" ON public.admin_users;

-- Policy: Only admins can view admin_users
CREATE POLICY "Admins can view admin users" ON public.admin_users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE id = auth.uid()
    )
  );

-- Policy: Only super admins can insert/update/delete
CREATE POLICY "Super admins can manage admin users" ON public.admin_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE id = auth.uid() AND role = 'super_admin'
    )
  );

-- ============================================
-- SECTION 2: Contacts Table
-- ============================================

-- Contacts table (for contact form submissions)
CREATE TABLE IF NOT EXISTS public.contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed', 'archived')),
  notes TEXT,
  assigned_to UUID REFERENCES public.admin_users(id),
  contacted_at TIMESTAMPTZ,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Admins can view contacts" ON public.contacts;
DROP POLICY IF EXISTS "Admins can update contacts" ON public.contacts;
DROP POLICY IF EXISTS "Public can insert contacts" ON public.contacts;

-- Policy: Only admins can view contacts
CREATE POLICY "Admins can view contacts" ON public.contacts
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE id = auth.uid()
    )
  );

-- Policy: Only admins can update contacts
CREATE POLICY "Admins can update contacts" ON public.contacts
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE id = auth.uid()
    )
  );

-- Policy: Allow public to insert contacts (for contact form)
CREATE POLICY "Public can insert contacts" ON public.contacts
  FOR INSERT WITH CHECK (true);

-- ============================================
-- SECTION 3: Page Content Table
-- ============================================

-- Content management (for editable page sections)
CREATE TABLE IF NOT EXISTS public.page_content (
  id BIGSERIAL PRIMARY KEY,
  page_slug TEXT NOT NULL,
  section_key TEXT NOT NULL,
  content JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by UUID REFERENCES public.admin_users(id),
  UNIQUE(page_slug, section_key)
);

-- Enable RLS
ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Admins can manage page content" ON public.page_content;

-- Policy: Only admins can view/edit page content
CREATE POLICY "Admins can manage page content" ON public.page_content
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE id = auth.uid()
    )
  );

-- ============================================
-- SECTION 4: Indexes for Performance
-- ============================================

CREATE INDEX IF NOT EXISTS idx_contacts_status ON public.contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_contacts_assigned_to ON public.contacts(assigned_to);
CREATE INDEX IF NOT EXISTS idx_page_content_page_slug ON public.page_content(page_slug);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON public.contacts(email);

-- ============================================
-- SECTION 5: Functions and Triggers
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for page_content
DROP TRIGGER IF EXISTS update_page_content_updated_at ON public.page_content;
CREATE TRIGGER update_page_content_updated_at
  BEFORE UPDATE ON public.page_content
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- VERIFICATION QUERIES (Optional - run to verify)
-- ============================================

-- Uncomment these to verify tables were created:
-- SELECT table_name FROM information_schema.tables 
-- WHERE table_schema = 'public' 
-- AND table_name IN ('admin_users', 'contacts', 'page_content');

-- SELECT column_name, data_type FROM information_schema.columns 
-- WHERE table_name = 'contacts' AND table_schema = 'public';

