import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTop from "@/components/layout/BackToTop";
import OtherProjects from "@/components/project/OtherProjects";
import ProjectDetail from "@/components/project/ProjectDetail";
import {
  getAllSlugs,
  getProjectBySlug,
} from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Not Found" };
  }

  return {
    title: `${project.title} — 2percent`,
    description: project.title,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <ProjectDetail project={project} />
      <OtherProjects slug={project.slug} />
      <BackToTop />
    </article>
  );
}
