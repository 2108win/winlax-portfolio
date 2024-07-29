import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WinLax",
  description:
    "About WinLax - WinLax is a Frontend developer based in Vietnam.",
  openGraph: {
    images: [
      {
        url: "/og/og-about.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
