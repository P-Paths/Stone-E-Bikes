# ✅ Next Steps - You're Almost Done!

## What You've Completed:
- ✅ Got your Supabase credentials
- ✅ Created `.env.local` for local development

## What's Left:

### 1. Run Database Schema in Supabase (2 minutes)

1. **Go to Supabase Dashboard**
2. **Click:** SQL Editor (left sidebar)
3. **Click:** "New Query"
4. **Open file:** `supabase-schema-complete.sql` from your project
5. **Copy the ENTIRE file** and paste into SQL Editor
6. **Click:** "Run" button
7. **Verify:** Should see "Success. No rows returned"

**Quick verification query:**
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('admin_users', 'contacts', 'page_content');
```
Should show all 3 tables.

---

### 2. Add Variables to Vercel (3 minutes)

1. **Go to:** [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Find:** Your Stone E-Bikes project
3. **Click:** Settings → Environment Variables
4. **Add the 4 variables** (see `VERCEL_ENV_VARIABLES.md` for exact values)
5. **Important:** Check ✅ Production, ✅ Preview, ✅ Development for each
6. **Redeploy:** Deployments → ⋯ → Redeploy

---

### 3. Create Your Admin User (2 minutes)

**Part A: Create Auth User**
1. Supabase Dashboard → **Authentication** → **Users**
2. Click **"Add user"** → **"Create new user"**
3. Enter:
   - Email: your email
   - Password: create a password
   - ✅ Check "Auto Confirm User"
4. Click **"Create user"**
5. **Copy the User ID** (UUID) - you'll need this

**Part B: Add to Admin Table**
1. Go to **SQL Editor**
2. Run this (replace with YOUR values):
```sql
INSERT INTO public.admin_users (id, email, role, first_name, last_name)
VALUES (
  'PASTE_YOUR_USER_ID_HERE',  -- UUID from Part A, step 5
  'your-email@example.com',    -- Your email
  'super_admin',
  'Your',
  'Name'
);
```

---

### 4. Test Everything (2 minutes)

1. **Test Contact Form:**
   - Visit your live site
   - Go to `/contact`
   - Submit the form
   - Check Supabase → Table Editor → `contacts` table
   - ✅ Should see your submission!

2. **Test Admin Login:**
   - Visit `your-site.com/admin/login`
   - Login with your credentials
   - ✅ Should see dashboard!

---

## 🎯 Quick Reference

**Your Supabase:**
- URL: `https://rtzydowdwivuiescwvsb.supabase.co`
- Keys: Already saved in `.env.local`

**Files to Use:**
- `supabase-schema-complete.sql` - Run this in Supabase SQL Editor
- `VERCEL_ENV_VARIABLES.md` - Copy/paste values for Vercel
- `COMPLETE_SETUP_CHECKLIST.md` - Full detailed guide

**Status:**
- ✅ Local environment configured (`.env.local` created)
- ⏳ Database schema needs to run
- ⏳ Vercel variables need to be added
- ⏳ Admin user needs to be created

---

**Ready? Start with Step 1 (Run Database Schema) above!**

