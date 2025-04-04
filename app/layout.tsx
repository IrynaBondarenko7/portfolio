import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import data from "../data.json";
import "./globals.css";

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
const { icons } = data;

export const metadata: Metadata = {
  title: "Iryna Bondarenko | Software Developer",
  description: "Portfolio of Iryna Bondarenko",
  icons,
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
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
