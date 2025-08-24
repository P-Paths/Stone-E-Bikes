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
- PostgreSQL database
- Stripe account (free)

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
# Database
DATABASE_URL=your_postgresql_connection_string

# Stripe Keys (get from https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_publishable_key
```

**3. Database Setup**
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