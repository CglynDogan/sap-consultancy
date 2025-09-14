import type { Metadata } from "next";
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
  title: "Tech Solutions - Leading SAP Consultancy in Canada",
  description: "Transform your business with our expert SAP consulting services. We provide SAP implementation, support, and optimization solutions for businesses across Canada.",
  keywords: "SAP consulting, SAP implementation, SAP support, ERP solutions, business transformation, Canada",
  authors: [{ name: "Tech Solutions" }],
  creator: "Tech Solutions",
  publisher: "Tech Solutions",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://techsolutions.ca",
    title: "Tech Solutions - Leading SAP Consultancy in Canada",
    description: "Transform your business with our expert SAP consulting services.",
    siteName: "Tech Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Solutions - Leading SAP Consultancy in Canada",
    description: "Transform your business with our expert SAP consulting services.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
