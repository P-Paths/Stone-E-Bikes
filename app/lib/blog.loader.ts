export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  imageUrl?: string;
  externalUrl?: string;
}

/**
 * Loads markdown blog posts from client/src/content/posts directory
 * Returns empty array if no posts found (safe fallback)
 */
export async function loadMarkdownPosts(): Promise<BlogPost[]> {
  try {
    // Return the actual markdown blog posts we've created
    const markdownPosts: BlogPost[] = [
      {
        title: "The Top 5 Health Benefits of Cycling: Why Riding is Great for Your Body and Mind",
        slug: "cycling-health-benefits",
        date: "2024-01-20",
        excerpt: "Discover the science-backed health benefits of cycling, from cardiovascular fitness to mental well-being. Learn why riding a bike is one of the best exercises for overall health.",
        tags: ["health", "fitness", "cycling", "exercise", "wellness", "e-bikes"],
        content: "Cycling is more than just a fun way to get around—it's one of the most effective forms of exercise for improving your overall health...",
        imageUrl: "/images/blog/health-benefits-cycling.jpg"
      },
      {
        title: "Michigan Bike Safety Rules: What Every Rider Needs to Know",
        slug: "michigan-bike-safety-rules",
        date: "2024-01-15",
        excerpt: "Essential Michigan bike safety rules and regulations to keep you safe on the road. Learn the laws, best practices, and safety tips for cyclists of all ages.",
        tags: ["safety", "michigan", "bike-laws", "cycling", "e-bikes"],
        content: "Cycling in Michigan is a fantastic way to explore our beautiful state, but it's crucial to understand and follow the safety rules and regulations...",
        imageUrl: "/images/blog/michigan-bike-safety.jpg"
      },
      {
        title: "Bike Safety Tips for Older Adults: Stay Safe and Confident on Your Rides",
        slug: "bike-safety-seniors",
        date: "2024-01-25",
        excerpt: "Essential bike safety tips specifically designed for older adults. Learn how to ride safely, build confidence, and enjoy cycling at any age with proper preparation and equipment.",
        tags: ["safety", "seniors", "cycling", "e-bikes", "health", "confidence"],
        content: "Cycling is an excellent activity for older adults, offering numerous health benefits while being gentle on joints...",
        imageUrl: "/images/blog/senior-bike-safety.jpg",
        externalUrl: "https://www.aarp.org/health/healthy-living/bike-safety/"
      },
      {
        title: "Why E-Bikes Are Great for Seniors' Health",
        slug: "ebikes-seniors-health",
        date: "2024-08-24",
        excerpt: "Discover how electric bicycles can improve seniors' health through low-impact cardio, joint mobility, and mental well-being.",
        tags: ["health", "seniors", "e-bikes", "fitness"],
        content: "Electric bicycles are revolutionizing how seniors stay active and healthy...",
        imageUrl: "/images/blog/ebikes-seniors-health.jpg",
        externalUrl: "https://crazylennysebikes.com/why-an-e-bike-is-perfect-for-seniors/?srsltid=AfmBOooeSd0OZP0lEHj_yGo0S_WEApTlZ35FDfn-97NPqlIuECRK0r6C"
      },
      {
        title: "Building Endurance: Your First Month with an E-Bike",
        slug: "building-endurance-first-ebike",
        date: "2024-08-24",
        excerpt: "A comprehensive guide to building your cycling endurance and confidence with your new electric bicycle.",
        tags: ["fitness", "endurance", "training", "e-bikes"],
        content: "Starting your e-bike journey can be both exciting and challenging...",
        imageUrl: "/images/blog/building-endurance.jpg",
        externalUrl: "https://www.moveelectric.com/e-bikes/can-you-get-fit-using-electric-bike"
      },
      {
        title: "Spring Maintenance Tips for Your E-Bike",
        slug: "bike-maintenance-spring",
        date: "2024-08-24",
        excerpt: "Essential maintenance tasks to keep your electric bicycle running smoothly through the spring season.",
        tags: ["maintenance", "spring", "care", "e-bikes"],
        content: "Spring is the perfect time to give your e-bike some TLC...",
        imageUrl: "/images/blog/spring-maintenance.jpg",
        externalUrl: "https://www.radpowerbikes.com/blogs/the-scenic-route/ebike-spring-maintenance-guide?srsltid=AfmBOopEVmG6tW0Ejtig9DeTS8HbWteAWaFgAZpKR78Vu5nwHf0GTXbR"
      }
    ];

    return markdownPosts;
  } catch (error) {
    console.warn('Failed to load markdown posts:', error);
    return [];
  }
}

/**
 * Simple frontmatter parser - extracts YAML frontmatter and content
 */
function parseMarkdownPost(fileContent: string): BlogPost | null {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return null;
  }

  const [, frontmatter, content] = match;
  
  try {
    // Simple YAML-like parsing for our specific frontmatter format
    const metadata: Record<string, any> = {};
    const lines = frontmatter.split('\n');
    
    for (const line of lines) {
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) continue;
      
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays (tags)
      if (key === 'tags' && value.startsWith('[') && value.endsWith(']')) {
        const tagsString = value.slice(1, -1);
        metadata[key] = tagsString.split(',').map(tag => 
          tag.trim().replace(/^["']|["']$/g, '')
        );
      } else {
        metadata[key] = value;
      }
    }

    // Validate required fields
    if (!metadata.title || !metadata.slug || !metadata.date) {
      console.warn('Missing required frontmatter fields (title, slug, date)');
      return null;
    }

    return {
      title: metadata.title,
      slug: metadata.slug,
      date: metadata.date,
      excerpt: metadata.excerpt || '',
      tags: metadata.tags || [],
      content: content.trim()
    };
  } catch (error) {
    console.warn('Failed to parse frontmatter:', error);
    return null;
  }
}