import type { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { AuroraHero } from "@/components/base/animations/bg-radiant";

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
          "relative h-full min-h-svh bg-background font-sans antialiased",
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
            {/* <FuzzyOverlay /> */}
            <AuroraHero />
            <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center bg-white transition-all duration-1000 [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] dark:bg-black"></div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
