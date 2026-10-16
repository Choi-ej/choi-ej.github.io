import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { profile, siteUrl } from "@/data/content";
import "./globals.css";

// Serif for the name only; self-hosted at build time.
const serif = Newsreader({ subsets: ["latin"], axes: ["opsz"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: profile.title,
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: profile.title,
    description: profile.description,
    url: "/",
    siteName: profile.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: profile.title }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: profile.title, description: profile.description, images: "/og-image.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={serif.variable}>
      <body>{children}</body>
    </html>
  );
}
