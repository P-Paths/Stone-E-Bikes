import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Clock, Shield, MapPin } from 'lucide-react';

export default function Shipping() {
  const shippingOptions = [
    {
      icon: Truck,
      title: "Standard Shipping",
      duration: "3-5 Business Days",
      price: "Free on orders over $100",
      description: "Standard ground shipping for most locations within the continental US."
    },
    {
      icon: Clock,
      title: "Express Shipping", 
      duration: "1-2 Business Days",
      price: "$19.99",
      description: "Priority shipping for faster delivery to most locations."
    },
    {
      icon: Shield,
      title: "White Glove Delivery",
      duration: "5-7 Business Days", 
      price: "$99.99",
      description: "Professional assembly and setup service for e-bikes and trikes."
    }
  ];

  const coverageAreas = [
    "Continental United States",
    "Alaska and Hawaii (additional fees may apply)",
    "Puerto Rico (standard shipping only)",
    "International shipping available upon request"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="text-shipping-title">
            Shipping Information
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto" data-testid="text-shipping-description">
            We offer fast, reliable shipping options to get your e-bike to you safely and quickly.
          </p>
        </div>

        {/* Shipping Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {shippingOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`shipping-option-${index}`}>
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl" data-testid={`shipping-title-${index}`}>
                  {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent mb-2" data-testid={`shipping-duration-${index}`}>
                  {option.duration}
                </div>
                <div className="text-lg font-semibold text-primary mb-4" data-testid={`shipping-price-${index}`}>
                  {option.price}
                </div>
                <p className="text-muted" data-testid={`shipping-description-${index}`}>
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coverage Areas */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-6 h-6 text-accent mr-2" />
              Shipping Coverage Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {coverageAreas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span data-testid={`coverage-area-${index}`}>{area}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Important Shipping Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Assembly Required</h4>
                <p className="text-muted">Most e-bikes require basic assembly. Detailed instructions and tools are included.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Delivery Confirmation</h4>
                <p className="text-muted">We'll send tracking information once your order ships.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Damaged Items</h4>
                <p className="text-muted">Please inspect your shipment immediately and contact us if any damage is found.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Special Handling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">E-Bike Batteries</h4>
                <p className="text-muted">Batteries are shipped separately and may arrive on different days.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Large Items</h4>
                <p className="text-muted">Trike and cargo bikes may require special delivery arrangements.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Weather Delays</h4>
                <p className="text-muted">Severe weather may cause shipping delays. We'll keep you updated.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Questions About Shipping?</h3>
              <p className="text-muted mb-6">
                Our customer service team is here to help with any shipping questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+15551234567" 
                  className="bg-accent hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Call (555) 123-BIKE
                </a>
                <a 
                  href="mailto:info@stonee-bikes.com"
                  className="border border-accent text-accent hover:bg-accent hover:text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Email Support
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
