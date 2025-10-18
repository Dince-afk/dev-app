import { ConsentPopup } from "@/components/consent/consent-popup";
import Header from "@/components/header";
import Logo from "@/components/logo";
import NavigationBar from "@/components/navigation-menu";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/footer";

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
          <Header className="flex items-center justify-between px-4 py-3 sm:px-8">
            <div className="flex items-center gap-12">
              <Link href="/">
                <Logo className="h-8" />
              </Link>
              <NavigationBar className="" />
            </div>
          </Header>
          <main className="min-h-screen py-16">{children}</main>
          <Footer />
          <ConsentPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
