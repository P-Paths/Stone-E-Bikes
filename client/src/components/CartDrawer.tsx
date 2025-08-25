"use client";

import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../contexts/CartContext';
import { useLocation } from 'wouter';

export const CartDrawer: React.FC = () => {
  const { items, itemCount, total, removeItem, updateQuantity, isOpen, closeCart } = useCart();
  const [, setLocation] = useLocation();

  const handleCheckout = () => {
    closeCart();
    setLocation('/checkout');
  };

  const handleViewCart = () => {
    closeCart();
    setLocation('/cart');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" data-testid="cart-drawer">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeCart} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold" data-testid="text-cart-title">Shopping Cart</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-lg"
              data-testid="button-close-cart"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8 text-gray-500" data-testid="text-empty-cart">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 p-4 border-b" data-testid={`cart-item-${item.product.id}`}>
                    <img
                      src={item.product.imageUrl || 'https://images.unsplash.com/photo-1544191696-15693072fb5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80'}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                      data-testid={`img-cart-item-${item.product.id}`}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold" data-testid={`text-item-name-${item.product.id}`}>
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-muted" data-testid={`text-item-price-${item.product.id}`}>
                        ${item.product.price}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-8 h-8 rounded-full p-0"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          data-testid={`button-decrease-${item.product.id}`}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span data-testid={`text-quantity-${item.product.id}`}>{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-8 h-8 rounded-full p-0"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          data-testid={`button-increase-${item.product.id}`}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeItem(item.product.id)}
                      data-testid={`button-remove-${item.product.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary" data-testid="text-cart-total">
                  ${total.toFixed(2)}
                </span>
              </div>
              <Button
                className="w-full bg-accent hover:bg-green-600 text-white mb-2"
                onClick={handleCheckout}
                data-testid="button-checkout"
              >
                Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleViewCart}
                data-testid="button-view-cart"
              >
                View Cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
