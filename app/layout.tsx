import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { playfair, segoe, windSong } from "./fonts";
import { PreloadResources } from "@/layout/preload-resources";

export const metadata: Metadata = {
  title: "Dung & Khanh wedding",
  description: "Welcome to our wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${segoe.variable} ${playfair.variable} ${windSong.variable}`}>
      <body
        className={`${segoe.className} antialiased bg-white overflow-x-hidden scroll-smooth`}
      >
        <PreloadResources />
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
