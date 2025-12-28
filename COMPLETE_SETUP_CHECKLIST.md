# Complete Setup Checklist
## Step-by-Step: Supabase → Vercel → Verify

---

## ✅ STEP 1: SUPABASE SETUP

### 1.1 Get Your Supabase Credentials

From your Supabase Dashboard (you're already there):

1. **Go to:** Settings → API Keys
2. **Click the tab:** "Legacy anon, service_role API keys" (the one you have open)
3. **Copy these 4 values:**

   **From "anon public" section:**
   - ✅ **anon public key** - Click "Copy" button
     - Looks like: `eyJhbGci0iJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   
   **From "service_role secret" section:**
   - ✅ **service_role key** - Click "Reveal" then "Copy"
     - This is masked, click "Reveal" to see it
     - **KEEP THIS SECRET!**

   **From Project Settings:**
   - ✅ **Project URL** - You already have this: `https://rtzydowdwivuiescwvsb.supabase.co`

### 1.2 Run Database Schema

1. **In Supabase Dashboard:** Click **SQL Editor** (left sidebar)
2. **Click:** "New Query"
3. **Open file:** `supabase-schema-complete.sql` from your project
4. **Copy the ENTIRE file** and paste into SQL Editor
5. **Click:** "Run" (or press Cmd/Ctrl + Enter)
6. **Verify:** You should see "Success. No rows returned"

**Verify tables were created:**
Run this query in SQL Editor:
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('admin_users', 'contacts', 'page_content');
```
Should show all 3 tables.

### 1.3 Create First Admin User

1. **Go to:** Authentication → Users
2. **Click:** "Add user" → "Create new user"
3. **Enter:**
   - Email: your email
   - Password: create a strong password
   - ✅ Check "Auto Confirm User"
4. **Click:** "Create user"
5. **Copy the User ID** (UUID) - you'll need this

6. **Go back to SQL Editor** and run:
```sql
INSERT INTO public.admin_users (id, email, role, first_name, last_name)
VALUES (
  'PASTE_YOUR_USER_ID_HERE',  -- Replace with UUID from step 5
  'your-email@example.com',    -- Replace with your email
  'super_admin',
  'Your',
  'Name'
);
```

**✅ Supabase Setup Complete!**

---

## ✅ STEP 2: VERCEL SETUP

### 2.1 Add Environment Variables

1. **Go to:** [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Find:** Your Stone E-Bikes project
3. **Click:** Project → **Settings** → **Environment Variables**

### 2.2 Add These 4 Variables

Add each one separately:

**Variable 1:**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://rtzydowdwivuiescwvsb.supabase.co
✅ Check: Production, Preview, Development
```

**Variable 2:**
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [paste your anon public key from Step 1.1]
✅ Check: Production, Preview, Development
```

**Variable 3:**
```
Name: SUPABASE_URL
Value: https://rtzydowdwivuiescwvsb.supabase.co
✅ Check: Production, Preview, Development
```

**Variable 4:**
```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: [paste your service_role key from Step 1.1]
✅ Check: Production, Preview, Development
⚠️ Keep this PRIVATE (don't mark as public)
```

### 2.3 Redeploy

**IMPORTANT:** Variables only work after redeploy!

1. **Go to:** Deployments tab
2. **Click:** ⋯ (three dots) on latest deployment
3. **Click:** "Redeploy"
4. **Wait** for deployment to complete

**✅ Vercel Setup Complete!**

---

## ✅ STEP 3: VERIFY EVERYTHING WORKS

### 3.1 Test Contact Form

1. **Visit your live site** (the Vercel domain)
2. **Go to:** `/contact` page
3. **Fill out and submit** the contact form
4. **Check Supabase:**
   - Go to Supabase Dashboard
   - Table Editor → `contacts` table
   - **You should see your test submission!**

### 3.2 Test Admin Login

1. **Visit:** `your-site.com/admin/login`
2. **Login with:**
   - Email: the one you created in Step 1.3
   - Password: the one you set
3. **You should see:** Dashboard with KPIs

### 3.3 Test Dashboard Features

- ✅ Dashboard loads with KPI cards
- ✅ Leads page shows contacts
- ✅ Analytics page loads
- ✅ Content editor works
- ✅ Settings page accessible (if Super Admin)

**✅ Verification Complete!**

---

## 🔍 TROUBLESHOOTING

### Contact Form Not Saving?

**Check:**
1. ✅ Variables added to Vercel
2. ✅ Redeployed after adding variables
3. ✅ `contacts` table exists in Supabase
4. ✅ RLS policy "Public can insert contacts" exists

**Test in Supabase SQL Editor:**
```sql
SELECT * FROM public.contacts ORDER BY created_at DESC LIMIT 5;
```

### Admin Login Not Working?

**Check:**
1. ✅ User exists in Auth → Users
2. ✅ User exists in `admin_users` table
3. ✅ `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set in Vercel
4. ✅ Check browser console for errors

**Test in Supabase SQL Editor:**
```sql
SELECT * FROM public.admin_users;
```

### "Missing Supabase" Errors?

**Check:**
1. ✅ All 4 variables are in Vercel
2. ✅ Variable names are EXACT (case-sensitive)
3. ✅ You redeployed after adding variables
4. ✅ Check Vercel deployment logs

---

## 📋 FINAL CHECKLIST

Before considering setup complete:

- [ ] Supabase project created
- [ ] Database schema executed (`supabase-schema-complete.sql`)
- [ ] All 3 tables exist (admin_users, contacts, page_content)
- [ ] First admin user created in Auth → Users
- [ ] First admin user added to admin_users table
- [ ] All 4 environment variables added to Vercel
- [ ] All environments selected (Production, Preview, Development)
- [ ] Vercel project redeployed
- [ ] Contact form saves to Supabase
- [ ] Admin login works
- [ ] Dashboard loads without errors

---

## 🎯 QUICK REFERENCE

### Your Supabase Project:
- **URL:** `https://rtzydowdwivuiescwvsb.supabase.co`
- **Get Keys:** Settings → API Keys → "Legacy anon, service_role API keys"

### Environment Variables Needed:
1. `NEXT_PUBLIC_SUPABASE_URL`
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. `SUPABASE_URL`
4. `SUPABASE_SERVICE_ROLE_KEY`

### Important Files:
- `supabase-schema-complete.sql` - Run this in Supabase SQL Editor
- `VERCEL_SETUP.md` - Detailed Vercel instructions
- `SETUP_INSTRUCTIONS.md` - Full setup guide

---

**Ready to start? Begin with Step 1.1 above!**

