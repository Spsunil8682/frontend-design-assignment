import type { Metadata } from "next";
import { Open_Sans, Poppins, Volkhov } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const volkhov = Volkhov({
  variable: "--font-volkhov",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jadoo — Travel, enjoy and live a new and full life",
  description:
    "Plan your next trip with Jadoo: flights, weather, local events and fully customised travel services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${volkhov.variable} ${openSans.variable} font-sans antialiased`}
      >
        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
