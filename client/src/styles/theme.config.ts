export interface ThemeConfig {
  brandName: string;
  logo: {
    text: string;
    imageUrl?: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
    background: string;
    foreground: string;
  };
  fonts: {
    sans: string;
    serif: string;
    mono: string;
  };
  layout: {
    maxWidth: string;
    borderRadius: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const defaultTheme: ThemeConfig = {
  brandName: "Stonee Bikes",
  logo: {
    text: "Stonee Bikes",
    imageUrl: undefined, // Can be replaced with actual logo URL
  },
  colors: {
    primary: "#1F2937", // gray-800
    secondary: "#3B82F6", // blue-500
    accent: "#10B981", // emerald-500
    muted: "#6B7280", // gray-500
    background: "#FFFFFF",
    foreground: "#111827", // gray-900
  },
  fonts: {
    sans: "Inter, system-ui, sans-serif",
    serif: "Georgia, serif",
    mono: "Monaco, Consolas, monospace",
  },
  layout: {
    maxWidth: "1280px", // max-w-7xl
    borderRadius: "0.5rem", // rounded-lg
  },
  contact: {
    phone: "(555) 123-BIKE",
    email: "info@stoneebikes.com",
    address: "123 Bike Street, Cycling City, CC 12345",
  },
  social: {
    facebook: "https://facebook.com/stoneebikes",
    twitter: "https://twitter.com/stoneebikes",
    instagram: "https://instagram.com/stoneebikes",
  },
};

// Allow theme customization by overriding specific properties
export const createTheme = (overrides: Partial<ThemeConfig>): ThemeConfig => {
  return {
    ...defaultTheme,
    ...overrides,
    colors: {
      ...defaultTheme.colors,
      ...overrides.colors,
    },
    fonts: {
      ...defaultTheme.fonts,
      ...overrides.fonts,
    },
    layout: {
      ...defaultTheme.layout,
      ...overrides.layout,
    },
    contact: {
      ...defaultTheme.contact,
      ...overrides.contact,
    },
    social: {
      ...defaultTheme.social,
      ...overrides.social,
    },
  };
};
