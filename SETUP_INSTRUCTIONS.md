# Complete Setup Instructions

## Step-by-Step Setup Guide

### Step 1: Supabase Project Setup

1. Go to [supabase.com](https://supabase.com) and sign in
2. Create a new project (or use existing)
3. Wait for project to be ready (takes 1-2 minutes)

### Step 2: Get Your Supabase Credentials

1. In Supabase Dashboard, go to **Settings** > **API**
2. Copy these values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)
   - **service_role key** (starts with `eyJ...`) - **KEEP THIS SECRET!**

### Step 3: Set Environment Variables

Create or update `.env.local` in your project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**Important**: 
- `NEXT_PUBLIC_*` variables are safe for client-side
- `SUPABASE_SERVICE_ROLE_KEY` is server-only and should NEVER be exposed to the client

### Step 4: Run Database Schema

1. In Supabase Dashboard, click **SQL Editor** in the left sidebar
2. Click **New Query**
3. Open the file `supabase-schema-complete.sql` from your project
4. Copy the **ENTIRE** contents
5. Paste into the SQL Editor
6. Click **Run** (or press Cmd/Ctrl + Enter)
7. You should see "Success. No rows returned"

**If you get errors:**
- Make sure you're running the complete file
- Check that all sections ran successfully
- Some errors about "already exists" are OK if you're re-running

### Step 5: Verify Tables Were Created

Run this in SQL Editor to verify:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('admin_users', 'contacts', 'page_content');
```

You should see all 3 tables listed.

### Step 6: Create Your First Admin User

#### Option A: Via Supabase Dashboard (Recommended)

1. Go to **Authentication** > **Users** in Supabase Dashboard
2. Click **Add user** > **Create new user**
3. Enter:
   - **Email**: your email address
   - **Password**: a strong password
   - **Auto Confirm User**: ✅ (check this)
4. Click **Create user**
5. **Copy the User ID** (UUID) - you'll need this next

6. Go back to **SQL Editor** and run:

```sql
INSERT INTO public.admin_users (id, email, role, first_name, last_name)
VALUES (
  'PASTE_YOUR_USER_ID_HERE',  -- Replace with the UUID from step 5
  'your-email@example.com',    -- Replace with your email
  'super_admin',               -- This makes you Super Admin
  'Your',                      -- Your first name
  'Name'                       -- Your last name
);
```

7. Click **Run**

#### Option B: Via Supabase Auth API (Alternative)

If you prefer, you can create the user via the Supabase Auth API, then add to admin_users table.

### Step 7: Test the Setup

1. **Start your Next.js dev server:**
   ```bash
   cd StoneEBikes/Website-Setup
   npm run dev
   ```

2. **Navigate to:** `http://localhost:3000/admin/login`

3. **Login with:**
   - Email: the email you used in Step 6
   - Password: the password you set

4. **You should see:**
   - Dashboard with KPIs
   - Sidebar navigation
   - No errors in console

### Step 8: Create Pops' Admin Account

Once you're logged in as Super Admin:

1. Go to **Settings** page in the admin dashboard
2. Click **Add User**
3. Fill in:
   - Email: Pops' email
   - Password: a secure password
   - First Name: Pops' first name
   - Last Name: Pops' last name
   - Role: **Admin** (not Super Admin)
4. Click **Create User**

Pops can now login at `/admin/login` with their credentials.

## Troubleshooting

### "relation does not exist" Error

**Problem**: Tables haven't been created yet.

**Solution**: 
1. Make sure you ran `supabase-schema-complete.sql` in SQL Editor
2. Verify tables exist with the verification query in Step 5
3. If tables are missing, re-run the schema file

### "Unauthorized" or "Forbidden" Errors

**Problem**: User doesn't exist in `admin_users` table.

**Solution**:
1. Check that you added the user to `admin_users` table (Step 6)
2. Verify the User ID matches the one from Auth > Users
3. Make sure role is set to 'super_admin' or 'admin'

### Can't Login

**Problem**: Authentication issues.

**Solution**:
1. Verify environment variables are set correctly
2. Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
3. Make sure user exists in Supabase Auth > Users
4. Check browser console for errors

### Contact Form Not Saving

**Problem**: Contacts table missing or RLS blocking inserts.

**Solution**:
1. Verify `contacts` table exists (Step 5)
2. Check RLS policy "Public can insert contacts" exists
3. Test by running this in SQL Editor:
   ```sql
   INSERT INTO public.contacts (name, email, message, source)
   VALUES ('Test', 'test@example.com', 'Test message', 'test');
   ```

## Verification Checklist

Before using the dashboard, verify:

- [ ] Supabase project created
- [ ] Environment variables set in `.env.local`
- [ ] Database schema executed successfully
- [ ] All 3 tables exist (admin_users, contacts, page_content)
- [ ] First admin user created in Auth > Users
- [ ] First admin user added to admin_users table
- [ ] Can login at `/admin/login`
- [ ] Dashboard loads without errors
- [ ] Can see Settings page (if Super Admin)

## Next Steps After Setup

1. ✅ Test contact form on public site - should save to `contacts` table
2. ✅ View leads in admin dashboard
3. ✅ Test content editing
4. ✅ Create Pops' admin account
5. ✅ Test analytics dashboard

## Need Help?

If you encounter issues:
1. Check Supabase Dashboard > Logs for errors
2. Check browser console for client errors
3. Verify all environment variables are correct
4. Make sure database schema ran completely

