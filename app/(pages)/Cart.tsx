import React from 'react';
import { Link } from 'wouter';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { items, total, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-primary mb-2" data-testid="text-empty-cart-title">
            Your cart is empty
          </h1>
          <p className="text-muted mb-6" data-testid="text-empty-cart-description">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link href="/shop">
            <Button className="bg-accent hover:bg-green-600" data-testid="button-start-shopping">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8" data-testid="text-cart-title">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.product.id} data-testid={`cart-item-${item.product.id}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.product.imageUrl || 'https://images.unsplash.com/photo-1544191696-15693072fb5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120'}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                        data-testid={`img-cart-item-${item.product.id}`}
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary" data-testid={`text-item-name-${item.product.id}`}>
                          {item.product.name}
                        </h3>
                        <p className="text-muted text-sm" data-testid={`text-item-description-${item.product.id}`}>
                          {item.product.description}
                        </p>
                        <p className="text-lg font-bold text-primary mt-2" data-testid={`text-item-price-${item.product.id}`}>
                          ${item.product.price}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-8 h-8 rounded-full p-0"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          data-testid={`button-decrease-${item.product.id}`}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-lg font-medium w-8 text-center" data-testid={`text-quantity-${item.product.id}`}>
                          {item.quantity}
                        </span>
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

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeItem(item.product.id)}
                        data-testid={`button-remove-${item.product.id}`}
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-4" data-testid="text-order-summary">
                  Order Summary
                </h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted">Subtotal:</span>
                    <span className="font-medium" data-testid="text-subtotal">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Shipping:</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Tax:</span>
                    <span className="font-medium" data-testid="text-tax">
                      ${(total * 0.08).toFixed(2)}
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary" data-testid="text-total">
                      ${(total * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout">
                    <Button 
                      className="w-full bg-accent hover:bg-green-600 text-white" 
                      size="lg"
                      data-testid="button-checkout"
                    >
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Link href="/shop">
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="lg"
                      data-testid="button-continue-shopping"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
