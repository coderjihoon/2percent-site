import BackToTop from "@/components/layout/BackToTop";
import ProjectGrid from "@/components/work/ProjectGrid";
import WorkHero from "@/components/work/WorkHero";
import { getAllPortfolios } from "@/lib/portfolios";
import { workPageContent } from "@/lib/work";

export const revalidate = 60;

export default async function WorkPage() {
  const portfolios = await getAllPortfolios();

  return (
    <>
      <WorkHero
        title={workPageContent.title}
        subtitle={workPageContent.subtitle}
        backgroundImages={workPageContent.backgroundImages}
      />
      <ProjectGrid portfolios={portfolios} />
      <BackToTop />
    </>
  );
}
