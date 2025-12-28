import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, Clock, Shield, CheckCircle } from 'lucide-react';

export default function Returns() {
  const returnPolicy = [
    {
      icon: Clock,
      title: "30-Day Return Window",
      description: "You have 30 days from delivery to return your e-bike for a full refund."
    },
    {
      icon: Shield,
      title: "Full Refund Guarantee",
      description: "Receive a complete refund including original shipping costs (minus return shipping)."
    },
    {
      icon: CheckCircle,
      title: "Easy Return Process",
      description: "Simple online return process with prepaid return labels for your convenience."
    }
  ];

  const returnConditions = [
    "Item must be in original condition with all packaging and accessories",
    "E-bike must not show signs of use beyond test riding",
    "All original documentation and warranty cards must be included",
    "Battery must be at least 80% charged for safety during return shipping",
    "Custom or personalized items cannot be returned"
  ];

  const returnSteps = [
    {
      step: "1",
      title: "Contact Us",
      description: "Email or call us to initiate your return within 30 days of delivery."
    },
    {
      step: "2", 
      title: "Get Return Label",
      description: "We'll email you a prepaid return shipping label and return instructions."
    },
    {
      step: "3",
      title: "Package & Ship",
      description: "Securely package your e-bike using original packaging and ship it back."
    },
    {
      step: "4",
      title: "Receive Refund",
      description: "Once we receive and inspect your return, we'll process your refund within 5-7 business days."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="text-returns-title">
            Return Policy
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto" data-testid="text-returns-description">
            We want you to be completely satisfied with your e-bike purchase. Our flexible return policy makes it easy.
          </p>
        </div>

        {/* Return Policy Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {returnPolicy.map((policy, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`return-policy-${index}`}>
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <policy.icon className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl" data-testid={`return-policy-title-${index}`}>
                  {policy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted" data-testid={`return-policy-description-${index}`}>
                  {policy.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Return Process */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center">
              <RotateCcw className="w-6 h-6 text-accent mr-2" />
              How to Return Your E-Bike
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {returnSteps.map((step, index) => (
                <div key={index} className="text-center" data-testid={`return-step-${index}`}>
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-lg">{step.step}</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2" data-testid={`return-step-title-${index}`}>
                    {step.title}
                  </h4>
                  <p className="text-muted text-sm" data-testid={`return-step-description-${index}`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Return Conditions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Return Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {returnConditions.map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span data-testid={`return-condition-${index}`}>{condition}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Warranty Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">2-Year Warranty</h4>
                <p className="text-muted">All e-bikes come with a comprehensive 2-year warranty covering manufacturing defects.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Battery Warranty</h4>
                <p className="text-muted">Battery warranty covers 1 year or 500 charge cycles, whichever comes first.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Warranty Service</h4>
                <p className="text-muted">Authorized service centers nationwide for warranty repairs and maintenance.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exchange Policy */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Exchange Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">Size Exchanges</h4>
                <p className="text-muted mb-4">
                  Need a different size? We offer free size exchanges within 30 days of delivery.
                </p>
                <ul className="space-y-2 text-muted">
                  <li>• Free return shipping for size exchanges</li>
                  <li>• Free shipping for replacement bike</li>
                  <li>• No restocking fees</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-4">Model Upgrades</h4>
                <p className="text-muted mb-4">
                  Want to upgrade to a different model? We'll help you find the perfect e-bike.
                </p>
                <ul className="space-y-2 text-muted">
                  <li>• Pay the difference for upgrades</li>
                  <li>• Credit for returned bike</li>
                  <li>• Free shipping on upgrade</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Need Help with a Return?</h3>
              <p className="text-muted mb-6">
                Our customer service team is here to help make your return process as smooth as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+15551234567" 
                  className="bg-accent hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Call (555) 123-BIKE
                </a>
                <a 
                  href="mailto:returns@stonee-bikes.com"
                  className="border border-accent text-accent hover:bg-accent hover:text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Email Returns
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
