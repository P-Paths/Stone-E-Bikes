import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductCard } from '../components/ProductCard';
import { Product, Category } from '@shared/schema';

export default function Accessories() {
  const { data: categories } = useQuery<Category[]>({
    queryKey: ['/api/categories'],
  });

  const accessoriesCategory = categories?.find(cat => cat.slug === 'accessories');

  const { data: accessories, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/categories', accessoriesCategory?.slug, 'products'],
    enabled: !!accessoriesCategory?.slug,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4" data-testid="text-accessories-title">
            Essential Accessories
          </h1>
          <p className="text-xl text-muted" data-testid="text-accessories-description">
            Complete your ride with our premium bike accessories and gear
          </p>
        </div>

        {/* Accessories Grid */}
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
        ) : accessories?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted text-lg" data-testid="text-no-accessories">
              No accessories available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="accessories-grid">
            {accessories?.map((accessory) => (
              <ProductCard key={accessory.id} product={accessory} />
            ))}
          </div>
        )}

        {/* Categories Preview */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
              alt="Safety Equipment"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-primary mb-2">Safety Equipment</h4>
              <p className="text-sm text-muted">Helmets, lights, and protective gear</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
              alt="Bike Maintenance"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-primary mb-2">Maintenance</h4>
              <p className="text-sm text-muted">Tools and maintenance supplies</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
              alt="Storage Solutions"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-primary mb-2">Storage</h4>
              <p className="text-sm text-muted">Bags, racks, and storage solutions</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
              alt="Performance Upgrades"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-primary mb-2">Performance</h4>
              <p className="text-sm text-muted">Upgrades and performance parts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
