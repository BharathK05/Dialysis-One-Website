import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dialysis One - Manage Your Health Effortlessly",
  description: "Dialysis Management, Redefined. Smart Diet Tracking, Hydration Monitoring, and securely connect with your healthcare providers. Built for patients and providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
