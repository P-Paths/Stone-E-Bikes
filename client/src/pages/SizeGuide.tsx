import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function SizeGuide() {
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
            E-Bike Size Guide
          </h1>
          <p className="text-xl text-muted">
            Find the perfect fit for your e-bike adventure
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">How to Choose Your E-Bike Size</h2>
              <div className="space-y-4">
                <p className="text-muted">
                  Choosing the right e-bike size is crucial for comfort, safety, and performance. 
                  Our e-bikes are designed to accommodate a wide range of riders.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Pro Tip:</strong> When in doubt, it's better to go slightly smaller than larger. 
                    You can always adjust the seat height and handlebar position.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Our E-Bike Sizing</h2>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">20" Fat Tire OKONGE</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted">Recommended Rider Height:</p>
                      <p className="text-muted">5'2" - 6'2" (158cm - 188cm)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">Weight Capacity:</p>
                      <p className="text-muted">Up to 300 lbs (136kg)</p>
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">26" Fat Tire KETELES</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted">Recommended Rider Height:</p>
                      <p className="text-muted">5'6" - 6'6" (168cm - 198cm)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">Weight Capacity:</p>
                      <p className="text-muted">Up to 350 lbs (159kg)</p>
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">26" ASKGO (700W)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted">Recommended Rider Height:</p>
                      <p className="text-muted">5'4" - 6'4" (163cm - 193cm)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">Weight Capacity:</p>
                      <p className="text-muted">Up to 280 lbs (127kg)</p>
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">24" Trike CO-Z</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted">Recommended Rider Height:</p>
                      <p className="text-muted">5'0" - 6'0" (152cm - 183cm)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">Weight Capacity:</p>
                      <p className="text-muted">Up to 250 lbs (113kg)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">20" Trike OKONGE</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted">Recommended Rider Height:</p>
                      <p className="text-muted">4'10" - 5'10" (147cm - 178cm)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">Weight Capacity:</p>
                      <p className="text-muted">Up to 220 lbs (100kg)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Comfort Tips</h2>
              <div className="space-y-3">
                <p className="text-muted">• Your feet should comfortably reach the ground when seated</p>
                <p className="text-muted">• Arms should be slightly bent when holding the handlebars</p>
                <p className="text-muted">• Trikes offer the most stability for seniors and those with balance concerns</p>
                <p className="text-muted">• Fat tire bikes provide better traction on various terrains</p>
                <p className="text-muted">• All our e-bikes have adjustable seats and handlebars</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Need Help?</h2>
              <p className="text-muted mb-4">
                Unsure about sizing? Contact us for personalized recommendations:
              </p>
              <div className="space-y-2">
                <p className="text-muted">📧 Email: info@stonee-bikes.com</p>
                <p className="text-muted">📞 Phone: (555) 123-BIKE</p>
                <p className="text-muted">📍 Visit us: 123 Bike Street, Cycling City, CC 12345</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
