# Vercel Environment Variables - Copy & Paste

## Add These to Vercel

Go to: **Vercel Dashboard → Your Stone E-Bikes Project → Settings → Environment Variables**

Add each variable separately:

---

### Variable 1: NEXT_PUBLIC_SUPABASE_URL

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://rtzydowdwivuiescwvsb.supabase.co
✅ Check: Production, Preview, Development
```

---

### Variable 2: NEXT_PUBLIC_SUPABASE_ANON_KEY

```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0enlkb3dkd2l2dWllc2N3dnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4OTY0MzEsImV4cCI6MjA4MjQ3MjQzMX0.oXfEvW1L7qL0JXoqtzjVFUycx9IAU2DC_hZp3tcbmx4
✅ Check: Production, Preview, Development
```

---

### Variable 3: SUPABASE_URL

```
Name: SUPABASE_URL
Value: https://rtzydowdwivuiescwvsb.supabase.co
✅ Check: Production, Preview, Development
```

---

### Variable 4: SUPABASE_SERVICE_ROLE_KEY

```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0enlkb3dkd2l2dWllc2N3dnNiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Njg5NjQzMSwiZXhwIjoyMDgyNDcyNDMxfQ.rEfaQ_k7-xlyVn-wfvMg5z34hVPxd3NlKYrTY8pp5KA
✅ Check: Production, Preview, Development
⚠️ Keep PRIVATE (don't mark as public)
```

---

## After Adding All 4 Variables:

1. **Redeploy** your project:
   - Go to **Deployments** tab
   - Click **⋯** on latest deployment
   - Click **Redeploy**
   - Wait for it to complete

2. **Test:**
   - Visit your live site
   - Try the contact form
   - Check Supabase → Table Editor → `contacts` table

---

## For Local Development:

Create `.env.local` in your project root with:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://rtzydowdwivuiescwvsb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0enlkb3dkd2l2dWllc2N3dnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4OTY0MzEsImV4cCI6MjA4MjQ3MjQzMX0.oXfEvW1L7qL0JXoqtzjVFUycx9IAU2DC_hZp3tcbmx4
SUPABASE_URL=https://rtzydowdwivuiescwvsb.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0enlkb3dkd2l2dWllc2N3dnNiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Njg5NjQzMSwiZXhwIjoyMDgyNDcyNDMxfQ.rEfaQ_k7-xlyVn-wfvMg5z34hVPxd3NlKYrTY8pp5KA
```

