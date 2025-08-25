export interface PricingTier {
  id: string;
  label: string;
  priceMonthly: number;
  features: string[];
}

export interface PricingConfig {
  currency: string;
  tiers: PricingTier[];
  note: string;
}

export const PRICING: PricingConfig = {
  currency: "USD",
  tiers: [
    {
      id: "askgo-26",
      label: '26" ASKGO (700W)',
      priceMonthly: 701.58,
      features: ["700W Motor", "26 inch wheels", "Electric bike", "Premium quality"]
    },
    {
      id: "okonge-fat-20",
      label: '20" Fat Tire OKONGE',
      priceMonthly: 1499.58,
      features: ["Fat tire design", "20 inch wheels", "All-terrain capability", "Rugged build"]
    },
    {
      id: "keteles-fat-26",
      label: '26" Fat Tire KETELES',
      priceMonthly: 3171.58,
      features: ["Premium fat tire", "26 inch wheels", "High-end components", "Professional grade"]
    },
    {
      id: "coz-trike-24",
      label: '24" Trike CO-Z',
      priceMonthly: 909.79,
      features: ["3-wheel stability", "24 inch wheels", "Easy riding", "Comfortable seating"]
    },
    {
      id: "okonge-trike-20",
      label: '20" Trike OKONGE',
      priceMonthly: 1279.79,
      features: ["3-wheel trike", "20 inch wheels", "Stable design", "Quality construction"]
    }
  ],
  note: "Bulk pricing scenarios available for 3, 4, 5, and 8 unit packages"
};