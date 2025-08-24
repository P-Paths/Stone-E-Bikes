# Stonee Bikes - Reusable E-commerce Skeleton

A high-performance, mobile-first e-commerce application built with React, designed as a reusable skeleton for quick rebranding. Perfect for bike shops, accessory stores, and similar retail businesses.

## 🚀 Features

- **Mobile-First Design** - Optimized for all devices with responsive layouts
- **Complete E-commerce** - Product catalog, shopping cart, Stripe checkout
- **Blog System** - Built-in blog with categories and content management
- **Easy Rebranding** - Single configuration file for complete theme customization
- **SEO Optimized** - Meta tags, OpenGraph, structured data ready
- **Modern Stack** - React 18, TypeScript, Tailwind CSS, PostgreSQL
- **Payment Ready** - Stripe integration with test and live modes
- **Contact Forms** - Lead capture with database storage

## 📁 Project Structure

```
stonee-bikes/
├── client/src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components (buttons, inputs, etc.)
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── ProductCard.tsx     # Product display component
│   │   └── CartDrawer.tsx      # Shopping cart sidebar
│   ├── pages/
│   │   ├── Home.tsx            # Homepage with hero, featured products
│   │   ├── Shop.tsx            # Product catalog with filters
│   │   ├── Accessories.tsx     # Accessories page
│   │   ├── Cart.tsx            # Shopping cart page
│   │   ├── Checkout.tsx        # Stripe checkout flow
│   │   ├── Blog.tsx            # Blog listing
│   │   ├── About.tsx           # About us page
│   │   └── Contact.tsx         # Contact form
│   ├── contexts/
│   │   ├── CartContext.tsx     # Shopping cart state management
│   │   └── ThemeContext.tsx    # Theme configuration provider
│   ├── styles/
│   │   └── theme.config.ts     # 🎨 MAIN THEME CONFIG FILE
│   └── App.tsx                 # Main app with routing
├── server/
│   ├── db.ts                   # Database connection
│   ├── routes.ts               # API routes
│   ├── storage.ts              # Database operations
│   └── index.ts                # Server entry point
├── shared/
│   └── schema.ts               # Database schema & types
└── README.md
```

## 🎨 THEME SWAP GUIDE

### Quick Rebranding in 3 Steps

**1. Edit the Theme Configuration**
Open `client/src/styles/theme.config.ts` and customize:

```typescript
export const defaultTheme: ThemeConfig = {
  brandName: "Your Brand Name",
  logo: {
    text: "Your Logo Text",
    imageUrl: "/path/to/your/logo.png", // Optional logo image
  },
  colors: {
    primary: "#YOUR_PRIMARY_COLOR",    // Main brand color
    secondary: "#YOUR_SECONDARY_COLOR", // Accent color
    accent: "#YOUR_ACCENT_COLOR",       // Call-to-action color
    muted: "#YOUR_MUTED_COLOR",         // Text muted color
    background: "#FFFFFF",              // Background color
    foreground: "#000000",              // Text color
  },
  fonts: {
    sans: "Your Font, system-ui, sans-serif",
    serif: "Your Serif Font, serif",
    mono: "Your Mono Font, monospace",
  },
  contact: {
    phone: "Your Phone Number",
    email: "your@email.com",
    address: "Your Business Address",
  },
  social: {
    facebook: "https://facebook.com/yourbrand",
    twitter: "https://twitter.com/yourbrand",
    instagram: "https://instagram.com/yourbrand",
  },
};
```

**2. Replace Images & Content**
- Add your product images to the database via seed endpoints
- Update hero section images in `client/src/pages/Home.tsx`
- Replace placeholder images with your brand assets

**3. Update Content**
- Modify the About page story in `client/src/pages/About.tsx`
- Update blog posts via the seeding endpoint
- Customize product descriptions in the database

### Advanced Customization

**Custom CSS Variables**
The theme automatically generates CSS variables from your config:
- `--primary` → Your primary color
- `--secondary` → Your secondary color
- `--brand-font` → Your chosen font

**Typography & Layout**
Edit `client/src/index.css` for:
- Custom font loading
- Additional color variants
- Responsive breakpoints
- Animation preferences

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (optional - has fallbacks)
- Stripe account (optional - demo mode available)
- Supabase account (optional - has fallbacks)

### Setup Instructions

**1. Clone and Install**
```bash
git clone <your-repo>
cd stonee-bikes
npm install
```

**2. Environment Setup**
Create your environment variables in Replit Secrets or `.env.local`:

```bash
# Database (PostgreSQL)
DATABASE_URL=your_postgresql_connection_string

# Stripe Keys (get from https://dashboard.stripe.com/apikeys)
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Supabase - CLIENT (safe for browser)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_public_key

# Supabase - SERVER (never expose to client)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_secret_key

# App Configuration
WEBSITE_ID=2
PAYMENTS_ENABLED=false
```

**3. Database Setup (PostgreSQL)**
```bash
# Push schema to database
npm run db:push

# Seed with sample data
curl -X POST http://localhost:5000/api/seed/categories
curl -X POST http://localhost:5000/api/seed/products  
curl -X POST http://localhost:5000/api/seed/blog
```

**4. Start Development**
```bash
npm run dev
```

Visit `http://localhost:5000` to see your store!

## 📧 Leads Setup (Supabase)

### Multi-Provider Lead System
The app uses intelligent fallbacks for lead capture:

1. **Supabase** (preferred) - Centralized across all brands
2. **PostgreSQL** (fallback) - Local database storage  
3. **Mock** (fallback) - Demo mode for development

