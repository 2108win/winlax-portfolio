import type { Metadata } from "next";
import { Roboto_Mono as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { BackgroundGradientAnimation } from "@/components/base/trying/background-gradient-animation";
import { Loader2 } from "lucide-react";

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
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div
            className={`relative flex min-h-dvh w-full items-center justify-center bg-grid-black dark:bg-grid-white ${clashDisplay.className}`}
          >
            <BackgroundGradientAnimation containerClassName="z-[-1]" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] dark:bg-black"></div>
            {children}
            <div className="absolute bottom-5 mt-8 flex items-center text-center text-xl font-medium">
              DEVELOPING
              <Loader2 className="ml-2 h-6 w-6 animate-spin text-orange-400" />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
