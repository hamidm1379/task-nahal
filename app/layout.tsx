import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const IranianSans = localFont({
  src: "../public/fonts/IranianSans.ttf",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={`flex flex-col bg-gray-900 min-h-screen ${IranianSans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
