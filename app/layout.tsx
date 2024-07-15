import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Meteors from "@/components/ui/meteors";
import { AuroraHero } from "@/components/utils/animations/bg-radiant";
import { cn } from "@/lib/utils";
import "core-js/full/promise/with-resolvers";
import type { Metadata } from "next";
import { Nunito as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
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

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/FzPoppins/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/FzPoppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/FzPoppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/FzPoppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/FzPoppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/FzPoppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
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
          poppins.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-svh w-full flex-col transition-all duration-1000 bg-grid-black dark:bg-grid-white">
            {/* <FuzzyOverlay /> */}
            <div className="fixed inset-0 flex w-svw overflow-hidden">
              <Meteors number={30} />
            </div>
            <AuroraHero />
            <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center bg-white transition-all duration-1000 [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] dark:bg-black"></div>
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
