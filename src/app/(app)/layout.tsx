import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavigationBar from "@/components/navigation-menu";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/header";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { ConsentPopup } from "@/components/consent/consent-popup";

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
          <Header>
            <div className="flex items-center justify-between">
              <NavigationBar />
              <ThemeSwitcher className="m-2" />
            </div>
          </Header>
          <main className="py-16">{children}</main>
          <footer>Footer</footer>
          <ConsentPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