### 60-Second Supabase Setup

**1. Create Supabase Project**
- Go to [supabase.com](https://supabase.com)
- Create new project
- Note your project URL and keys

**2. Run SQL Schema**
In Supabase SQL Editor, execute:

```sql
-- Multi-brand lead management
create table if not exists public.websites (
  id bigint generated always as identity primary key,
  name text not null,
  domain text,
  created_at timestamptz default now()
);

create table if not exists public.leads (
  id bigint generated always as identity primary key,
  website_id bigint not null references public.websites(id),
  name text,
  email text,
  phone text,
  message text,
  created_at timestamptz default now()
);

-- Simple RLS for now
alter table public.leads enable row level security;
create policy "service role full access" on public.leads
  for all using (true) with check (true);

-- Seed websites
insert into public.websites (id, name, domain) values 
(1, 'Her Cookie Shop', 'hercookieshop.com'),
(2, 'Stonee Bikes', 'stoneebikes.com'),
(3, 'Prestigious Paths', 'prestigiouspaths.com')
on conflict (id) do nothing;
```

**3. Configure Environment Variables**
```bash
# Get these from Supabase Project Settings > API
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_public_key
SUPABASE_URL=https://your-project.supabase.co  
SUPABASE_SERVICE_ROLE_KEY=your_service_role_secret_key

# Set your brand ID (2 = Stonee Bikes)
WEBSITE_ID=2
```

**SECURITY**: Service role key is server-only. Never expose to client code.

## 🛡️ Fallbacks (Postgres or Mock)

### What Happens When Services Are Missing

| Scenario | Leads Storage | Behavior |
|----------|---------------|----------|
| **All configured** | Supabase | ✅ Production ready |
| **No Supabase** | PostgreSQL | ✅ Works locally |
| **No databases** | Mock mode | ⚠️ Logs warning, returns success |

### Demo Never Crashes
The app gracefully handles missing services:
- Missing Supabase → Falls back to PostgreSQL
- Missing PostgreSQL → Uses mock responses
- Missing Stripe → Shows demo mode UI

## 💳 Payments: Demo vs Test Mode

### Demo Mode (Default: PAYMENTS_ENABLED=false)
- ✅ Store functions fully
- ❌ Checkout shows "Demo Mode" message
- 📊 Perfect for client demos and development

### Test Mode (PAYMENTS_ENABLED=true)
- ✅ Full Stripe integration
- 💳 Use test card: `4242 4242 4242 4242`
- 🔒 Requires STRIPE_SECRET_KEY + VITE_STRIPE_PUBLIC_KEY

```bash
# Enable payments
PAYMENTS_ENABLED=true
VITE_STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## 🏢 Multi-Brand: WEBSITE_ID Usage

Each brand gets a unique WEBSITE_ID:
- `1` = Her Cookie Shop
- `2` = Stonee Bikes (default)
- `3` = Prestigious Paths

All leads are captured in one Supabase database with website_id for filtering. Perfect for managing multiple brands from one dashboard.

### Brand-Specific Deployment
```bash
# Deploy Her Cookie Shop
WEBSITE_ID=1
# ... configure theme.config.ts for cookie theme

# Deploy Stonee Bikes  
WEBSITE_ID=2
# ... configure theme.config.ts for bike theme
```

## 🛍️ E-commerce Features

### Shopping Cart
- Persistent localStorage cart
- Add/remove/update quantities
- Real-time total calculation
- Mobile-optimized drawer interface

### Payment Processing
- Stripe Elements integration
- Secure card processing
- Order confirmation flow
- Test mode ready

### Product Management
- Category-based organization
- Featured products system
- Image optimization
- Inventory tracking
- SEO-friendly URLs

### Blog System
- Category organization
- Published/draft states
- Featured post support
- Responsive image handling

## 📱 Mobile Optimization

- **Touch-friendly** navigation and buttons
- **Responsive images** with proper sizing
- **Fast loading** with optimized assets
- **Offline-ready** cart persistence
- **PWA-ready** architecture

## 🎯 SEO Features

- **Meta tags** on all pages
- **OpenGraph** social sharing
- **Structured data** for products
- **Semantic HTML** structure
- **Fast loading** scores

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run db:push      # Push schema changes
npm run db:studio    # Database admin interface
```

### API Endpoints
- `GET /api/products` - List all products
- `GET /api/products/featured` - Featured products
- `GET /api/categories` - Product categories
- `GET /api/blog` - Published blog posts
- `POST /api/contact` - Contact form submission
- `POST /api/create-payment-intent` - Stripe checkout

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your Git repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Manual Deployment
1. Build the project: `npm run build`
2. Set production environment variables
3. Deploy to your hosting platform

## 🔄 Converting to Next.js

To migrate this React app to Next.js:

1. **Install Next.js**: `npm install next react react-dom`
2. **Move pages**: Convert `client/src/pages/*` to Next.js pages directory
3. **Update routing**: Replace Wouter with Next.js router
4. **API routes**: Move `server/routes.ts` endpoints to Next.js API routes
5. **Static assets**: Move to Next.js `public` directory
6. **Configuration**: Update build scripts and configuration files

The component structure and theme system will work seamlessly with Next.js with minimal changes.

## 📄 License

MIT License - Perfect for commercial use and rebranding.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push and create a Pull Request

---

**Ready to launch your bike store?** This skeleton provides everything you need to start selling online in minutes, not weeks.