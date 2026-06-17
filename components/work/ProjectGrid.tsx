import type { Project } from "@/types/project";
import ProjectCover from "./ProjectCover";

type ProjectGridProps = {
  projects: Project[];
  compact?: boolean;
};

export default function ProjectGrid({ projects, compact = false }: ProjectGridProps) {
  if (compact) {
    return (
      <section className="grid grid-cols-1 min-[541px]:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCover
            key={project.slug}
            project={project}
            compact
            priority={index < 2}
          />
        ))}
      </section>
    );
  }

  return (
    <section
      id="works"
      className="mx-auto max-w-[1400px] px-6 pt-12 pb-16 md:px-10 md:pt-16 md:pb-24"
    >
      <div className="flex flex-col divide-y divide-border lg:divide-y-0 lg:gap-20">
        {projects.map((project, index) => (
          <ProjectCover
            key={project.slug}
            project={project}
            priority={index < 2}
          />
        ))}
      </div>
    </section>
  );
}
