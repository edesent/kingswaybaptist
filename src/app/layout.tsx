import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { church, siteUrl } from "@/lib/site";
import "./globals.css";

// Dated things (events that expire) switch over on their own; re-render hourly.
export const revalidate = 3600;

const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-garamond-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/cormorant-garamond-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/cormorant-garamond-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/cormorant-garamond-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/cormorant-garamond-600-italic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});
const poppins = localFont({
  src: [
    { path: "../fonts/poppins-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/poppins-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/poppins-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/poppins-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const description = `${church.name} is an independent Baptist church on the Kings Highway in Mickleton, New Jersey, since 1975. King James Bible, hymns, Sunday School 10 AM, services 11 AM and 6 PM, Wednesday Bible study 7 PM. Pastor Samson Ryman. Every service streams on YouTube.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${church.name} · Mickleton, New Jersey`,
    template: `%s · ${church.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: church.name,
    title: `${church.name} · Mickleton, New Jersey`,
    description,
    url: siteUrl,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${church.name} on the Kings Highway in Mickleton, New Jersey` }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#1c1917",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: church.name,
  url: siteUrl,
  description,
  foundingDate: String(church.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: church.street,
    addressLocality: church.city,
    addressRegion: church.stateCode,
    postalCode: church.zip,
    addressCountry: "US",
  },
  sameAs: [church.facebook, church.instagram, church.youtube],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
