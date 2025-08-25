import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function ShippingInfo() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Shipping Information
          </h1>
          <p className="text-xl text-muted">
            Fast, reliable shipping to get your e-bike to you quickly and safely
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Shipping Options</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-lg font-semibold">Standard Shipping</h3>
                  <p className="text-muted">5-7 business days</p>
                  <p className="text-sm text-muted">Free on orders over $500</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-lg font-semibold">Express Shipping</h3>
                  <p className="text-muted">2-3 business days</p>
                  <p className="text-sm text-muted">Additional $49.99</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-lg font-semibold">Local Pickup</h3>
                  <p className="text-muted">Available in Detroit area</p>
                  <p className="text-sm text-muted">Free - contact us to arrange</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">What to Expect</h2>
              <div className="space-y-3">
                <p className="text-muted">• E-bikes are shipped fully assembled and ready to ride</p>
                <p className="text-muted">• Professional packaging ensures safe delivery</p>
                <p className="text-muted">• Tracking information provided via email</p>
                <p className="text-muted">• Signature required for delivery</p>
                <p className="text-muted">• Delivery available to all 50 states</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-muted mb-4">
                Questions about shipping? Contact us at:
              </p>
              <div className="space-y-2">
                <p className="text-muted">📧 Email: info@stonee-bikes.com</p>
                <p className="text-muted">📞 Phone: (555) 123-BIKE</p>
                <p className="text-muted">📍 Address: 123 Bike Street, Cycling City, CC 12345</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
