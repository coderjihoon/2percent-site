import Image from "next/image";
import Link from "next/link";
import type { Portfolio } from "@/types/portfolio";
import ProjectCoverImage from "./ProjectCoverImage";

type ProjectCoverProps = {
  portfolio: Portfolio;
  sizes?: string;
  compact?: boolean;
  priority?: boolean;
};

function PortfolioMeta({
  client,
  year,
  className = "text-sm text-foreground-muted",
}: {
  client?: string;
  year: number;
  className?: string;
}) {
  if (!client && !year) return null;

  return (
    <p className={className}>
      {client}
      {client && year ? (
        <span className="px-1.5" aria-hidden="true">
          ·
        </span>
      ) : null}
      {year}
    </p>
  );
}

function CompactProjectCover({
  portfolio,
  sizes,
  priority,
}: Omit<ProjectCoverProps, "compact">) {
  return (
    <article className="group relative flex items-stretch overflow-hidden border-b border-border bg-surface">
      <Link
        href={`/${portfolio.slug}`}
        aria-label={`${portfolio.title}, ${portfolio.year}`}
        className="absolute inset-0 z-10"
      />
      <div className="flex w-1/3 min-w-0 flex-col justify-center px-4 py-5 sm:px-6 md:py-6">
        <div className="text-sm font-medium transition-colors group-hover:text-accent md:text-base">
          {portfolio.title}
        </div>
        <PortfolioMeta
          client={portfolio.client}
          year={portfolio.year}
          className="mt-1 text-xs text-accent md:text-sm"
        />
      </div>
      <div className="relative aspect-[4/3] w-2/3 flex-shrink-0 md:aspect-[16/10]">
        <Image
          src={portfolio.thumbnail.src}
          alt={portfolio.thumbnail.alt ?? portfolio.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={sizes ?? "(max-width: 768px) 66vw, 33vw"}
          priority={priority}
        />
      </div>
    </article>
  );
}

export default function ProjectCover({
  portfolio,
  sizes = "(max-width: 767px) 100vw, 66vw",
  compact = false,
  priority = false,
}: ProjectCoverProps) {
  if (compact) {
    return (
      <CompactProjectCover
        portfolio={portfolio}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <article className="py-12 first:pt-0 lg:border-t lg:border-border lg:py-0">
      <div className="grid grid-cols-12 gap-y-10 pt-4 lg:gap-y-0">
        <div className="order-2 col-span-12 flex flex-col lg:order-1 lg:col-span-3">
          <Link
            href={`/${portfolio.slug}`}
            className="group flex w-full flex-col lg:h-full"
          >
            <div className="mb-8 flex w-full items-start sm:mb-[39px] md:mb-10 lg:mb-0">
              <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-[1.75rem]">
                {portfolio.title}
              </h3>
            </div>

            <div className="w-full max-w-[66ch] lg:mt-auto">
              <PortfolioMeta
                client={portfolio.client}
                year={portfolio.year}
              />

              {portfolio.summary ? (
                <div className="pt-4">
                  <p className="text-sm font-medium leading-snug tracking-tight whitespace-pre-wrap">
                    {portfolio.summary}
                  </p>
                </div>
              ) : null}
            </div>
          </Link>
        </div>

        <ProjectCoverImage
          href={`/${portfolio.slug}`}
          src={portfolio.thumbnail.src}
          alt={portfolio.thumbnail.alt ?? portfolio.title}
          sizes={sizes}
          priority={priority}
          ariaLabel={`View ${portfolio.title}`}
          className="order-1 col-span-12 mb-4 aspect-[358/447] sm:mb-[21px] md:mb-[22px] md:aspect-[913/514] lg:order-2 lg:col-span-8 lg:col-start-5 lg:mb-0"
        />
      </div>
    </article>
  );
}
