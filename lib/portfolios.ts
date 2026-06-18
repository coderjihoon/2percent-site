import { sanityClient } from "@/lib/sanity/client";
import {
  mapSanityPortfolio,
  type SanityPortfolio,
} from "@/lib/sanity/mapPortfolio";
import {
  portfolioBySlugQuery,
  portfolioSlugsQuery,
  portfoliosQuery,
} from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/env";
import type { Portfolio } from "@/types/portfolio";

function sortPortfolios(portfolios: Portfolio[]): Portfolio[] {
  return [...portfolios].sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order;
    }

    return b.year - a.year;
  });
}

async function fetchPortfoliosFromSanity(): Promise<Portfolio[]> {
  const portfolios = await sanityClient.fetch<SanityPortfolio[]>(
    portfoliosQuery,
    {},
    { next: { tags: ["portfolios"] } },
  );

  return portfolios.map(mapSanityPortfolio);
}

export async function getAllPortfolios(): Promise<Portfolio[]> {
  if (!isSanityConfigured) {
    return [];
  }

  try {
    return sortPortfolios(await fetchPortfoliosFromSanity());
  } catch {
    return [];
  }
}

export async function getPortfolioBySlug(
  slug: string,
): Promise<Portfolio | undefined> {
  if (!isSanityConfigured) {
    return undefined;
  }

  try {
    const portfolio = await sanityClient.fetch<SanityPortfolio | null>(
      portfolioBySlugQuery,
      { slug },
      { next: { tags: ["portfolios"] } },
    );

    if (!portfolio) {
      return undefined;
    }

    return mapSanityPortfolio(portfolio);
  } catch {
    return undefined;
  }
}

export async function getRelatedPortfolios(
  slug: string,
  limit = 4,
): Promise<Portfolio[]> {
  const portfolio = await getPortfolioBySlug(slug);
  if (!portfolio) return [];

  const allPortfolios = await getAllPortfolios();
  const categories = new Set(portfolio.category ?? []);

  const related = allPortfolios.filter((item) => {
    if (item.slug === slug) return false;
    if (categories.size === 0) return false;
    return item.category?.some((category) => categories.has(category));
  });

  if (related.length >= limit) {
    return related.slice(0, limit);
  }

  const fallback = allPortfolios
    .filter((item) => item.slug !== slug && !related.includes(item))
    .slice(0, limit - related.length);

  return [...related, ...fallback];
}

export async function getAllSlugs(): Promise<string[]> {
  if (!isSanityConfigured) {
    return [];
  }

  try {
    const slugs = await sanityClient.fetch<{ slug: string }[]>(
      portfolioSlugsQuery,
      {},
      { next: { tags: ["portfolios"] } },
    );

    return slugs
      .map((item) => item.slug)
      .filter((item): item is string => Boolean(item));
  } catch {
    return [];
  }
}
