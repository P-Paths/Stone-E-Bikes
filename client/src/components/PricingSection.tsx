import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";
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
            Featured E-Bikes
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Discover our premium collection of electric bicycles for every adventure
          </p>
          {PRICING.note && (
            <Badge variant="secondary" className="mt-4">
              {PRICING.note}
            </Badge>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING.tiers.slice(0, 3).map((tier, index) => {
            // Map bike IDs to actual image filenames
            const imageMap: { [key: string]: string } = {
              'askgo-26': 'askgo-26.png',
              'okonge-fat-20': 'okonge-fat-20.png', 
              'keteles-fat-26': 'keteles-fat-26.png',
              'coz-trike-24': '24" Trike CO-Z.png',
              'okonge-trike-20': '20" Trike OKONGE.png'
            };
            
            const getImageUrl = (bikeId: string) => {
              const filename = imageMap[bikeId] || `${bikeId}.png`;
              return `/images/e-bikes/${encodeURIComponent(filename)}`;
            };

            return (
              <Card 
                key={tier.id} 
                className={`relative overflow-hidden hover:shadow-xl transition-shadow duration-300 ${index === 1 ? 'ring-2 ring-accent scale-105' : ''}`}
                data-testid={`card-pricing-${tier.id}`}
              >
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-black z-10">
                    Most Popular
                  </Badge>
                )}
                
                {/* Bike Image */}
                <div className="relative h-64 bg-gray-100">
                  <img
                    src={getImageUrl(tier.id)}
                    alt={tier.label}
                    className="w-full h-full object-contain p-4"
                    data-testid={`img-bike-${tier.id}`}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300';
                    }}
                  />
                </div>

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">{tier.label}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      ${tier.price}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/shop">
                    <Button 
                      className={`w-full ${
                        index === 1 
                          ? 'bg-accent hover:bg-yellow-600 text-black' 
                          : 'bg-primary hover:bg-gray-700 text-white'
                      }`}
                      data-testid={`button-select-${tier.id}`}
                    >
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}