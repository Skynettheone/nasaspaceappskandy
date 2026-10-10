import { MotionSystem } from "@/components/MotionSystem";
import "lenis/dist/lenis.css";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { I18nProvider } from "@/i18n";
import { site } from "@/content/site";
import "@/styles/globals.css";
import "@/styles/program.css";
import "@/styles/motion.css";
import "@fontsource-variable/overpass";
import "@fontsource-variable/fira-code";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NASA Space Apps Kandy | Ideas beyond boundaries",
    template: "%s | NASA Space Apps Kandy",
  },
  description:
    "Explore, collaborate, and build with NASA open data. Join the NASA Space Apps community in Kandy, Sri Lanka.",
  openGraph: {
    type: "website",
    siteName: site.name,
    images: ["/images/hero-launch-night.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <MotionSystem>
            <a className="skip-link" href="#main">
              Skip to content
            </a>
            <SiteHeader />
            {children}
            <SiteFooter />
          </MotionSystem>
        </I18nProvider>
      </body>
    </html>
  );
}
