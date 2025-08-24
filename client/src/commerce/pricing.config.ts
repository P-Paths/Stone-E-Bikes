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
      id: "starter",
      label: "Starter",
      priceMonthly: 20,
      features: ["Basic site", "Email support", "1 brand"]
    },
    {
      id: "solo",
      label: "Solo Hustler",
      priceMonthly: 50,
      features: ["Pro site", "Priority support", "3 brands"]
    },
    {
      id: "dealer",
      label: "Dealer Pro",
      priceMonthly: 200,
      features: ["Advanced e-com", "VIP support", "Unlimited brands"]
    }
  ],
  note: "7-day free trial available"
};