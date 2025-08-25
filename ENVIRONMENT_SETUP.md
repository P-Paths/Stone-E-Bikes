# Environment Variables Setup for Stoney Bikes

## **Supabase Configuration**

### **Client-Side Variables (NEXT_PUBLIC_*)**
These are safe for the browser and used in components:

```env
# Supabase Client (Safe for browser)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key_here
```

### **Server-Side Variables (Private)**
These are only used in API routes and server components:

```env
# Supabase Server (Never expose to client)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## **How to Get Your Supabase Keys**

1. **Go to your Supabase project dashboard**
2. **Navigate to Settings > API**
3. **Copy the following:**
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY`

## **File Structure**

```
lib/
├── supabase/
│   ├── client.ts     # Client-side Supabase (safe for browser)
│   └── server.ts     # Server-side Supabase (API routes only)
├── queries/
│   ├── products.ts   # Product queries (client + server)
│   └── blog.ts       # Blog queries (client + server)
```

## **Query Organization**

### **Client Queries** (Safe for components)
- `getProducts()`
- `getFeaturedProducts()`
- `getBlogPosts()`
- `getBlogPostBySlug()`

### **Server Queries** (API routes only)
- `createProduct()`
- `updateProduct()`
- `deleteProduct()`
- `createBlogPost()`
- `updateBlogPost()`
- `deleteBlogPost()`

## **API Routes**

- `GET /api/products` - Get all products
- `POST /api/products` - Create product (admin)
- `GET /api/products/featured` - Get featured products
- `GET /api/blog` - Get all blog posts
- `POST /api/blog` - Create blog post (admin)

## **Security Notes**

✅ **Safe for browser:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

❌ **Never expose to browser:**
- `SUPABASE_SERVICE_ROLE_KEY`

## **Testing the Setup**

1. **Add your environment variables**
2. **Restart the Next.js dev server**
3. **Visit http://localhost:3000**
4. **Check browser console for any errors**
5. **Test API routes:**
   - `http://localhost:3000/api/products`
   - `http://localhost:3000/api/products/featured`
   - `http://localhost:3000/api/blog`
