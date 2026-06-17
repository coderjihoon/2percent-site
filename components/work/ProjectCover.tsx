import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectStatistic } from "@/types/project";
import ProjectCoverImage from "./ProjectCoverImage";

type ProjectCoverProps = {
  project: Project;
  sizes?: string;
  compact?: boolean;
  priority?: boolean;
};

function Statistic({ value, label }: ProjectStatistic) {
  return (
    <div>
      <div className="flex items-center">
        <span className="mr-1 inline-flex h-[15px] w-[22.5px] flex-shrink-0 items-center justify-center rounded-[40px] bg-foreground text-background sm:h-[18px] sm:w-[27px] xl:h-[22px] xl:w-[33px]">
          <svg
            className="h-[10px] w-[10px] sm:h-3 sm:w-3 xl:h-3.5 xl:w-3.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 8"
            aria-hidden="true"
          >
            <polygon points="6.47461 3.43164 7.18164 2.72461 4.45703 0 3.54291 0 .81787 2.72461 1.5249 3.43164 3.5 1.45691 3.5 8 4.5 8 4.5 1.45703 6.47461 3.43164" />
          </svg>
        </span>
        <span className="text-lg font-medium tracking-tight">{value}</span>
      </div>
      <span className="mt-3 block text-sm text-foreground-muted sm:mt-[13px] lg:mt-[11px] xl:mt-[15px]">
        {label}
      </span>
    </div>
  );
}

function CompactProjectCover({
  project,
  sizes,
  priority,
}: Omit<ProjectCoverProps, "compact">) {
  return (
    <article className="group relative flex items-stretch overflow-hidden border-b border-border bg-surface">
      <Link
        href={`/${project.slug}`}
        aria-label={`${project.title}, ${project.year}`}
        className="absolute inset-0 z-10"
      />
      <div className="flex w-1/3 min-w-0 flex-col justify-center px-4 py-5 sm:px-6 md:py-6">
        <div className="text-sm font-medium transition-colors group-hover:text-accent md:text-base">
          {project.title}
        </div>
        <div className="mt-1 text-xs text-accent md:text-sm">{project.year}</div>
      </div>
      <div className="relative aspect-[4/3] w-2/3 flex-shrink-0 md:aspect-[16/10]">
        <Image
          src={project.cover.src}
          alt={project.cover.alt ?? project.title}
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
  project,
  sizes = "(max-width: 767px) 100vw, 66vw",
  compact = false,
  priority = false,
}: ProjectCoverProps) {
  if (compact) {
    return (
      <CompactProjectCover
        project={project}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <article className="py-12 first:pt-0 lg:border-t lg:border-border lg:py-0 lg:pt-4">
      <div className="grid grid-cols-12 gap-y-10 lg:gap-y-0">
        <div className="order-2 col-span-12 flex flex-col lg:order-1 lg:col-span-3">
          <Link
            href={`/${project.slug}`}
            className="group flex w-full flex-col lg:h-full"
          >
            <div className="mb-8 flex w-full items-start sm:mb-[39px] md:mb-10 lg:mb-0">
              <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-[1.75rem]">
                {project.title}
              </h3>
            </div>

            <div className="w-full max-w-[66ch] lg:mt-auto">
              {project.excerpt ? (
                <p className="text-lg font-medium leading-snug tracking-tight">
                  {project.excerpt}
                </p>
              ) : null}

              {project.statistic ? (
                <div className="pt-8 sm:pt-10 lg:pt-[41px] xl:pt-16">
                  <Statistic {...project.statistic} />
                </div>
              ) : null}
            </div>
          </Link>
        </div>

        <ProjectCoverImage
          href={`/${project.slug}`}
          src={project.cover.src}
          alt={project.cover.alt ?? project.title}
          sizes={sizes}
          priority={priority}
          ariaLabel={`View ${project.title}`}
          className="order-1 col-span-12 mb-4 aspect-[358/447] sm:mb-[21px] md:mb-[22px] md:aspect-[913/514] lg:order-2 lg:col-span-8 lg:col-start-5 lg:mb-0"
        />
      </div>
    </article>
  );
}
