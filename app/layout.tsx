import type { Metadata } from "next";
import OnboardingSplash from "@/components/layout/OnboardingSplash";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { getSiteUrl, siteMetadata } from "@/lib/site";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteMetadata.title,
    template: "%s — 2percent",
  },
  description: siteMetadata.description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: siteMetadata.siteName,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <OnboardingSplash />
        <SiteHeader />
        <div className="flex min-h-[calc(100vh-4rem)] flex-col md:min-h-[calc(100vh-5rem)]">
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
