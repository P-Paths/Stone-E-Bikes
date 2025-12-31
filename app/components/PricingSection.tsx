"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { PRICING } from "../commerce/pricing.config";
import { useRouter } from "next/navigation";

export function PricingSection() {
  const router = useRouter();
  
  // Safe fallback: if no tiers configured, render nothing
  if (!PRICING.tiers || PRICING.tiers.length === 0) {
    return null;
  }

  // Map bike IDs to actual image filenames
  const imageMap: { [key: string]: string } = {
    'askgo-26': 'askgo-26.png',
    'okonge-fat-20': 'okonge-fat-20.png', 
    'keteles-fat-26': 'keteles-fat-26.png',
    'coz-trike-24': '24" Trike CO-Z.png',
    'okonge-trike-20': '20" Trike OKONGE.png'
  };
  
  // Encode the filename for URL safety
  const getImageUrl = (bikeId: string) => {
    const filename = imageMap[bikeId] || `${bikeId}.png`;
    return `/images/e-bikes/${encodeURIComponent(filename)}`;
  };

  const handleGetStarted = (bikeId: string) => {
    // Navigate to shop page and scroll to specific bike
    router.push(`/shop#${bikeId}`);
  };

  const handleQuickView = (bikeId: string) => {
    // For now, just navigate to shop page
    // In the future, this could open a modal with bike details
    router.push(`/shop#${bikeId}`);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-pricing-title">
            Featured E-Bikes
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Discover our premium collection of electric bicycles
          </p>
          {PRICING.note && (
            <Badge variant="secondary" className="mt-4">
              {PRICING.note}
            </Badge>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING.tiers.map((tier, index) => (
            <Card 
              key={tier.id} 
              className={`relative ${index === 1 ? 'ring-2 ring-secondary scale-105' : ''}`}
              data-testid={`card-pricing-${tier.id}`}
            >
              {index === 1 && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary">
                  Most Popular
                </Badge>
              )}
              <div className="relative">
                <img
                  src={getImageUrl(tier.id)}
                  alt={tier.label}
                  className="w-full h-48 object-contain bg-gray-100"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300';
                  }}
                />
                <div className="absolute top-2 left-2 bg-accent text-black font-semibold px-2 py-1 rounded text-xs">
                  Electric
                </div>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl font-bold">{tier.label}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    ${tier.priceMonthly}
                  </span>
                  <span className="text-muted">/{PRICING.currency}/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-black font-semibold"
                    data-testid={`button-quick-view-${tier.id}`}
                    onClick={() => handleQuickView(tier.id)}
                  >
                    Quick View
                  </Button>
                  <Button 
                    className={`flex-1 ${
                      index === 1 
                        ? 'bg-accent hover:bg-yellow-600 text-black font-semibold' 
                        : 'bg-accent hover:bg-yellow-600 text-black font-semibold'
                    }`}
                    data-testid={`button-select-${tier.id}`}
                    onClick={() => handleGetStarted(tier.id)}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}