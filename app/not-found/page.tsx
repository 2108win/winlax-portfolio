import { Metadata } from "next";
import NotFound from "../not-found";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "Page Not Found - Winlax - WinLax is a Frontend developer based in Vietnam.",
  openGraph: {
    images: [
      {
        url: "/og-404.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}
