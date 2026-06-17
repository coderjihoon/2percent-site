import { getRelatedProjects } from "@/lib/projects";
import ProjectGrid from "@/components/work/ProjectGrid";

type OtherProjectsProps = {
  slug: string;
};

export default function OtherProjects({ slug }: OtherProjectsProps) {
  const related = getRelatedProjects(slug, 2);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h3 className="mb-10 text-sm font-medium tracking-wide text-accent uppercase">
          You may also like
        </h3>
      </div>
      <div className="mx-auto max-w-[1400px]">
        <ProjectGrid projects={related} compact />
      </div>
    </section>
  );
}
