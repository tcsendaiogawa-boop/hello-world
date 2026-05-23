import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          0: "#0B0F19",
          1: "#0F1422",
          2: "#111827",
          card: "#141927",
          card2: "#181f30",
        },
        cyan: {
          DEFAULT: "#00D1FF",
          dim: "rgba(0,209,255,0.10)",
          glow: "rgba(0,209,255,0.25)",
        },
        purple: {
          DEFAULT: "#7C3AED",
          dim: "rgba(124,58,237,0.12)",
          glow: "rgba(124,58,237,0.30)",
        },
        txt: {
          0: "#FFFFFF",
          1: "#D1D5DB",
          2: "#9CA3AF",
          3: "rgba(156,163,175,0.5)",
        },
      },
      fontFamily: {
        en: ["'Space Grotesk'", "Inter", "sans-serif"],
        ja: ["'Noto Sans JP'", "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        marqueeR: "marquee 22s linear infinite reverse",
        meshShift: "meshShift 15s ease-in-out infinite alternate",
        spinSlow: "spin 20s linear infinite",
        floatCard1: "floatCard1 6s ease-in-out infinite",
        floatCard2: "floatCard2 7s ease-in-out infinite",
        scrollPulse: "scrollPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        meshShift: {
          "0%": {
            background:
              "radial-gradient(ellipse 60% 50% at 70% 40%,rgba(0,209,255,.07) 0%,transparent 60%),radial-gradient(ellipse 50% 60% at 20% 70%,rgba(124,58,237,.08) 0%,transparent 60%)",
          },
          "100%": {
            background:
              "radial-gradient(ellipse 60% 50% at 75% 35%,rgba(0,209,255,.09) 0%,transparent 60%),radial-gradient(ellipse 50% 60% at 25% 75%,rgba(124,58,237,.10) 0%,transparent 60%)",
          },
        },
        floatCard1: {
          "0%,100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-10px) rotate(0deg)" },
        },
        floatCard2: {
          "0%,100%": { transform: "translateY(0) rotate(1deg)" },
          "50%": { transform: "translateY(8px) rotate(0deg)" },
        },
        scrollPulse: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "grad-main": "linear-gradient(135deg,#7C3AED,#4f1db5)",
        "grad-accent": "linear-gradient(135deg,#00D1FF,#7C3AED)",
        "grad-text": "linear-gradient(135deg,#fff 30%,rgba(255,255,255,.5))",
      },
    },
  },
  plugins: [],
};

export default config;
