"use client";

import React, { useEffect, useState } from 'react';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { total, items, clearCart } = useCart();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order-confirmation`,
        },
      });

      if (error) {
        toast({
          title: "Payment Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Payment Successful",
          description: "Thank you for your purchase!",
        });
        clearCart();
      }
    } catch (error) {
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Order Summary */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle data-testid="text-order-summary">Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between" data-testid={`order-item-${item.product.id}`}>
                  <div>
                    <p className="font-medium" data-testid={`text-item-name-${item.product.id}`}>
                      {item.product.name}
                    </p>
                    <p className="text-sm text-muted" data-testid={`text-item-quantity-${item.product.id}`}>
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium" data-testid={`text-item-total-${item.product.id}`}>
                    ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span data-testid="text-checkout-total">${total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Form */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle data-testid="text-payment-details">Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Shipping Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" data-testid="input-first-name" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" data-testid="input-last-name" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" data-testid="input-email" required />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" data-testid="input-address" required />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" data-testid="input-city" required />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" data-testid="input-state" required />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" data-testid="input-zip" required />
                  </div>
                </div>
              </div>

              {/* Payment Element */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Payment Information</h3>
                <PaymentElement />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-green-600"
                disabled={!stripe || isProcessing}
                data-testid="button-complete-payment"
              >
                {isProcessing ? 'Processing...' : `Complete Payment - $${total.toFixed(2)}`}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const DemoCheckoutForm = () => {
  const { total, items, clearCart } = useCart();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Demo Payment Successful!",
        description: "This is a demo payment. In production, this would process through Stripe.",
      });
      clearCart();
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Order Summary */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle data-testid="text-order-summary">Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between" data-testid={`order-item-${item.product.id}`}>
                  <div>
                    <p className="font-medium" data-testid={`text-item-name-${item.product.id}`}>
                      {item.product.name}
                    </p>
                    <p className="text-sm text-muted" data-testid={`text-item-quantity-${item.product.id}`}>
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium" data-testid={`text-item-total-${item.product.id}`}>
                    ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span data-testid="text-checkout-total">${total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Demo Payment Form */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle data-testid="text-payment-details">Demo Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Demo Mode Active
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>This is a demo payment form. Use any test card details:</p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Card: 4242 4242 4242 4242</li>
                      <li>Expiry: Any future date</li>
                      <li>CVC: Any 3 digits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleDemoSubmit} className="space-y-6">
              {/* Shipping Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Shipping Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" data-testid="input-first-name" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" data-testid="input-last-name" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" data-testid="input-email" required />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" data-testid="input-address" required />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" data-testid="input-city" required />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" data-testid="input-state" required />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" data-testid="input-zip" required />
                  </div>
                </div>
              </div>

              {/* Demo Payment Fields */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Payment Information</h3>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="4242 4242 4242 4242" 
                    defaultValue="4242 4242 4242 4242"
                    disabled
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/YY" 
                      defaultValue="12/25"
                      disabled
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input 
                      id="cvc" 
                      placeholder="123" 
                      defaultValue="123"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-green-600"
                disabled={isProcessing}
                data-testid="button-complete-payment"
              >
                {isProcessing ? 'Processing Demo Payment...' : `Complete Demo Payment - $${total.toFixed(2)}`}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default function Checkout() {
  const { total, items } = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const [isDemo, setIsDemo] = useState(false);

  useEffect(() => {
    if (total > 0) {
      // Create PaymentIntent as soon as the page loads
      apiRequest("POST", "/api/create-payment-intent", { amount: total })
        .then((res) => res.json())
        .then((data) => {
          if (data.demo) {
            // Demo mode - payments disabled
            setIsDemo(true);
            setClientSecret("demo");
          } else {
            setIsDemo(false);
            setClientSecret(data.clientSecret);
          }
        })
        .catch((error) => {
          console.error('Error creating payment intent:', error);
          setClientSecret("error");
        });
    }
  }, [total]);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">No items in cart</h1>
          <p className="text-muted">Please add items to your cart before checking out.</p>
        </div>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading" />
      </div>
    );
  }

  if (clientSecret === "error") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Setup Error</h1>
          <p className="text-muted">Unable to initialize payment. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8" data-testid="text-checkout-title">
          Checkout {isDemo && "- Demo Mode"}
        </h1>
        
        {isDemo ? (
          <DemoCheckoutForm />
        ) : stripePromise ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Stripe Not Configured
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>Stripe payment processing is not configured. To enable payments:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Set VITE_STRIPE_PUBLIC_KEY in environment variables</li>
                    <li>Configure Stripe keys for payment processing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
