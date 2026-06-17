import BackToTop from "@/components/layout/BackToTop";
import ProjectGrid from "@/components/work/ProjectGrid";
import WorkHero from "@/components/work/WorkHero";
import { getAllProjects } from "@/lib/projects";
import { workPageContent } from "@/lib/work";

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <>
      <WorkHero
        title={workPageContent.title}
        subtitle={workPageContent.subtitle}
        backgroundImages={workPageContent.backgroundImages}
      />
      <ProjectGrid projects={projects} />
      <BackToTop />
    </>
  );
}
