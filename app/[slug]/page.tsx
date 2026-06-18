import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTop from "@/components/layout/BackToTop";
import OtherProjects from "@/components/project/OtherProjects";
import ProjectDetail from "@/components/project/ProjectDetail";
import { getAllSlugs, getPortfolioBySlug } from "@/lib/portfolios";

type PortfolioPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);

  if (!portfolio) {
    return { title: "Not Found" };
  }

  return {
    title: `${portfolio.title} — 2percent`,
    description: portfolio.description ?? portfolio.title,
  };
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <article>
      <ProjectDetail portfolio={portfolio} />
      <OtherProjects slug={portfolio.slug} />
      <BackToTop />
    </article>
  );
}
