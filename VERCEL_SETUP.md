# Vercel Environment Variables Setup

## Quick Setup Guide

### Step 1: Get Your Supabase Credentials

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your **Stone E-Bikes** project
3. Go to **Settings** → **API**
4. Copy these 4 values:

   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (starts with `eyJ...`)
   - **service_role** key (starts with `eyJ...`) - **KEEP THIS SECRET!**

### Step 2: Add Environment Variables to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your **Stone E-Bikes** project
3. Click on the project
4. Go to **Settings** → **Environment Variables**
5. Add these 4 variables:

#### Required Environment Variables:

**1. Client-Side Variables (Safe for Browser):**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://your-project-id.supabase.co
Environment: Production, Preview, Development (check all)
```

```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: your_anon_public_key_here
Environment: Production, Preview, Development (check all)
```

**2. Server-Side Variables (Keep Secret):**
```
Name: SUPABASE_URL
Value: https://your-project-id.supabase.co
Environment: Production, Preview, Development (check all)
```

```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: your_service_role_key_here
Environment: Production, Preview, Development (check all)
```

### Step 3: Important Settings

- ✅ Check **Production**, **Preview**, and **Development** for all variables
- ✅ Make sure `NEXT_PUBLIC_*` variables are marked as "Public" (they're safe)
- ✅ Keep `SUPABASE_SERVICE_ROLE_KEY` as **Private** (never expose to client)

### Step 4: Redeploy

After adding the variables:

1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger a new deployment

**Important**: Environment variables are only available after redeploy!

### Step 5: Verify It's Working

1. After redeploy completes, visit your site
2. Try submitting the contact form
3. Check Supabase Dashboard → **Table Editor** → `contacts` table
4. You should see the submission appear

## Environment Variables Reference

### What Each Variable Does:

| Variable | Used For | Where | Security |
|----------|----------|-------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Client-side Supabase connection | Browser | ✅ Safe (public) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client-side authentication | Browser | ✅ Safe (public) |
| `SUPABASE_URL` | Server-side operations | Server only | ⚠️ Keep private |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin operations, bypasses RLS | Server only | 🔒 **SECRET** |

### Why Two Sets?

- **NEXT_PUBLIC_***: These are exposed to the browser and used for:
  - User authentication (login)
  - Client-side data fetching
  - Protected by Row Level Security (RLS)

- **Server Variables**: These stay on the server and are used for:
  - Admin operations
  - Bypassing RLS when needed
  - Creating admin users
  - Service-level operations

## Troubleshooting

### Variables Not Working After Deploy?

1. **Make sure you redeployed** after adding variables
2. Check that all environments are selected (Production, Preview, Development)
3. Verify variable names are **exact** (case-sensitive)
4. Check Vercel deployment logs for errors

### "Missing Supabase" Errors?

1. Verify all 4 variables are set in Vercel
2. Check variable names match exactly (no typos)
3. Make sure you redeployed after adding them
4. Check Vercel logs: **Deployments** → Click deployment → **Logs**

### Contact Form Not Saving?

1. Verify `contacts` table exists in Supabase
2. Check RLS policies are set (see `supabase-schema-complete.sql`)
3. Test in Supabase SQL Editor:
   ```sql
   SELECT * FROM public.contacts LIMIT 5;
   ```

### Admin Login Not Working?

1. Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
2. Check that user exists in Supabase Auth → Users
3. Verify user is in `admin_users` table
4. Check browser console for errors

## Quick Checklist

Before going live, verify:

- [ ] All 4 environment variables added to Vercel
- [ ] All environments selected (Production, Preview, Development)
- [ ] Redeployed after adding variables
- [ ] Contact form saves to Supabase
- [ ] Admin login works
- [ ] Dashboard loads without errors

## Need to Update Variables?

1. Go to **Settings** → **Environment Variables**
2. Click the variable you want to update
3. Click **Edit**
4. Update the value
5. **Redeploy** for changes to take effect

## Security Reminders

- ✅ `NEXT_PUBLIC_*` variables are safe to expose (they're public by design)
- 🔒 `SUPABASE_SERVICE_ROLE_KEY` is a secret - never commit to git
- 🔒 Never share your service role key publicly
- ✅ Vercel automatically keeps server variables private

