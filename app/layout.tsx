import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Meteors from "@/components/utils/animations/meteors";
import { cn } from "@/lib/utils";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://winlax-portfolio.vercel.app",
  ),
  title: {
    default: "WinLax Portfolio - Frontend Developer Portfolio",
    template: "%s | WinLax Portfolio",
  },
  description:
    "Welcome to WinLax Portfolio, Explore the digital portfolio and showcase of WinLax, featuring their creative work and services.",
  keywords: [
    "winlax",
    "win_lax",
    "@win_lax",
    "#win_lax",
    "win lã",
    "win lã portfolio",
    "winlax portfolio",
    "win_lax portfolio",
    "winlax-portfolio",
    "digital portfolio",
    "creative showcase",
    "front end developer",
    "frontend developer",
    "frontend web developer",
    "web design",
    "system design",
    "animation website",
    "web developer",
    "web designer",
    "web developer portfolio",
    "web designer portfolio",
    "website portfolio",
    "winlax cv",
    "cv winlax",
  ],
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    images: [
      {
        url: "/og/og-main.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  other: {
    "google-site-verification":
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "relative h-full min-h-svh overflow-x-hidden bg-background font-sans antialiased",
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
          <div className="relative flex min-h-svh w-full flex-col justify-center transition-all duration-1000 bg-grid-black dark:bg-grid-white">
            <div className="fixed inset-0 flex w-svw overflow-hidden">
              <Meteors number={30} />
            </div>
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,hsl(var(--foreground)))]"></div>
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
