import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant,
  Newsreader,
  JetBrains_Mono,
  Inter,
} from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500"],
  style: ["italic", "normal"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["300", "400"],
  style: ["italic", "normal"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://the-archive-of-us.vercel.app"),
  title: "The Archive of Us",
  description: "A curated collection of beginnings, carefully stitched into memory.",
  openGraph: {
    title: "The Archive of Us",
    description: "Nuestra historia, página por página.",
    type: "website",
    url: "https://the-archive-of-us.vercel.app", // Reemplazar con el dominio real si se tiene
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Archive of Us",
    description: "Nuestra historia, página por página.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfairDisplay.variable} ${cormorant.variable} ${newsreader.variable} ${jetbrainsMono.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
