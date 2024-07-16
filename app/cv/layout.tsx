import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV - Frontend Developer - Winlax",
  description:
    "CV - Frontend Developer - Winlax - WinLax is a Frontend developer based in Vietnam.",
  openGraph: {
    images: [
      {
        url: "/og-cv.png",
        width: 1200,
        height: 630,
      },
    ],
  },
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
    "frontend developer",
    "frontend web developer",
    "web design",
    "system design",
    "animation website",
    "web developer",
    "website portfolio",
    "winlax cv",
    "cv winlax",
  ],
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
