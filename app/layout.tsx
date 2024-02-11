"use client";
import Footer from "@/components/organism/footer";
import Header from "@/components/organism/header";
import { GlobalProvider } from "@/context/store";
import { Providers } from "@/utils/themeMode"; // Plus Jakarta Sans font family with 4 weights and 2 styles
import { Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import React from "react";
import "./globals.css";

// Plus Jakarta Sans font family with 4 weights and 2 styles
const Jakarta_Sans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

// Work Sans font family with 4 weights and 2 styles
const work_Sans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${Jakarta_Sans.variable} ${work_Sans.variable} font-sans`}
    >
      <body>
        <Providers>
          <GlobalProvider>
            <Header />
            {children}
            <Footer />
          </GlobalProvider>
        </Providers>
      </body>
    </html>
  );
}
