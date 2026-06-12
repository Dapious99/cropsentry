import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/nav";

export const metadata: Metadata = {
  title: {
    default: "CropSentry — Catch crop disease before it spreads",
    template: "%s — CropSentry",
  },
  description:
    "Scan a leaf with your phone. Our AI detects 40+ crop diseases in seconds, alerts you early, and recommends treatment — built for African farmers.",
  metadataBase: new URL("https://cropsentry.ai"),
  openGraph: {
    siteName: "CropSentry",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cropsentry",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter+Tight:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
