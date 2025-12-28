'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductCard } from '../../client/src/components/ProductCard';
import { Product } from '@shared/schema';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
    queryFn: async () => {
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    },
  });

  const categories = ['all', 'bikes', 'accessories'];
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products?.filter(product => product.categoryId === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">Shop</h1>
          <p className="text-muted text-lg">Discover our complete collection of electric bikes and accessories</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent text-black'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
{category === 'bikes' ? 'E-bikes' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded mb-4 w-2/3"></div>
                <div className="bg-gray-200 h-10 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {filteredProducts?.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-muted text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
