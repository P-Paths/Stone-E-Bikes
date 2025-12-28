# 🚀 Quick Start - 5 Minute Setup

## What You Need Right Now

### From Supabase (You're Already There!)

1. **Project URL:** `https://rtzydowdwivuiescwvsb.supabase.co` ✅ (you have this)

2. **Get Your Keys:**
   - Go to: **Settings → API Keys**
   - Click tab: **"Legacy anon, service_role API keys"**
   - Copy:
     - **anon public** key (click "Copy")
     - **service_role** key (click "Reveal" then "Copy")

### Quick Actions

**1. Run Database Schema (2 minutes)**
- Supabase Dashboard → SQL Editor
- Copy/paste `supabase-schema-complete.sql`
- Click "Run"
- ✅ Done!

**2. Add to Vercel (2 minutes)**
- Vercel Dashboard → Your Project → Settings → Environment Variables
- Add these 4:
  - `NEXT_PUBLIC_SUPABASE_URL` = `https://rtzydowdwivuiescwvsb.supabase.co`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = [your anon key]
  - `SUPABASE_URL` = `https://rtzydowdwivuiescwvsb.supabase.co`
  - `SUPABASE_SERVICE_ROLE_KEY` = [your service_role key]
- Check all environments (Production, Preview, Development)
- Redeploy!

**3. Create Admin User (1 minute)**
- Supabase → Authentication → Users → Add user
- Then add to `admin_users` table (see `COMPLETE_SETUP_CHECKLIST.md`)

**✅ That's it!**

See `COMPLETE_SETUP_CHECKLIST.md` for detailed step-by-step instructions.

