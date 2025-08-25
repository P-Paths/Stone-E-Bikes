import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Returns() {
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
            Return Policy
          </h1>
          <p className="text-xl text-muted">
            We want you to be completely satisfied with your purchase
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">30-Day Return Policy</h2>
              <div className="space-y-4">
                <p className="text-muted">
                  We offer a 30-day return policy on all e-bikes and accessories. If you're not completely 
                  satisfied with your purchase, you can return it for a full refund or exchange.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> E-bikes must be returned in original condition with all 
                    original packaging and accessories. Test rides are limited to 10 miles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Return Process</h2>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="bg-accent text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                    <div>
                      <h3 className="font-semibold">Contact Us</h3>
                      <p className="text-muted text-sm">Email us at info@stonee-bikes.com with your order number and reason for return</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-accent text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                    <div>
                      <h3 className="font-semibold">Get Return Label</h3>
                      <p className="text-muted text-sm">We'll provide a prepaid shipping label for your return</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-accent text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                    <div>
                      <h3 className="font-semibold">Ship Back</h3>
                      <p className="text-muted text-sm">Pack your item securely and ship it back using our label</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-accent text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                    <div>
                      <h3 className="font-semibold">Refund Processed</h3>
                      <p className="text-muted text-sm">Refund will be processed within 5-7 business days of receiving your return</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Non-Returnable Items</h2>
              <div className="space-y-3">
                <p className="text-muted">• Custom or personalized e-bikes</p>
                <p className="text-muted">• Items that have been damaged due to misuse</p>
                <p className="text-muted">• Items missing original packaging or accessories</p>
                <p className="text-muted">• Items returned after 30 days</p>
                <p className="text-muted">• Used safety equipment (helmets, etc.)</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-muted mb-4">
                Questions about returns? Contact us at:
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
