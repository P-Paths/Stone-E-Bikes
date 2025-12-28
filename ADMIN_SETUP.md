# Admin Command Center Setup Guide

## Overview
The admin command center is now fully implemented. This guide will help you set it up and create your first admin user.

## Prerequisites
1. Supabase project created
2. Environment variables configured
3. Database schema applied

## Step 1: Environment Variables

Add these to your `.env.local` file:

```bash
# Supabase (get from Supabase Dashboard > Settings > API)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Step 2: Database Schema

Run the SQL in `supabase-schema.sql` in your Supabase SQL Editor:

1. Go to Supabase Dashboard
2. Click "SQL Editor" in the left sidebar
3. Copy and paste the entire contents of `supabase-schema.sql`
4. Click "Run" to execute

This creates:
- `admin_users` table for admin user management
- `page_content` table for content management
- Extends `contacts` table with lead tracking fields
- Sets up Row Level Security (RLS) policies

## Step 3: Create First Admin User

### Option A: Via Supabase Dashboard (Recommended)

1. Go to Supabase Dashboard > Authentication > Users
2. Click "Add user" > "Create new user"
3. Enter email and password
4. Uncheck "Auto Confirm User" (or leave checked if you want immediate access)
5. Click "Create user"
6. Copy the User ID (UUID)

7. Go to SQL Editor and run:
```sql
INSERT INTO public.admin_users (id, email, role, first_name, last_name)
VALUES (
  'PASTE_USER_ID_HERE',
  'your-email@example.com',
  'super_admin',
  'Your',
  'Name'
);
```

### Option B: Via API (After first user is created)

Once you have one Super Admin user, you can create additional users through the admin dashboard:
1. Login at `/admin/login`
2. Go to Settings page
3. Click "Add User"
4. Fill in the form and create

## Step 4: Access the Dashboard

1. Navigate to `/admin/login`
2. Enter your email and password
3. You'll be redirected to `/admin` dashboard

## Features

### For Admin Users (Pops)
- **Dashboard**: View KPIs and recent leads
- **Leads**: View, filter, search, and manage all contact form submissions
- **Analytics**: View charts and metrics (leads over time, sources, response rates)
- **Content**: Edit page content for Home, About, Platform, and Partnerships pages
- **Export**: Download leads as CSV

### For Super Admin Users (You)
- Everything Admin can do, plus:
- **Settings**: Create and manage admin users
- **Full Access**: All system capabilities

## Mobile Optimization

The dashboard is fully responsive:
- Mobile-friendly sidebar (drawer on small screens)
- Touch-optimized buttons and inputs
- Responsive tables (card view on mobile)
- Charts that resize for mobile screens

## Security

- All admin routes are protected by authentication middleware
- Role-based access control (Super Admin vs Admin)
- Supabase RLS policies protect data access
- Input validation on all forms

## Troubleshooting

### Can't login?
- Verify user exists in `admin_users` table
- Check that email matches exactly
- Ensure password is correct
- Check browser console for errors

### "Forbidden" errors?
- Verify user has entry in `admin_users` table
- Check that role is set correctly ('admin' or 'super_admin')

### Database errors?
- Verify schema was applied correctly
- Check RLS policies are enabled
- Ensure service role key has proper permissions

## Next Steps

1. Create your Super Admin account
2. Create Pops' Admin account
3. Test the dashboard features
4. Customize content as needed

## Support

If you encounter issues:
1. Check browser console for errors
2. Check Supabase logs
3. Verify environment variables are set correctly
4. Ensure database schema is applied

