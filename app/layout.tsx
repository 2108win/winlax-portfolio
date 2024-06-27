import type { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { Loader2 } from "lucide-react";
import { AuroraHero } from "@/components/base/animations/bg-radient";
import Footer from "@/components/layout/Footer";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "WinLax Portfolio",
    template: "%s | WinLax Portfolio",
  },
  description: "Welcome to WinLax Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-svh bg-background font-sans antialiased",
          fontSans.variable,
          clashDisplay.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-svh w-full flex-col transition-all duration-1000 bg-grid-black dark:bg-grid-white">
            {/* <BackgroundGradientAnimation containerClassName="z-[-1]" /> */}
            <AuroraHero />
            <Header />
            <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center bg-white transition-all duration-1000 [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] dark:bg-black"></div>
            {children}
            <Footer />
            <div className="z-10 mt-auto flex items-center justify-center py-8 text-center text-xl font-medium">
              DEVELOPING
              <Loader2 className="ml-2 h-6 w-6 animate-spin text-orange-400" />
            </div>
            <Link
              className={buttonVariants({
                className: "z-10 mx-auto my-2 w-fit rounded-full",
              })}
              href={"https://winlax-portfolio-93swck82h-2108win.vercel.app/"}
            >
              Back to Version 1
            </Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
