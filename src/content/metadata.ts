import type { Metadata } from "next";
import { site } from "./site";

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const assetOrigin = vercelProductionHost
  ? `https://${vercelProductionHost}`
  : site.url;

const socialImage = {
  // Vercel supplies its stable project hostname at build time. Keeping this
  // absolute lets social crawlers load the image from both the .vercel.app
  // deployment and the custom-domain build without a public URL variable.
  url: new URL("/og-image.jpg", assetOrigin).toString(),
  width: 1200,
  height: 630,
  alt: "NASA Space Apps Kandy — November 14–15, 2026 in Kandy, Sri Lanka",
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  const pageTitle = path === "/" ? title : `${title} | ${site.name}`;

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      title: pageTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [socialImage.url],
    },
  };
}

export const defaultSocialImage = socialImage;
