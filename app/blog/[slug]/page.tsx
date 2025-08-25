import React from 'react';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { BlogPost as DBBlogPost } from '@shared/schema';
import { loadMarkdownPosts, BlogPost as MarkdownBlogPost } from '@/lib/blog.loader';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  let post: MarkdownBlogPost | DBBlogPost | null = null;
  let usingMarkdown = false;

  try {
    // Try to load from markdown first
    const markdownPosts = await loadMarkdownPosts();
    const markdownPost = markdownPosts.find(p => p.slug === slug);
    
    if (markdownPost) {
      post = markdownPost;
      usingMarkdown = true;
    } else {
      // Fallback to database posts
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blog`);
      if (response.ok) {
        const posts: DBBlogPost[] = await response.json();
        const dbPost = posts.find(p => p.slug === slug);
        
        if (dbPost) {
          post = dbPost;
        }
      }
    }

    // If no post found, show 404
    if (!post) {
      notFound();
    }
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="text-accent hover:text-accent/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Blog Post */}
        <Card className="overflow-hidden">
          <div className="relative h-96 overflow-hidden">
            <img
              src={
                usingMarkdown 
                  ? 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400'
                  : (post as DBBlogPost).imageUrl || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400'
              }
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          
          <CardContent className="p-8">
            {/* Meta Information */}
            <div className="mb-6">
              {usingMarkdown && (post as MarkdownBlogPost).tags && (post as MarkdownBlogPost).tags.length > 0 && (
                <div className="text-sm font-semibold text-accent mb-2">
                  {(post as MarkdownBlogPost).tags.join(', ')}
                </div>
              )}
              {!usingMarkdown && (post as DBBlogPost).category && (
                <div className="text-sm font-semibold text-accent mb-2">
                  {(post as DBBlogPost).category}
                </div>
              )}
              
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                {post.title}
              </h1>
              
              <div className="text-sm text-muted">
                {usingMarkdown 
                  ? new Date((post as MarkdownBlogPost).date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                  : ((post as DBBlogPost).publishedAt ? new Date((post as DBBlogPost).publishedAt!).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : '')
                }
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {usingMarkdown ? (
                <div 
                  className="text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: (post as MarkdownBlogPost).content }}
                />
              ) : (
                <div className="text-muted leading-relaxed">
                  {post.excerpt}
                  <p className="mt-4">
                    This is a preview of the blog post. The full content would be displayed here.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
