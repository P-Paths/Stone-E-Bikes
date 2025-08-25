"use client";

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export default function Accessories() {
  const { addItem } = useCart();
  const { toast } = useToast();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accessories = [
    {
      id: 'helmet-premium',
      name: 'Premium Safety Helmet',
      price: 89.99,
      description: 'High-quality safety helmet with advanced protection',
      imageUrl: '/images/accessories/Helmet.jpg',
      category: 'Safety'
    },
    {
      id: 'lights-front',
      name: 'LED Front Light Set',
      price: 49.99,
      description: 'Bright LED front lights for safe night riding',
      imageUrl: '/images/accessories/front light for e-bike.jpg',
      category: 'Safety'
    },
    {
      id: 'lights-rear',
      name: 'LED Rear Light Set',
      price: 39.99,
      description: 'High-visibility rear lights with brake detection',
      imageUrl: '/images/accessories/Updated rear light.png',
      category: 'Safety'
    },
    {
      id: 'gloves',
      name: 'E-Bike Riding Gloves',
      price: 29.99,
      description: 'Comfortable gloves for better grip and protection',
      imageUrl: '/images/accessories/e-bike Gloves.jpg',
      category: 'Safety'
    },
    {
      id: 'basket-cargo',
      name: 'Cargo Basket',
      price: 79.99,
      description: 'Sturdy basket for groceries and essentials',
      imageUrl: '/images/accessories/Basket.jpg',
      category: 'Storage'
    },
    {
      id: 'lock-premium',
      name: 'Premium Bike Lock',
      price: 149.99,
      description: 'Heavy-duty lock for maximum security',
      imageUrl: '/images/accessories/e-bike Lock.jpg',
      category: 'Security'
    },
    {
      id: 'mirror',
      name: 'Bike Mirror',
      price: 24.99,
      description: 'Safety mirror for better rear visibility',
      imageUrl: '/images/accessories/e-bike Mirror.jpg',
      category: 'Safety'
    }
  ];

  const handleAddToCart = (accessory: any) => {
    const product = {
      id: accessory.id,
      name: accessory.name,
      price: accessory.price.toString(),
      description: accessory.description,
      imageUrl: accessory.imageUrl,
      inStock: true,
      featured: false,
      slug: accessory.id,
      categoryId: null,
      specifications: null,
      createdAt: null
    };
    
    addItem(product);
    toast({
      title: 'Added to cart',
      description: `${accessory.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4" data-testid="text-accessories-title">
            E-Bike Accessories & Safety Gear
          </h1>
          <p className="text-xl text-muted" data-testid="text-accessories-description">
            Complete your e-bike experience with premium accessories designed for safety and convenience
          </p>
        </div>

        {/* Accessories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="accessories-grid">
          {accessories.map((accessory) => (
            <Card 
              key={accessory.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              data-testid={`card-accessory-${accessory.id}`}
            >
              <div className="relative">
                <img
                  src={accessory.imageUrl}
                  alt={accessory.name}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-accessory-${accessory.id}`}
                />
                <div className="absolute top-2 left-2 bg-accent text-black font-bold px-3 py-1 rounded-full text-xs shadow-lg border border-white">
                  {accessory.category === 'Safety' ? '🛡️ Safety' : accessory.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 
                  className="text-lg font-semibold text-primary mb-2"
                  data-testid={`text-accessory-name-${accessory.id}`}
                >
                  {accessory.name}
                </h3>
                <p 
                  className="text-sm text-muted mb-4"
                  data-testid={`text-accessory-description-${accessory.id}`}
                >
                  {accessory.description}
                </p>
                <div className="flex justify-between items-center">
                  <span 
                    className="text-xl font-bold text-primary"
                    data-testid={`text-accessory-price-${accessory.id}`}
                  >
                    ${accessory.price}
                  </span>
                  <Button
                    className="bg-accent hover:bg-yellow-600 text-black font-semibold"
                    onClick={() => handleAddToCart(accessory)}
                    data-testid={`button-add-to-cart-${accessory.id}`}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
