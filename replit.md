# Overview

This is a full-stack e-commerce application for a bicycle store called "Stonee Bikes". The application features a modern React frontend with a Node.js/Express backend, designed to showcase and sell bicycles and accessories. It includes product browsing, shopping cart functionality, payment processing via Stripe, blog content, and contact forms.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with page-based navigation
- **State Management**: React Context for cart state and theme configuration, TanStack Query for server state
- **UI Components**: Radix UI primitives with custom Tailwind CSS styling (shadcn/ui design system)
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Forms**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful APIs with JSON responses
- **Request Handling**: Express middleware for logging, JSON parsing, and error handling
- **Development**: Hot reload via Vite integration in development mode

## Data Storage
- **Database**: PostgreSQL via Neon Database serverless connection
- **ORM**: Drizzle ORM with schema-first approach
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Connection pooling with WebSocket support for serverless environments

## Authentication & Sessions
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **User Management**: Basic user creation and lookup functionality built into storage layer

## Payment Processing
- **Provider**: Stripe integration for payment processing
- **Implementation**: Stripe Elements for secure card collection, server-side payment intent creation
- **Frontend**: React Stripe.js components for payment forms

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Build Tools**: Vite with TypeScript, PostCSS, Autoprefixer
- **Routing**: Wouter for lightweight client-side routing

### UI and Styling
- **Design System**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with class variance authority for component variants
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)

### Database and Backend
- **Database**: Neon Database (PostgreSQL) with WebSocket support
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking and form validation

### Payment Processing
- **Stripe**: Both client-side (@stripe/stripe-js, @stripe/react-stripe-js) and server-side Stripe SDK

### Development Tools
- **Development Environment**: Replit-specific plugins for error handling and cartography
- **Type Safety**: Shared TypeScript types between client and server
- **Hot Reload**: Vite middleware integration with Express for development

### Third-party Services
- **CDN**: Unsplash for placeholder product images
- **Email/Contact**: Form submission storage in database (no external email service configured)
- **Analytics**: None currently integrated
- **Error Monitoring**: Basic error handling without external monitoring service