import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertProductSchema, insertCategorySchema, insertBlogPostSchema } from "@shared/schema";
import { createLead } from "./lib/leads";
import { z } from "zod";

const paymentsEnabled = process.env.PAYMENTS_ENABLED?.toLowerCase() === 'true';

let stripe: Stripe | null = null;
if (paymentsEnabled) {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('PAYMENTS_ENABLED=true but missing STRIPE_SECRET_KEY');
  }
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-07-30.basil",
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching products: " + error.message });
    }
  });

  app.get("/api/products/featured", async (req, res) => {
    try {
      const products = await storage.getFeaturedProducts();
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching featured products: " + error.message });
    }
  });

  app.get("/api/products/:slug", async (req, res) => {
    try {
      const product = await storage.getProductBySlug(req.params.slug);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching product: " + error.message });
    }
  });

  // Categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching categories: " + error.message });
    }
  });

  app.get("/api/categories/:slug/products", async (req, res) => {
    try {
      const category = await storage.getCategoryBySlug(req.params.slug);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      const products = await storage.getProductsByCategory(category.id);
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching category products: " + error.message });
    }
  });

  // Blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const blogPosts = await storage.getPublishedBlogPosts();
      res.json(blogPosts);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching blog posts: " + error.message });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const blogPost = await storage.getBlogPostBySlug(req.params.slug);
      if (!blogPost || !blogPost.published) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(blogPost);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching blog post: " + error.message });
    }
  });

  // Contact form - now uses multi-provider leads adapter
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, message } = req.body;
      const website_id = Number(process.env.WEBSITE_ID || 2);
      
      // Use new leads adapter with fallback logic
      const result = await createLead({
        name: `${firstName || ''} ${lastName || ''}`.trim(),
        email,
        message,
        website_id
      });

      res.json({ 
        message: "Message sent successfully",
        ...result
      });
    } catch (error: any) {
      res.status(500).json({ message: "Error submitting contact form: " + error.message });
    }
  });

  // Stripe payment
  app.post("/api/create-payment-intent", async (req, res) => {
    if (!paymentsEnabled) {
      // Return a demo client secret for testing the UI
      return res.status(200).json({ 
        message: "Demo mode - using test payment intent",
        demo: true,
        clientSecret: "pi_demo_secret_test123"
      });
    }

    if (!stripe) {
      return res.status(500).json({ message: "Stripe not configured" });
    }

    try {
      const { amount } = req.body;
      
      if (!amount || amount <= 0) {
        return res.status(400).json({ message: "Invalid amount" });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        metadata: {
          integration_check: "accept_a_payment",
        },
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      res.status(500).json({ message: "Error creating payment intent: " + error.message });
    }
  });

  // Seed data endpoints (for development)
  app.post("/api/seed/categories", async (req, res) => {
    try {
      const bikesCategory = await storage.createCategory({
        name: "Bikes",
        slug: "bikes",
        description: "Premium bicycles for all terrains and purposes"
      });

      const accessoriesCategory = await storage.createCategory({
        name: "Accessories",
        slug: "accessories",
        description: "Essential bike accessories and gear"
      });

      res.json({ categories: [bikesCategory, accessoriesCategory] });
    } catch (error: any) {
      res.status(500).json({ message: "Error seeding categories: " + error.message });
    }
  });

  app.post("/api/seed/products", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      const bikesCategory = categories.find(c => c.slug === "bikes");
      const accessoriesCategory = categories.find(c => c.slug === "accessories");

      if (!bikesCategory || !accessoriesCategory) {
        return res.status(400).json({ message: "Categories must be created first" });
      }

      // Seed bikes
      const bikes = [
        {
          name: "TrailMaster Pro",
          slug: "trailmaster-pro",
          description: "High-performance mountain bike designed for serious trail riders. Features lightweight aluminum frame, advanced suspension, and premium components.",
          price: "2299.00",
          imageUrl: "https://images.unsplash.com/photo-1544191696-15693072fb5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          categoryId: bikesCategory.id,
          featured: true,
          specifications: {
            frame: "Aluminum Alloy",
            gears: "21-speed",
            brakes: "Hydraulic Disc",
            weight: "15kg"
          }
        },
        {
          name: "City Cruiser Elite",
          slug: "city-cruiser-elite",
          description: "Perfect urban companion for daily commuting and weekend adventures. Comfortable geometry with modern styling.",
          price: "1599.00",
          imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          categoryId: bikesCategory.id,
          featured: true,
          specifications: {
            frame: "Steel",
            gears: "7-speed",
            brakes: "V-Brake",
            weight: "18kg"
          }
        },
        {
          name: "E-Power Max",
          slug: "e-power-max",
          description: "Electric bike with extended range and smart features. Perfect for long commutes and hill climbing.",
          price: "3499.00",
          imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          categoryId: bikesCategory.id,
          featured: true,
          specifications: {
            frame: "Carbon Fiber",
            motor: "250W",
            battery: "500Wh",
            range: "80km"
          }
        },
        {
          name: "Road Runner Speed",
          slug: "road-runner-speed",
          description: "Aerodynamic road bike built for speed and endurance. Professional-grade components for serious cyclists.",
          price: "2799.00",
          imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          categoryId: bikesCategory.id,
          featured: false,
          specifications: {
            frame: "Carbon Fiber",
            gears: "22-speed",
            brakes: "Caliper",
            weight: "8kg"
          }
        }
      ];

      // Seed accessories
      const accessories = [
        {
          name: "Safety Helmet Pro",
          slug: "safety-helmet-pro",
          description: "Ultra-light helmet with advanced ventilation system. CPSC and CE certified for maximum protection.",
          price: "89.00",
          imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          categoryId: accessoriesCategory.id,
          featured: false
        },
        {
          name: "LED Light Set",
          slug: "led-light-set",
          description: "Rechargeable front and rear lights with multiple brightness modes. USB charging with long battery life.",
          price: "45.00",
          imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          categoryId: accessoriesCategory.id,
          featured: false
        },
        {
          name: "Security Lock",
          slug: "security-lock",
          description: "Heavy-duty chain lock with hardened steel construction. Includes two keys and mounting bracket.",
          price: "32.00",
          imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          categoryId: accessoriesCategory.id,
          featured: false
        },
        {
          name: "Hydration Kit",
          slug: "hydration-kit",
          description: "BPA-free water bottle with quick-release holder. Perfect for long rides and training sessions.",
          price: "25.00",
          imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          categoryId: accessoriesCategory.id,
          featured: false
        }
      ];

      const createdBikes = await Promise.all(bikes.map(bike => storage.createProduct(bike)));
      const createdAccessories = await Promise.all(accessories.map(accessory => storage.createProduct(accessory)));

      res.json({ 
        bikes: createdBikes, 
        accessories: createdAccessories,
        message: "Products seeded successfully" 
      });
    } catch (error: any) {
      res.status(500).json({ message: "Error seeding products: " + error.message });
    }
  });

  app.post("/api/seed/blog", async (req, res) => {
    try {
      const blogPosts = [
        {
          title: "Essential Bike Maintenance Tips",
          slug: "essential-bike-maintenance-tips",
          excerpt: "Keep your bike in top condition with these expert maintenance tips and tricks.",
          content: "Regular maintenance is crucial for bike safety and performance. Here are the essential tips every cyclist should know...",
          imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          category: "MAINTENANCE",
          published: true,
          publishedAt: new Date()
        },
        {
          title: "Best Cycling Routes This Spring",
          slug: "best-cycling-routes-spring",
          excerpt: "Discover amazing cycling routes perfect for spring adventures and scenic rides.",
          content: "Spring is the perfect time to explore new cycling routes. Here are our top recommendations for scenic and challenging rides...",
          imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          category: "ADVENTURE",
          published: true,
          publishedAt: new Date()
        },
        {
          title: "The Future of E-Bikes",
          slug: "future-of-e-bikes",
          excerpt: "Explore the latest innovations in electric bicycle technology and what's coming next.",
          content: "Electric bikes are revolutionizing transportation. Let's explore the latest technology and future innovations...",
          imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          category: "TECHNOLOGY",
          published: true,
          publishedAt: new Date()
        }
      ];

      const createdPosts = await Promise.all(blogPosts.map(post => storage.createBlogPost(post)));
      res.json({ blogPosts: createdPosts, message: "Blog posts seeded successfully" });
    } catch (error: any) {
      res.status(500).json({ message: "Error seeding blog posts: " + error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
