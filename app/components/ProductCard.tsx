"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@shared/schema';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'default' }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-accent/30"
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative">
        <img
          src={product.imageUrl || 'https://images.unsplash.com/photo-1544191696-15693072fb5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'}
          alt={product.name}
          className={`w-full object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300 ${
            variant === 'featured' ? 'h-64' : 'h-48'
          }`}
          data-testid={`img-product-${product.id}`}
        />
        {product.featured && (
          <div className="absolute top-2 left-2 bg-accent text-white px-2 py-1 rounded text-xs font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 
          className="text-xl font-semibold text-primary mb-2"
          data-testid={`text-product-name-${product.id}`}
        >
          {product.name}
        </h3>
        <p 
          className="text-muted mb-4 text-sm"
          data-testid={`text-product-description-${product.id}`}
        >
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span 
            className="text-2xl font-bold text-primary"
            data-testid={`text-product-price-${product.id}`}
          >
            ${product.price}
          </span>
          {variant === 'featured' ? (
            <Link href="/shop">
              <Button
                className="bg-accent hover:bg-yellow-600 text-black font-semibold transition-all duration-300 transform hover:scale-105"
                data-testid={`button-view-details-${product.id}`}
              >
                View Details
              </Button>
            </Link>
          ) : (
            <Button
              className="bg-accent hover:bg-yellow-600 text-black font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              data-testid={`button-add-to-cart-${product.id}`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
