"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { PRICING } from '@/commerce/pricing.config';
import { usePathname } from 'next/navigation';

export default function Shop() {
  const { addItem } = useCart();
  const { toast } = useToast();
  const pathname = usePathname();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle anchor links to scroll to specific bikes
  useEffect(() => {
    const hash = pathname.split('#')[1];
    if (hash) {
      const element = document.getElementById(`card-product-${hash}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add a highlight effect
        element.classList.add('ring-4', 'ring-accent', 'ring-opacity-50');
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-accent', 'ring-opacity-50');
        }, 3000);
      }
    }
  }, [pathname]);

  const handleAddToCart = (bike: any) => {
    // Create a product object for the cart
    const product = {
      id: bike.id,
      name: bike.label,
      price: bike.priceMonthly.toString(),
      description: bike.features.join(', '),
      imageUrl: `/images/e-bikes/${bike.id}.png`,
      inStock: true,
      featured: false,
      slug: bike.id,
      categoryId: null,
      specifications: null,
      createdAt: null
    };
    
    addItem(product);
    toast({
      title: 'Added to cart',
      description: `${bike.label} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4" data-testid="text-shop-title">
            Our Premium E-Bikes
          </h1>
          <p className="text-xl text-muted" data-testid="text-shop-description">
            Discover our complete collection of premium electric bicycles for every adventure
          </p>
        </div>

        {/* E-Bikes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="products-grid">
          {PRICING.tiers.map((bike) => {
            // Map bike IDs to actual image filenames
            const imageMap: { [key: string]: string } = {
              'askgo-26': 'askgo-26.png',
              'okonge-fat-20': 'okonge-fat-20.png', 
              'keteles-fat-26': 'keteles-fat-26.png',
              'coz-trike-24': '24" Trike CO-Z.png',
              'okonge-trike-20': '20" Trike OKONGE.png'
            };
            
            // Encode the filename for URL safety
            const getImageUrl = (bikeId: string) => {
              const filename = imageMap[bikeId] || `${bikeId}.png`;
              return `/images/e-bikes/${encodeURIComponent(filename)}`;
            };
            
            return (
              <Card 
                key={bike.id}
                id={`card-product-${bike.id}`}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-accent/30"
                data-testid={`card-product-${bike.id}`}
              >
                <div className="relative">
                  <img
                    src={getImageUrl(bike.id)}
                    alt={bike.label}
                    className="w-full h-80 object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                    data-testid={`img-product-${bike.id}`}
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300';
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-accent text-black font-semibold px-2 py-1 rounded text-xs">
                    Electric
                  </div>
                </div>
              
              <CardContent className="p-6">
                <h3 
                  className="text-xl font-semibold text-primary mb-2"
                  data-testid={`text-product-name-${bike.id}`}
                >
                  {bike.label}
                </h3>
                <div className="mb-4">
                  <ul className="text-sm text-muted space-y-1">
                    {bike.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-accent mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span 
                    className="text-2xl font-bold text-primary"
                    data-testid={`text-product-price-${bike.id}`}
                  >
                    ${bike.priceMonthly.toLocaleString()}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-black font-semibold"
                      onClick={() => {
                        // Scroll to top and show this bike
                        window.scrollTo(0, 0);
                        const element = document.getElementById(`card-product-${bike.id}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          element.classList.add('ring-4', 'ring-accent', 'ring-opacity-50');
                          setTimeout(() => {
                            element.classList.remove('ring-4', 'ring-accent', 'ring-opacity-50');
                          }, 3000);
                        }
                      }}
                    >
                      View Details
                    </Button>
                    <Button
                      className="bg-accent hover:bg-yellow-600 text-black font-semibold"
                      onClick={() => handleAddToCart(bike)}
                      data-testid={`button-add-to-cart-${bike.id}`}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
        </div>
      </div>
    </div>
  );
}
