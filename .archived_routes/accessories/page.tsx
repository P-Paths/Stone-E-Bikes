'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductCard } from '../../client/src/components/ProductCard';
import { Product } from '@shared/schema';

export default function Accessories() {
  const { data: accessories, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
    queryFn: async () => {
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    },
  });

  const accessoryProducts = accessories?.filter(product => product.categoryId === 'accessories');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">Accessories</h1>
          <p className="text-muted text-lg">Complete your e-bike experience with our premium accessories</p>
        </div>

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
            {accessoryProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {accessoryProducts?.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-muted text-lg">No accessories available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
