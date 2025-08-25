export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

/**
 * Loads markdown blog posts from client/src/content/posts directory
 * Returns empty array if no posts found (safe fallback)
 */
export async function loadMarkdownPosts(): Promise<BlogPost[]> {
  try {
    // For Next.js, we'll return demo blog posts since import.meta.glob doesn't work
    // In a real app, you'd use fs.readdirSync or a CMS
    const demoPosts: BlogPost[] = [
      {
        title: "Electric Bike Revolution: Why E-Bikes Are Taking Over",
        slug: "electric-bike-revolution",
        date: "2024-01-15",
        excerpt: "Discover how electric bicycles are transforming urban transportation and why more people are choosing e-bikes for their daily commute.",
        tags: ["e-bikes", "transportation", "urban"],
        content: "Electric bicycles are revolutionizing how we think about urban transportation..."
      },
      {
        title: "Choosing Your First Commuter E-Bike",
        slug: "choosing-first-commuter-bike",
        date: "2024-01-10",
        excerpt: "A comprehensive guide to selecting the perfect e-bike for your daily commute, including key features to consider.",
        tags: ["commuting", "guide", "beginners"],
        content: "When choosing your first commuter e-bike, there are several important factors to consider..."
      },
      {
        title: "E-Bikes for Seniors: Health Benefits and Safety Tips",
        slug: "ebikes-seniors-health",
        date: "2024-01-05",
        excerpt: "How electric bicycles can improve health and mobility for seniors, with essential safety considerations.",
        tags: ["seniors", "health", "safety"],
        content: "Electric bicycles offer numerous health benefits for seniors while providing safe, accessible transportation..."
      },
      {
        title: "Building Endurance: Your First Month with an E-Bike",
        slug: "building-endurance-first-ebike",
        date: "2023-12-28",
        excerpt: "A month-long plan to build your cycling endurance and confidence with your new electric bicycle.",
        tags: ["fitness", "endurance", "training"],
        content: "Starting your e-bike journey can be exciting but also challenging. Here's how to build endurance safely..."
      },
      {
        title: "Spring Maintenance Tips for Your E-Bike",
        slug: "bike-maintenance-spring",
        date: "2023-12-20",
        excerpt: "Essential maintenance tasks to keep your electric bicycle running smoothly through the spring season.",
        tags: ["maintenance", "spring", "care"],
        content: "Spring is the perfect time to give your e-bike some TLC. Here are the essential maintenance tasks..."
      },
      {
        title: "Group Riding for Seniors: Safety and Social Benefits",
        slug: "group-riding-seniors",
        date: "2023-12-15",
        excerpt: "How group riding can enhance the e-bike experience for seniors, with safety guidelines and social benefits.",
        tags: ["group-riding", "seniors", "community"],
        content: "Group riding offers both safety and social benefits for senior e-bike riders..."
      }
    ];

    return demoPosts;
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