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
  brandName: "Stone E-Bikes",
  logo: {
    text: "Stone E-Bikes",
    imageUrl: undefined, // Can be replaced with actual logo URL
  },
  colors: {
    primary: "#000000", // Black
    secondary: "#FFFFFF", // White
    accent: "#FFD700", // Gold
    muted: "#6B7280", // gray-500
    background: "#FFFFFF", // White
    foreground: "#000000", // Black
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
    phone: "313-495-2887",
    email: "info@stonee-bikes.com",
    address: "15151 W 8 Mile\nDetroit, Michigan",
  },
  social: {
    facebook: "https://facebook.com/stonee-bikes",
    twitter: "https://twitter.com/stonee-bikes",
    instagram: "https://instagram.com/stonee-bikes",
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
