import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost as DBBlogPost } from '@shared/schema';
import { loadMarkdownPosts, BlogPost as MarkdownBlogPost } from '../lib/blog.loader';

export default function Blog() {
  const [markdownPosts, setMarkdownPosts] = useState<MarkdownBlogPost[]>([]);
  const [usingMarkdown, setUsingMarkdown] = useState(false);
  
  // Try to load markdown posts first
  useEffect(() => {
    loadMarkdownPosts().then(posts => {
      if (posts.length > 0) {
        setMarkdownPosts(posts);
        setUsingMarkdown(true);
      }
    }).catch(err => {
      console.warn('Failed to load markdown posts:', err);
    });
  }, []);

  // Fallback to database posts if no markdown posts
  const { data: dbBlogPosts, isLoading } = useQuery<DBBlogPost[]>({
    queryKey: ['/api/blog'],
    enabled: !usingMarkdown || markdownPosts.length === 0
  });

  // Determine which posts to show
  const postsToShow = usingMarkdown && markdownPosts.length > 0 ? markdownPosts : (dbBlogPosts || []);
  const hasNoPosts = (!usingMarkdown && (!dbBlogPosts || dbBlogPosts.length === 0)) || 
                     (usingMarkdown && markdownPosts.length === 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4" data-testid="text-blog-title">
            Our Blog
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto" data-testid="text-blog-description">
            Tips, guides, and stories from the cycling community
          </p>
          {usingMarkdown && (
            <p className="text-sm text-secondary mt-2">
              ✓ Loading from markdown files
            </p>
          )}
        </div>

        {/* Blog Posts */}
        {isLoading && !usingMarkdown ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded mb-4 w-3/4"></div>
                <div className="bg-gray-200 h-3 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : hasNoPosts ? (
          <div className="text-center py-12">
            <p className="text-muted text-lg" data-testid="text-no-posts">
              No blog posts available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="blog-posts-grid">
            {postsToShow.map((post) => {
              const isMarkdown = usingMarkdown && markdownPosts.length > 0;
              const postId = isMarkdown ? post.slug : (post as DBBlogPost).id;
              
              return (
                <Card 
                  key={postId}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-white"
                  data-testid={`card-blog-${postId}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        isMarkdown 
                          ? 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250'
                          : (post as DBBlogPost).imageUrl || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250'
                      }
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      data-testid={`img-blog-${postId}`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                  <CardContent className="p-6">
                    {/* Tags/Category */}
                    {isMarkdown && (post as MarkdownBlogPost).tags && (post as MarkdownBlogPost).tags.length > 0 && (
                      <div className="text-sm font-semibold text-secondary mb-2" data-testid={`text-blog-tags-${postId}`}>
                        {(post as MarkdownBlogPost).tags.join(', ')}
                      </div>
                    )}
                    {!isMarkdown && (post as DBBlogPost).category && (
                      <div className="text-sm font-semibold text-secondary mb-2" data-testid={`text-blog-category-${postId}`}>
                        {(post as DBBlogPost).category}
                      </div>
                    )}
                    
                    <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2" data-testid={`text-blog-title-${postId}`}>
                      {post.title}
                    </h2>
                    <p className="text-muted mb-4 line-clamp-3" data-testid={`text-blog-excerpt-${postId}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted" data-testid={`text-blog-date-${postId}`}>
                        {isMarkdown 
                          ? new Date(post.date).toLocaleDateString()
                          : ((post as DBBlogPost).publishedAt ? new Date((post as DBBlogPost).publishedAt).toLocaleDateString() : '')
                        }
                      </span>
                      <Link href={`/blog/${post.slug}`}>
                        <Button 
                          variant="link" 
                          className="text-secondary hover:text-blue-600 p-0 h-auto"
                          data-testid={`button-read-more-${postId}`}
                        >
                          Read More →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}