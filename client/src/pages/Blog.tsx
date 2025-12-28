import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// No wouter here; legacy file during migration
import { BlogPost } from '@shared/schema';

export default function Blog() {
  // No router in legacy SPA; Next.js page is under app/blog

  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
    queryFn: async () => {
      const response = await fetch('/api/blog');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      return response.json();
    },
  });

  const handleReadMore = (slug: string) => {
    setLocation(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4" data-testid="text-blog-title">
            Stone E-Bikes Blog
          </h1>
          <p className="text-xl text-muted" data-testid="text-blog-description">
            Tips, guides, and stories from the cycling community
          </p>
        </div>

        {/* Blog Posts Grid */}
        {isLoading ? (
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
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="blog-posts-grid">
            {blogPosts?.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                data-testid={`card-blog-${post.id}`}
              >
                <div className="relative">
                  <img
                    src={post.imageUrl || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250'}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`img-blog-${post.id}`}
                  />
                  <div className="absolute top-2 left-2 bg-accent text-black font-semibold px-2 py-1 rounded text-xs">
                    {post.category}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2" data-testid={`text-blog-category-${post.id}`}>
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2" data-testid={`text-blog-title-${post.id}`}>
                    {post.title}
                  </h3>
                  <p className="text-muted mb-4 line-clamp-3" data-testid={`text-blog-excerpt-${post.id}`}>
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted" data-testid={`text-blog-date-${post.id}`}>
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
                    </span>
                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-black font-semibold"
                      onClick={() => handleReadMore(post.slug)}
                      data-testid={`button-read-more-${post.id}`}
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (!blogPosts || blogPosts.length === 0) && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-primary mb-2">No blog posts yet</h3>
            <p className="text-muted">Check back soon for tips, guides, and cycling stories!</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Get the latest e-bike tips, maintenance guides, and cycling stories delivered to your inbox.
            </p>
            <Button 
              className="bg-accent hover:bg-yellow-600 text-black font-semibold px-8 py-3"
              onClick={() => setLocation('/contact')}
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
