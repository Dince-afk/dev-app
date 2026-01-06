import { ConsentPopup } from "@/features/consent";
import Header from "@/layouts/main/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/layouts/main/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev App",
  description: "Application used for development purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ConsentPopup />
        </ThemeProvider>
        <Script
          defer
          src="https://umami.admin-gateway.dev/script.js"
          data-website-id="7a5a3db4-cb0f-4aa6-a464-1561e1a6708e"
        ></Script>
      </body>
    </html>
  );
}
