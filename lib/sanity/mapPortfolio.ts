import type { Portfolio, PortfolioImage } from "@/types/portfolio";
import { getImageUrl } from "./image";

type SanityImage = Parameters<typeof getImageUrl>[0];

export type SanityPortfolio = {
  slug: string;
  title: string;
  client?: string;
  category?: string[];
  summary?: string;
  description?: string;
  year: number;
  isFeatured?: boolean;
  isPublished?: boolean;
  order?: number;
  thumbnail?: SanityImage;
  coverImage?: SanityImage;
  gallery?: SanityImage[];
};

function mapImage(
  image: SanityImage | undefined,
  fallbackAlt: string,
): PortfolioImage | undefined {
  const src = getImageUrl(image);
  if (!src) return undefined;

  return { src, alt: fallbackAlt };
}

export function mapSanityPortfolio(portfolio: SanityPortfolio): Portfolio {
  const thumbnail = mapImage(portfolio.thumbnail, portfolio.title);
  const coverImage = mapImage(portfolio.coverImage, portfolio.title);

  if (!thumbnail || !coverImage) {
    throw new Error(`Portfolio "${portfolio.slug}" is missing required images.`);
  }

  const gallery = (portfolio.gallery ?? [])
    .map((image, index) =>
      mapImage(image, `${portfolio.title} gallery ${index + 1}`),
    )
    .filter((image): image is PortfolioImage => image !== undefined);

  return {
    slug: portfolio.slug,
    title: portfolio.title,
    client: portfolio.client,
    category: portfolio.category?.filter(Boolean),
    thumbnail,
    coverImage,
    gallery,
    summary: portfolio.summary,
    description: portfolio.description,
    year: portfolio.year,
    isFeatured: portfolio.isFeatured ?? false,
    isPublished: portfolio.isPublished ?? true,
    order: portfolio.order ?? 0,
  };
}
