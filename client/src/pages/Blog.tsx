import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@shared/schema';

export default function Blog() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

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
        </div>

        {/* Blog Posts */}
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
        ) : blogPosts?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted text-lg" data-testid="text-no-posts">
              No blog posts available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="blog-posts-grid">
            {blogPosts?.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow"
                data-testid={`card-blog-${post.id}`}
              >
                <img
                  src={post.imageUrl || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250'}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  data-testid={`img-blog-${post.id}`}
                />
                <CardContent className="p-6">
                  {post.category && (
                    <div 
                      className="text-sm text-accent font-semibold mb-2"
                      data-testid={`text-blog-category-${post.id}`}
                    >
                      {post.category}
                    </div>
                  )}
                  <h3 
                    className="text-xl font-semibold text-primary mb-3"
                    data-testid={`text-blog-title-${post.id}`}
                  >
                    {post.title}
                  </h3>
                  <p 
                    className="text-muted mb-4"
                    data-testid={`text-blog-excerpt-${post.id}`}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span 
                      className="text-sm text-muted"
                      data-testid={`text-blog-date-${post.id}`}
                    >
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button 
                        variant="link" 
                        className="text-secondary hover:text-blue-600 p-0"
                        data-testid={`button-read-more-${post.id}`}
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Featured Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Maintenance</h3>
                <p className="text-muted text-sm">Tips and guides for bike care</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Adventure</h3>
                <p className="text-muted text-sm">Routes and travel stories</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">T</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Technology</h3>
                <p className="text-muted text-sm">Latest bike tech and innovations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
