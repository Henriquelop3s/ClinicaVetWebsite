import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/styles/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Elegante: Marrom + Preto + Dourado
        primary: {
          DEFAULT: "#1A1A1A", // Preto sofisticado
          dark: "#000000", // Preto absoluto
          light: "#333333", // Cinza escuro
        },
        secondary: {
          DEFAULT: "#D4AF37", // Dourado elegante
          dark: "#B8860B", // Dourado escuro
          light: "#F4E4BC", // Dourado claro
        },
        accent: {
          DEFAULT: "#8B4513", // Saddle Brown - Marrom vibrante
          dark: "#654321", // Marrom escuro
          light: "#A0522D", // Marrom claro
        },
        neutral: {
          light: "#F5F5DC", // Beige suave
          dark: "#2F1B14", // Marrom escuro
        },
        surface: {
          DEFAULT: "#FFFFFF", // Branco puro
          elevated: "#FAFAFA", // Cinza muito claro
          dark: "#1A1A1A", // Preto
        },
        foreground: "#1A1A1A",
        muted: "#8B4513",
        background: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};

export default config;

