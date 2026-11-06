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
  title: "Geospatial Works | Where Engineering Meets Precision • Consultancy & Surveying",
  description: "Geospatial Works is an engineering, geospatial, and precision surveying consultancy delivering integrated technical solutions for infrastructure development, RTK GNSS, UAV drone surveys, hydrography, GIS, and spatial planning.",
  keywords: [
    "Geospatial Works",
    "RTK GNSS Survey Bangladesh",
    "UAV Drone Survey",
    "Hydrographic Bathymetry",
    "GIS Spatial Analysis",
    "Engineering Consultancy Dhaka",
    "1st Class Contractor Survey",
    "Topographic Mapping"
  ],
  authors: [{ name: "Geospatial Works" }],
  icons: {
    icon: "/assets/images/logo.png",
  },
  openGraph: {
    title: "Geospatial Works | Where Engineering Meets Precision",
    description: "Integrated technical solutions for infrastructure development, precision surveying, and sustainable spatial planning.",
    url: "https://www.geospatialworks.com.bd",
    siteName: "Geospatial Works",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "Geospatial Works Corporate Logo",
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
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
