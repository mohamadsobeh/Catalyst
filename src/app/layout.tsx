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
  title: "Catalyst Technologies",
  description: "Innovative digital solutions for businesses",

  openGraph: {
    title: "Catalyst Technologies",
    description: "Innovative digital solutions for businesses",
    url: "https://catalysttechs.com",
    siteName: "Catalyst",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Catalyst Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/icon.png",              
    apple: "/apple-touch-icon.png",  
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
