import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { PRICING } from "../commerce/pricing.config";

export function PricingSection() {
  // Safe fallback: if no tiers configured, render nothing
  if (!PRICING.tiers || PRICING.tiers.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-pricing-title">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
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
                <Button 
                  className={`w-full ${
                    index === 1 
                      ? 'bg-secondary hover:bg-blue-600' 
                      : 'bg-primary hover:bg-gray-700'
                  }`}
                  data-testid={`button-select-${tier.id}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}