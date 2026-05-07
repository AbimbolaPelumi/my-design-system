import localFont from "next/font/local";

const suisseIntl = localFont({
  src: [
    {
      path: "./fonts/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SuisseIntl-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-suisse-intl",
});

const kudaModena = localFont({
  src: [
    {
      path: "./fonts/KUDAModena-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/KUDAModena-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-kuda-modena",
});

export { kudaModena, suisseIntl };
