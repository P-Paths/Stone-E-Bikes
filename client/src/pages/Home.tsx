import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { useTheme } from '../contexts/ThemeContext';
import { Product, BlogPost } from '@shared/schema';

export default function Home() {
  const theme = useTheme();
  
  const { data: featuredProducts, isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ['/api/products/featured'],
  });

  const { data: blogPosts, isLoading: blogLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white" data-testid="hero-section">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Ride the Future
                <span className="text-accent block">Premium Bikes</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300" data-testid="text-hero-description">
                Discover our collection of cutting-edge bicycles designed for every adventure. From city commuting to mountain trails.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <Button 
                    className="bg-accent hover:bg-green-600 text-white px-8 py-3 text-lg"
                    data-testid="button-shop-now"
                  >
                    Shop Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
                    data-testid="button-learn-more"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional cyclist on modern road bike"
                className="rounded-xl shadow-2xl"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white" data-testid="featured-products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4" data-testid="text-featured-title">
              Featured Bikes
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto" data-testid="text-featured-description">
              Handpicked selection of our most popular and innovative bicycles
            </p>
          </div>

          {productsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded mb-4 w-2/3"></div>
                  <div className="bg-gray-200 h-10 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts?.map((product) => (
                <ProductCard key={product.id} product={product} variant="featured" />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/shop">
              <Button 
                className="bg-primary hover:bg-gray-800 text-white px-8 py-3"
                data-testid="button-view-all-bikes"
              >
                View All Bikes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-white" data-testid="blog-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4" data-testid="text-blog-title">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto" data-testid="text-blog-description">
              Tips, guides, and stories from the cycling community
            </p>
          </div>

          {blogLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
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
              {blogPosts?.slice(0, 3).map((post) => (
                <article 
                  key={post.id} 
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
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
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
