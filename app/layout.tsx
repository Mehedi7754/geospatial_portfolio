import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geospatialworks.com.bd"),
  title: "Geospatial Works | Surveying, Mapping & GIS",
  description:
    "Geospatial surveying, drone mapping, GIS and remote sensing for a clearer, safer and more resilient Bangladesh.",
  keywords: [
    "Geospatial Works",
    "RTK GNSS Survey Bangladesh",
    "UAV Drone Survey",
    "Hydrographic Bathymetry",
    "GIS Spatial Analysis",
    "Engineering Consultancy Dhaka",
    "Topographic Mapping",
  ],
  authors: [{ name: "Geospatial Works" }],
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: "Geospatial Works | Surveying, Mapping & GIS",
    description:
      "Geospatial surveying, drone mapping, GIS and remote sensing for a clearer, safer and more resilient Bangladesh.",
    url: "https://www.geospatialworks.com.bd",
    siteName: "Geospatial Works",
    images: [
      {
        url: "/logo.webp",
        width: 1254,
        height: 1254,
        alt: "Geospatial Works Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-[#112c3a] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
