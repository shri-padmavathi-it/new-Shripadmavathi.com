import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shri Padmavathi Consultants - Engineering & IT Solutions | SPC",
  description:
    "Leading consultants firm with 20+ years of experience in Engineering and IT services. Specializing in product design, enterprise solutions, and global delivery across 15+ countries. Expert guidance for business growth and technological advancement.",

  keywords: [
    "engineering consultants",
    "IT solutions",
    "product design",
    "enterprise applications",
    "digital transformation",
    "business consulting",
    "technology services",
    "global delivery",
    "Bangalore Consultants",
    "SPC Consultants",
    "automation engineering",
    "cloud solutions",
    "industry solutions",
  ],

  authors: [{ name: "Shri Padmavathi Consultants" }],

  creator: "Shri Padmavathi Consultants",
  publisher: "Shri Padmavathi Consultancy",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL("https://shripadmavathi.com"),

  alternates: {
    canonical: "https://www.shripadmavathi.com/",
  },

  openGraph: {
    title: "Shri Padmavathi Consultants - Engineering & IT Solutions",
    description:
      "Fast-growing Engineering and IT services company with 20+ years of experience. Providing innovative solutions across multiple industries and 15+ countries.",
    url: "https://www.shripadmavathi.com/",
    siteName: "Shri Padmavathi Consultants",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Shri Padmavathi Consultants - Engineering & IT Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shri Padmavathi Consultants - Engineering & IT Solutions",
    description:
      "Leading consultants firm with 20+ years of experience in Engineering and IT services. Global presence across 15+ countries.",
    images: ["/logo.png"],
    creator: "@shripadmavathi",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#f97316",
      },
    ],
  },

  manifest: "/site.webmanifest",

  other: {
    "msapplication-TileColor": "#f97316",
    "theme-color": "#ffffff",
  },

  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  category: "Business Services",

  applicationName: "Shri Padmavathi Consultants",

  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  // Classification
  classification: "Engineering and IT Consultants Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shri Padmavathi Consultants",
    url: "https://shripadmavathi.com",
    logo: "https://shripadmavathi.com/logo.png",
  };

  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
