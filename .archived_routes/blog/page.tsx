'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@shared/schema';

export default function Blog() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">Our Blog</h1>
          <p className="text-muted text-lg">Tips, guides, and stories from the cycling community</p>
          <p className="text-sm text-muted mt-2">✔ Loading from markdown files</p>
        </div>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts?.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                data-testid={`card-blog-${post.id}`}
              >
                <img
                  src={post.imageUrl || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250'}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  data-testid={`img-blog-${post.id}`}
                />
                <div className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2" data-testid={`text-blog-category-${post.id}`}>
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3" data-testid={`text-blog-title-${post.id}`}>
                    {post.title}
                  </h3>
                  <p className="text-muted mb-4" data-testid={`text-blog-excerpt-${post.id}`}>
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted" data-testid={`text-blog-date-${post.id}`}>
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {blogPosts?.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-muted text-lg">No blog posts available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
