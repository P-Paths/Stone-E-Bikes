-- Admin Command Center Database Schema
-- Run this in your Supabase SQL Editor

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

-- Policy: Only admins can view/edit page content
CREATE POLICY "Admins can manage page content" ON public.page_content
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE id = auth.uid()
    )
  );

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

-- Add columns if table already exists (for migration)
DO $$ 
BEGIN
  IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'contacts') THEN
    ALTER TABLE public.contacts 
      ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new',
      ADD COLUMN IF NOT EXISTS notes TEXT,
      ADD COLUMN IF NOT EXISTS assigned_to UUID REFERENCES public.admin_users(id),
      ADD COLUMN IF NOT EXISTS contacted_at TIMESTAMPTZ,
      ADD COLUMN IF NOT EXISTS source TEXT;
    
    -- Update status constraint if needed
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.check_constraints 
      WHERE constraint_name = 'contacts_status_check'
    ) THEN
      ALTER TABLE public.contacts 
        ADD CONSTRAINT contacts_status_check 
        CHECK (status IN ('new', 'contacted', 'qualified', 'closed', 'archived'));
    END IF;
  END IF;
END $$;

-- Enable RLS on contacts if not already enabled
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

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

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_contacts_status ON public.contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_contacts_assigned_to ON public.contacts(assigned_to);
CREATE INDEX IF NOT EXISTS idx_page_content_page_slug ON public.page_content(page_slug);

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

