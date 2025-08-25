export interface PricingTier {
  id: string;
  label: string;
  priceMonthly: number;
  features: string[];
  specifications: {
    wheelSize: string;
    motor: string;
    battery: string;
    brakes: string;
    frame: string;
    geometry: string;
    accessories: string;
    range: string;
    maxSpeed: string;
    cost: number;
    retailPrice: number;
    bulkPrice?: number;
    premiumPrice?: number;
  };
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
      priceMonthly: 350.79,
      features: ["700W Motor", "26 inch wheels", "Electric bike", "Premium quality"],
      specifications: {
        wheelSize: "26″ × 4″ all-weather tires (gravel / light trail ready)",
        motor: "700W brushless hub motor (up to 28 mph assist)",
        battery: "Removable 48V 14Ah lithium-ion",
        brakes: "Front & rear mechanical disc brakes",
        frame: "Durable aluminum alloy with integrated rear cargo rack",
        geometry: "High-step commuter frame for balanced stability",
        accessories: "LED headlight, LCD display (speed, range), rear reflector",
        range: "35–50 mi",
        maxSpeed: "28 mph",
        cost: 169.36,
        retailPrice: 350.79,
        premiumPrice: 338.72
      }
    },
    {
      id: "okonge-fat-20",
      label: '20" Fat Tire OKONGE',
      priceMonthly: 749.79,
      features: ["Fat tire design", "20 inch wheels", "All-terrain capability", "Rugged build"],
      specifications: {
        wheelSize: "20″ × 4″ fat tires (sand, snow, trail-friendly)",
        motor: "500W hub motor with torque boost (~25 mph assist)",
        battery: "48V 10Ah removable pack",
        brakes: "Mechanical disc brakes front/rear",
        frame: "Foldable step-through aluminum frame (great for seniors or tight storage spaces)",
        geometry: "Compact foldable for easy storage",
        accessories: "Folding mechanism, LCD display, front fender",
        range: "25–45 mi",
        maxSpeed: "25 mph",
        cost: 504.03,
        retailPrice: 749.79,
        premiumPrice: 1009.66
      }
    },
    {
      id: "keteles-fat-26",
      label: '26" Fat Tire KETELES',
      priceMonthly: 1585.79,
      features: ["Premium fat tire", "26 inch wheels", "High-end components", "Professional grade"],
      specifications: {
        wheelSize: "26″ × 4.5″ fat tires (off-road capability)",
        motor: "750W high-torque hub motor (climbing hills with ease)",
        battery: "48V 17Ah extended-range pack",
        brakes: "Hydraulic disc brakes (better stopping power)",
        frame: "Heavy-duty alloy with front suspension fork",
        geometry: "Mountain geometry—comfortable upright yet stable",
        accessories: "Dual suspension, LCD, puncture-resistant tires",
        range: "40–60 mi",
        maxSpeed: "28+ mph",
        cost: 893.64,
        retailPrice: 1585.79,
        premiumPrice: 1787.28
      }
    },
    {
      id: "coz-trike-24",
      label: '24" Trike CO-Z',
      priceMonthly: 909.79,
      features: ["3-wheel stability", "24 inch wheels", "Easy riding", "Comfortable seating"],
      specifications: {
        wheelSize: "24″ on each wheel; stable three-wheel trike design",
        motor: "350W rear hub motor (max ~20 mph)",
        battery: "48V 8Ah",
        brakes: "Front caliper & rear drum brakes",
        frame: "Robust steel trike frame (extended rear deck for cargo)",
        geometry: "Low-step, stable, comfortable for low balance cyclists",
        accessories: "Rear basket, vinyl canopy mount, ergonomic seat",
        range: "20–35 mi",
        maxSpeed: "20 mph",
        cost: 546.14,
        retailPrice: 909.79,
        premiumPrice: 1128.79
      }
    },
    {
      id: "okonge-trike-20",
      label: '20" Trike OKONGE',
      priceMonthly: 1279.79,
      features: ["3-wheel trike", "20 inch wheels", "Stable design", "Quality construction"],
      specifications: {
        wheelSize: "20″ main wheels; traditional trike stability",
        motor: "500W hub motor (backed by torque sensor, ~22 mph)",
        battery: "48V 11Ah",
        brakes: "Front hydraulic disc + rear drum",
        frame: "Step-through trike alloy frame; adjustable seat",
        geometry: "Senior-friendly with low center of gravity",
        accessories: "Rear cargo basket, chain guard, safety lights",
        range: "25–45 mi",
        maxSpeed: "22 mph",
        cost: 779.80,
        retailPrice: 1279.79,
        premiumPrice: 1559.66
      }
    }
  ],
  note: "Bulk pricing scenarios available for 3, 4, 5, and 8 unit packages"
};