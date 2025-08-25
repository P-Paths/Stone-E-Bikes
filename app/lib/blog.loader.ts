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
    // Import all markdown files dynamically
    const modules = import.meta.glob('../content/posts/*.md', { 
      eager: true, 
      query: '?raw',
      import: 'default'
    });

    const posts: BlogPost[] = [];

    for (const [path, content] of Object.entries(modules)) {
      try {
        const parsed = parseMarkdownPost(content as string);
        if (parsed) {
          posts.push(parsed);
        }
      } catch (error) {
        console.warn(`Failed to parse markdown post: ${path}`, error);
      }
    }

    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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