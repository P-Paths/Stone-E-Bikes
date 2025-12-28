import { 
  type Product, type Category, type BlogPost, type ContactSubmission,
  type InsertProduct, type InsertCategory, type InsertBlogPost, type InsertContactSubmission,
  type Order, type InsertOrder, type OrderItem, type InsertOrderItem,
  type User, type InsertUser
} from "@shared/schema";

// Mock data for when database is not available
const mockProducts: Product[] = [
  {
    id: "askgo-26",
    name: "26\" ASKGO (700W)",
    slug: "askgo-26",
    description: "High-performance electric bike with 700W motor and 26 inch wheels. Perfect for commuting and recreational riding.",
    price: "701.58",
    imageUrl: "/images/e-bikes/askgo-26.png",
    categoryId: "bikes",
    featured: true,
    inStock: true,
    specifications: {
      motor: "700W",
      battery: "48V 12Ah",
      range: "40-60 miles",
      maxSpeed: "28 mph",
      weight: "65 lbs"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "okonge-fat-20",
    name: "20\" Fat Tire OKONGE",
    slug: "okonge-fat-20", 
    description: "Compact fat tire e-bike perfect for urban commuting and light off-road adventures.",
    price: "599.99",
    imageUrl: "/images/e-bikes/okonge-fat-20.png",
    categoryId: "bikes",
    featured: true,
    inStock: true,
    specifications: {
      motor: "500W",
      battery: "36V 10Ah",
      range: "25-35 miles",
      maxSpeed: "20 mph",
      weight: "55 lbs"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "keteles-fat-26",
    name: "26\" Fat Tire KETELES",
    slug: "keteles-fat-26",
    description: "Premium fat tire e-bike designed for all-terrain adventures and extreme weather conditions.",
    price: "899.99",
    imageUrl: "/images/e-bikes/keteles-fat-26.png",
    categoryId: "bikes",
    featured: true,
    inStock: true,
    specifications: {
      motor: "750W",
      battery: "48V 15Ah",
      range: "50-70 miles",
      maxSpeed: "30 mph",
      weight: "70 lbs"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "coz-trike-24",
    name: "24\" Trike CO-Z",
    slug: "coz-trike-24",
    description: "Stable three-wheel electric trike perfect for seniors and those seeking extra stability.",
    price: "1299.99",
    imageUrl: "/images/e-bikes/24\" Trike CO-Z.png",
    categoryId: "bikes",
    featured: false,
    inStock: true,
    specifications: {
      motor: "500W",
      battery: "48V 12Ah",
      range: "30-45 miles",
      maxSpeed: "15 mph",
      weight: "85 lbs"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "okonge-trike-20",
    name: "20\" Trike OKONGE",
    slug: "okonge-trike-20",
    description: "Compact electric trike ideal for urban commuting and short-distance travel.",
    price: "1099.99",
    imageUrl: "/images/e-bikes/20\" Trike OKONGE.png",
    categoryId: "bikes",
    featured: false,
    inStock: true,
    specifications: {
      motor: "350W",
      battery: "36V 10Ah",
      range: "20-30 miles",
      maxSpeed: "12 mph",
      weight: "75 lbs"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // Accessories
  {
    id: "helmet-premium",
    name: "Premium Safety Helmet",
    slug: "helmet-premium",
    description: "High-quality safety helmet with MIPS technology for maximum protection.",
    price: "89.99",
    imageUrl: "/images/accessories/Helmet.jpg",
    categoryId: "accessories",
    featured: true,
    inStock: true,
    specifications: {
      material: "ABS Shell with EPS Foam",
      weight: "280g",
      certification: "CPSC, EN 1078",
      ventilation: "18 vents"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "bike-lock-u",
    name: "Heavy Duty U-Lock",
    slug: "bike-lock-u",
    description: "Ultra-secure U-lock with hardened steel construction and anti-theft protection.",
    price: "49.99",
    imageUrl: "/images/accessories/e-bike Lock.jpg",
    categoryId: "accessories",
    featured: true,
    inStock: true,
    specifications: {
      material: "Hardened Steel",
      length: "9 inches",
      weight: "2.2 lbs",
      security: "Sold Secure Gold"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "front-light-led",
    name: "LED Front Light",
    slug: "front-light-led",
    description: "Bright LED front light with multiple modes and USB charging.",
    price: "34.99",
    imageUrl: "/images/accessories/front light for e-bike.jpg",
    categoryId: "accessories",
    featured: true,
    inStock: true,
    specifications: {
      brightness: "800 lumens",
      battery: "USB rechargeable",
      runtime: "4-8 hours",
      modes: "High, Medium, Low, Flash"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "rear-light-safety",
    name: "Safety Rear Light",
    slug: "rear-light-safety",
    description: "High-visibility rear light with brake sensing and multiple flash patterns.",
    price: "24.99",
    imageUrl: "/images/accessories/backlight for e-bike.jpg",
    categoryId: "accessories",
    featured: false,
    inStock: true,
    specifications: {
      brightness: "50 lumens",
      battery: "AAA batteries",
      runtime: "50+ hours",
      features: "Brake sensing, auto mode"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "bike-mirror",
    name: "Handlebar Mirror",
    slug: "bike-mirror",
    description: "Adjustable handlebar mirror for better rear visibility and safety.",
    price: "19.99",
    imageUrl: "/images/accessories/e-bike Mirror.jpg",
    categoryId: "accessories",
    featured: false,
    inStock: true,
    specifications: {
      diameter: "3 inches",
      material: "Acrylic mirror",
      mounting: "Handlebar clamp",
      adjustment: "360° rotation"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "bike-gloves",
    name: "Cycling Gloves",
    slug: "bike-gloves",
    description: "Comfortable cycling gloves with gel padding and touchscreen compatibility.",
    price: "29.99",
    imageUrl: "/images/accessories/e-bike Gloves.jpg",
    categoryId: "accessories",
    featured: false,
    inStock: true,
    specifications: {
      material: "Synthetic leather",
      padding: "Gel palm padding",
      features: "Touchscreen compatible",
      sizes: "S, M, L, XL"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "bike-basket",
    name: "Front Basket",
    slug: "bike-basket",
    description: "Sturdy front basket for carrying groceries, bags, and other items.",
    price: "39.99",
    imageUrl: "/images/accessories/Basket.jpg",
    categoryId: "accessories",
    featured: false,
    inStock: true,
    specifications: {
      capacity: "25 lbs",
      material: "Steel wire",
      mounting: "Handlebar attachment",
      dimensions: "12\" x 8\" x 6\""
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const mockCategories: Category[] = [
  {
    id: "bikes",
    name: "E-Bikes",
    slug: "bikes",
    description: "Premium electric bicycles for every adventure",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories", 
    description: "Essential accessories and safety gear",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const mockBlogPosts: BlogPost[] = [
  {
    id: "bike-maintenance-spring",
    title: "Spring E-Bike Maintenance: Your Complete Guide",
    slug: "bike-maintenance-spring",
    excerpt: "Get your e-bike ready for spring riding with these essential maintenance tips and safety checks.",
    content: `Spring is the perfect time to give your e-bike a thorough check-up after the winter months. Here's your comprehensive guide to getting your electric bike ready for the riding season.

## Pre-Ride Safety Checklist

**Battery Care:**
- Check battery charge level and ensure it's holding a full charge
- Clean battery contacts with a dry cloth
- Inspect battery case for any cracks or damage
- Test charging system to ensure proper connection

**Tire and Wheel Maintenance:**
- Check tire pressure (typically 30-50 PSI for e-bikes)
- Inspect tires for wear, cracks, or embedded debris
- Ensure wheels are true and spokes are tight
- Test brakes for proper engagement and pad wear

**Electrical System:**
- Test all lights (front, rear, and brake lights)
- Check display screen functionality
- Ensure throttle and pedal assist work smoothly
- Test all buttons and controls

## Essential Tools for E-Bike Maintenance

Having the right tools makes maintenance much easier:
- Tire pressure gauge
- Allen wrench set
- Chain lubricant
- Clean rags
- Battery charger
- Multimeter for electrical testing

## When to Seek Professional Help

While basic maintenance can be done at home, consider professional service for:
- Battery replacement or major electrical issues
- Brake system adjustments or bleeding
- Motor servicing
- Complex drivetrain problems

Regular maintenance not only keeps your e-bike running smoothly but also extends its lifespan and ensures your safety on the road.`,
    imageUrl: "/images/How_to_Clean_Your_E-Bike_1024x1024.png",
    category: "MAINTENANCE",
    published: true,
    publishedAt: new Date("2024-03-15"),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "choosing-first-commuter-bike",
    title: "Choosing Your First Commuter E-Bike: A Complete Buyer's Guide",
    slug: "choosing-first-commuter-bike",
    excerpt: "Everything you need to know to select the perfect e-bike for your daily commute, from motor power to battery range.",
    content: `Commuting by e-bike is becoming increasingly popular as people seek eco-friendly, cost-effective transportation. Here's everything you need to know to choose the perfect commuter e-bike.

## Key Factors to Consider

**Distance and Terrain:**
- For short commutes (under 5 miles): 250-500W motor is sufficient
- For longer commutes (5-15 miles): 500-750W motor recommended
- For hilly terrain: Consider 750W+ motor with good torque

**Battery Range:**
- Calculate your daily round-trip distance
- Add 20-30% buffer for headwinds, hills, and battery degradation
- Most commuter e-bikes offer 20-60 miles per charge

**Comfort Features:**
- Upright riding position for better visibility
- Suspension fork for rough roads
- Wide, comfortable saddle
- Ergonomic grips

## Best Commuter E-Bike Types

**City/Urban E-Bikes:**
- Lightweight and nimble
- Good for flat terrain
- Easy to maneuver in traffic
- Often foldable for storage

**Hybrid E-Bikes:**
- Versatile for various terrains
- Comfortable for longer rides
- Good balance of speed and comfort

**Cargo E-Bikes:**
- Perfect for carrying work items
- Built-in storage options
- Stable and secure

## Essential Accessories for Commuting

- High-quality helmet
- Bright LED lights (front and rear)
- Lock system (U-lock recommended)
- Fenders for weather protection
- Panniers or backpack for carrying items
- Phone mount for navigation

## Budget Considerations

- Entry-level: $800-$1,500
- Mid-range: $1,500-$3,000
- Premium: $3,000+

Remember, investing in a quality e-bike pays off in the long run with better reliability, performance, and resale value.`,
    imageUrl: "/images/Building Endurance- Your First Month with an E-Bike .jpg",
    category: "GUIDES",
    published: true,
    publishedAt: new Date("2024-03-10"),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "electric-bike-revolution",
    title: "The Electric Bike Revolution: Transforming Urban Mobility",
    slug: "electric-bike-revolution",
    excerpt: "How e-bikes are transforming transportation and changing the way we think about mobility in cities worldwide.",
    content: `The electric bike revolution is here, and it's changing everything about how we think about urban transportation. From reducing traffic congestion to improving public health, e-bikes are reshaping our cities.

## The Growth of E-Bike Adoption

**Market Statistics:**
- Global e-bike market expected to reach $46 billion by 2026
- E-bike sales increased 240% in the US during 2020-2021
- Over 130 million e-bikes sold worldwide in 2022

**Why the Sudden Growth?**
- COVID-19 pandemic increased interest in personal transportation
- Rising gas prices make e-bikes more cost-effective
- Improved battery technology and motor efficiency
- Growing environmental consciousness

## Environmental Impact

**Carbon Footprint Reduction:**
- E-bikes produce 90% less CO2 than cars per mile
- One e-bike can replace up to 1,000 car trips per year
- Significantly lower manufacturing emissions than electric cars

**Urban Benefits:**
- Reduced traffic congestion
- Less noise pollution
- Improved air quality
- More efficient use of urban space

## Health and Wellness Benefits

**Physical Health:**
- Low-impact exercise suitable for all fitness levels
- Helps with cardiovascular health
- Reduces joint stress compared to running
- Encourages outdoor activity

**Mental Health:**
- Reduces stress from traffic
- Provides sense of freedom and independence
- Connects riders with their community
- Reduces commute-related anxiety

## Technology Advances

**Battery Innovation:**
- Lithium-ion batteries with longer lifespans
- Faster charging times
- Better energy density
- Improved safety features

**Smart Features:**
- GPS tracking and anti-theft systems
- Mobile app integration
- Regenerative braking
- Automatic gear shifting

## The Future of E-Bikes

**Emerging Trends:**
- Integration with public transportation
- Smart city infrastructure support
- Autonomous safety features
- Subscription-based e-bike services

**Challenges Ahead:**
- Infrastructure development
- Safety regulations
- Battery disposal and recycling
- Insurance and liability issues

The e-bike revolution represents more than just a transportation trend—it's a fundamental shift toward more sustainable, healthy, and efficient urban living.`,
    imageUrl: "/images/Michihan Safety.png",
    category: "TECHNOLOGY",
    published: true,
    publishedAt: new Date("2024-03-05"),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "senior-e-bike-benefits",
    title: "E-Bikes for Seniors: Staying Active and Independent",
    slug: "senior-e-bike-benefits",
    excerpt: "Discover how e-bikes help seniors maintain independence, stay active, and enjoy the outdoors safely.",
    content: `E-bikes are revolutionizing mobility for seniors, offering a perfect blend of exercise, independence, and fun. Here's why more seniors are choosing electric bikes.

## Health Benefits for Seniors

**Low-Impact Exercise:**
- Gentle on joints and knees
- Improves cardiovascular health
- Builds leg strength and balance
- Reduces risk of falls

**Mental Health Benefits:**
- Boosts mood and reduces depression
- Provides sense of accomplishment
- Encourages social interaction
- Maintains cognitive function

## Safety Features for Senior Riders

**Stability Options:**
- Three-wheel trikes for maximum stability
- Lower step-through frames
- Wide, comfortable saddles
- Easy-to-reach controls

**Safety Accessories:**
- Bright LED lights for visibility
- Mirrors for better awareness
- Horn or bell for communication
- Reflective clothing and accessories

## Choosing the Right E-Bike for Seniors

**Trike Options:**
- 20" and 24" trikes for different heights
- Step-through design for easy mounting
- Wide, stable base
- Comfortable seating position

**Safety Considerations:**
- Lower maximum speeds
- Easy-to-use controls
- Reliable braking systems
- Comfortable riding position

## Getting Started Safely

**First Steps:**
- Start with short, familiar routes
- Practice in safe, low-traffic areas
- Take a safety course if available
- Ride with a partner initially

**Building Confidence:**
- Gradually increase distance
- Practice emergency stops
- Learn hand signals
- Understand local traffic laws

E-bikes offer seniors a wonderful way to stay active, maintain independence, and enjoy the great outdoors safely.`,
    imageUrl: "/images/Are_Electric_Bikes_Safe_for_Senior.png",
    category: "HEALTH",
    published: true,
    publishedAt: new Date("2024-02-28"),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "e-bike-battery-care",
    title: "E-Bike Battery Care: Maximizing Performance and Lifespan",
    slug: "e-bike-battery-care",
    excerpt: "Learn how to properly care for your e-bike battery to ensure optimal performance and extend its lifespan.",
    content: `Proper battery care is essential for getting the most out of your e-bike investment. Here's your complete guide to e-bike battery maintenance.

## Understanding E-Bike Batteries

**Battery Types:**
- Lithium-ion (most common)
- Lithium-polymer
- Lead-acid (older models)

**Key Specifications:**
- Voltage (36V, 48V, 52V)
- Amp-hours (Ah) - capacity
- Watt-hours (Wh) - total energy

## Charging Best Practices

**Optimal Charging:**
- Charge to 80-90% for daily use
- Full charge (100%) for long rides
- Avoid letting battery drop below 20%
- Use manufacturer-recommended charger

**Charging Schedule:**
- Charge after each ride if possible
- Don't leave battery fully discharged
- Avoid overcharging
- Unplug when charging is complete

## Storage Guidelines

**Short-term Storage (1-7 days):**
- Store at 40-60% charge
- Keep in cool, dry place
- Avoid extreme temperatures

**Long-term Storage (1+ months):**
- Charge to 50-60%
- Store in cool, dry location
- Check charge every 2-3 months
- Recharge to 50% if below 30%

## Temperature Considerations

**Operating Temperatures:**
- Optimal: 50-77°F (10-25°C)
- Avoid: Below 32°F (0°C) or above 104°F (40°C)
- Cold weather reduces range
- Hot weather can damage battery

## Maintenance Tips

**Regular Care:**
- Keep battery contacts clean
- Inspect for damage or swelling
- Check mounting hardware
- Clean with dry cloth only

**Warning Signs:**
- Battery won't hold charge
- Swelling or bulging
- Overheating during use
- Error messages on display

## Extending Battery Life

**Riding Habits:**
- Use appropriate assist levels
- Avoid constant full-throttle
- Pedal along with motor
- Plan routes to avoid excessive hills

**Battery Replacement:**
- Typical lifespan: 3-5 years
- 500-1000 charge cycles
- Signs it's time to replace
- Proper disposal of old batteries

Proper battery care ensures your e-bike performs reliably and your investment lasts for years to come.`,
    imageUrl: "/images/TOP 5 Health.jpg",
    category: "MAINTENANCE",
    published: true,
    publishedAt: new Date("2024-02-20"),
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export class MockStorage {
  // Products
  async getProducts(): Promise<Product[]> {
    return mockProducts;
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    return mockProducts.filter(p => p.categoryId === categoryId);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return mockProducts.find(p => p.slug === slug);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return mockProducts.filter(p => p.featured);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const newProduct: Product = {
      ...product,
      id: `product-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockProducts.push(newProduct);
    return newProduct;
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return mockCategories;
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return mockCategories.find(c => c.slug === slug);
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const newCategory: Category = {
      ...category,
      id: `category-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockCategories.push(newCategory);
    return newCategory;
  }

  // Blog posts
  async getBlogPosts(): Promise<BlogPost[]> {
    return mockBlogPosts;
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return mockBlogPosts.filter(p => p.published);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return mockBlogPosts.find(p => p.slug === slug);
  }

  async createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost> {
    const newBlogPost: BlogPost = {
      ...blogPost,
      id: `blog-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockBlogPosts.push(newBlogPost);
    return newBlogPost;
  }

  // Contact submissions
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const newSubmission: ContactSubmission = {
      ...submission,
      id: `contact-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    return newSubmission;
  }

  // Users (mock implementations)
  async getUser(id: string): Promise<User | undefined> {
    return undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return undefined;
  }

  async createUser(user: InsertUser): Promise<User> {
    throw new Error("User creation not supported in mock mode");
  }

  // Orders (mock implementations)
  async createOrder(order: InsertOrder): Promise<Order> {
    throw new Error("Order creation not supported in mock mode");
  }

  async getOrdersByUserId(userId: string): Promise<Order[]> {
    return [];
  }

  async updateOrderStatus(orderId: string, status: string): Promise<Order> {
    throw new Error("Order updates not supported in mock mode");
  }

  async addOrderItem(orderItem: InsertOrderItem): Promise<OrderItem> {
    throw new Error("Order items not supported in mock mode");
  }
}
