import type { Metadata } from "next";
import { Poppins, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.optygate.com"),
  title: {
    default: "Optygate Portfolio | The Gateway to the Future",
    template: "%s | Optygate Portfolio",
  },
  description:
    "Explore Optygate's portfolio of innovative solutions. We deliver cutting-edge technology including automation, software development, and IT infrastructure worldwide.",
  keywords: [
    "Optygate",
    "Digital Transformation",
    "Technology Solutions",
    "Dubai",
    "UAE",
    "Automation",
    "Software Development",
    "IT Infrastructure",
    "Portfolio",
  ],
  authors: [{ name: "Optygate", url: "https://optygate.com" }],
  creator: "Optygate",
  publisher: "Optygate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.optygate.com",
    siteName: "Optygate Portfolio",
    title: "Optygate Portfolio | The Gateway to the Future",
    description:
      "Explore Optygate's portfolio of innovative solutions delivering cutting-edge technology worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Optygate Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optygate Portfolio | The Gateway to the Future",
    description:
      "Explore Optygate's portfolio of innovative solutions delivering cutting-edge technology worldwide.",
    images: ["/og-image.png"],
    creator: "@optygate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
