import type { Metadata } from "next";
import localFont from "next/font/local";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"]});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portafolio Renzo Aliendro",
  description: "Presentación Oficial de mi Portafolio Personal, by Renzo Aliendro",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${urbanist.className} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
