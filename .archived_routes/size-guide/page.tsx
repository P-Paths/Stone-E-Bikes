'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../client/src/components/ui/card';
import { Badge } from '../../client/src/components/ui/badge';

export default function SizeGuide() {
  const bikeSizes = [
    {
      name: "20\" Trike OKONGE",
      height: "4'8\" - 5'6\"",
      inseam: "26\" - 30\"",
      weight: "75 lbs",
      type: "Compact Trike",
      description: "Perfect for shorter riders and those seeking maximum stability"
    },
    {
      name: "24\" Trike CO-Z", 
      height: "5'0\" - 5'10\"",
      inseam: "28\" - 32\"",
      weight: "85 lbs",
      type: "Standard Trike",
      description: "Ideal for average height riders who want extra stability"
    },
    {
      name: "20\" Fat Tire OKONGE",
      height: "4'10\" - 5'8\"",
      inseam: "27\" - 31\"",
      weight: "55 lbs",
      type: "Compact Fat Tire",
      description: "Great for urban commuting and shorter riders"
    },
    {
      name: "26\" ASKGO (700W)",
      height: "5'4\" - 6'2\"",
      inseam: "30\" - 34\"",
      weight: "65 lbs",
      type: "Standard E-Bike",
      description: "Perfect for most adult riders with powerful 700W motor"
    },
    {
      name: "26\" Fat Tire KETELES",
      height: "5'6\" - 6'4\"",
      inseam: "31\" - 35\"",
      weight: "70 lbs",
      type: "Large Fat Tire",
      description: "Designed for taller riders and all-terrain adventures"
    }
  ];

  const sizingTips = [
    {
      title: "Height Measurement",
      description: "Stand barefoot against a wall and measure from the floor to the top of your head. This is your most important measurement for bike sizing.",
      icon: "📏"
    },
    {
      title: "Inseam Measurement", 
      description: "Stand with your back against a wall, place a book between your legs (as if sitting on a bike seat), and measure from the floor to the top of the book.",
      icon: "🦵"
    },
    {
      title: "Comfort Test",
      description: "When sitting on the bike, you should be able to place both feet flat on the ground with a slight bend in your knees.",
      icon: "✅"
    },
    {
      title: "Reach Test",
      description: "Your arms should have a slight bend when holding the handlebars, and you should feel comfortable and not stretched out.",
      icon: "🤲"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">E-Bike Size Guide</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Find the perfect fit for your Stone E-Bike. Proper sizing ensures comfort, safety, and optimal performance.
          </p>
        </div>

        {/* Sizing Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">How to Measure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sizingTips.map((tip, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                  <p className="text-muted text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bike Size Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our E-Bike Sizes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bikeSizes.map((bike, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{bike.name}</CardTitle>
                    <Badge variant="secondary">{bike.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-sm text-muted">Height Range:</span>
                      <p className="text-primary font-medium">{bike.height}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-muted">Inseam Range:</span>
                      <p className="text-primary font-medium">{bike.inseam}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-muted">Weight:</span>
                      <p className="text-primary font-medium">{bike.weight}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-muted">Best For:</span>
                      <p className="text-muted text-sm">{bike.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-primary mb-6">Important Sizing Notes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">Trike Considerations</h3>
              <ul className="space-y-2 text-muted">
                <li>• Trikes offer maximum stability for riders of all skill levels</li>
                <li>• Perfect for seniors or those with balance concerns</li>
                <li>• Lower step-through design for easy mounting</li>
                <li>• Can accommodate riders with mobility limitations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">Fat Tire Benefits</h3>
              <ul className="space-y-2 text-muted">
                <li>• Superior traction on various surfaces</li>
                <li>• More comfortable ride over bumps and rough terrain</li>
                <li>• Better stability in wet or snowy conditions</li>
                <li>• Ideal for year-round riding</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Still Unsure?</h2>
          <p className="text-muted mb-6">
            Our team is here to help you find the perfect e-bike. Contact us for personalized sizing assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/shop"
              className="border border-accent text-accent hover:bg-accent hover:text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

