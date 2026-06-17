import type { ImageModule, Project, TextModule } from "@/types/project";
import MediaModuleRenderer from "./MediaModuleRenderer";
import StaticImageModule from "./StaticImageModule";

type ProjectDetailProps = {
  project: Project;
};

function getTextModules(modules: Project["modules"]): TextModule[] {
  return modules.filter((module): module is TextModule => module.type === "text");
}

function getMediaModules(modules: Project["modules"]) {
  return modules.filter((module) => module.type !== "text");
}

function getHeroImage(
  mediaModules: ReturnType<typeof getMediaModules>,
): ImageModule | null {
  const heroVariant = mediaModules.find(
    (module): module is ImageModule =>
      module.type === "image" && module.variant === "hero",
  );
  if (heroVariant) {
    return heroVariant;
  }

  const firstImage = mediaModules.find(
    (module): module is ImageModule => module.type === "image",
  );
  return firstImage ?? null;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const textModules = getTextModules(project.modules);
  const mediaModules = getMediaModules(project.modules);
  const heroImage = getHeroImage(mediaModules);
  const mobileMediaModules = heroImage
    ? mediaModules.filter((module) => module !== heroImage)
    : mediaModules;

  return (
    <>
      {heroImage ? (
        <div className="md:hidden">
          <StaticImageModule module={heroImage} priority />
        </div>
      ) : null}
      <div className="post-content">
        <div className="content-wrap">
          <div className="post-title">
            <h2>{project.title}</h2>
          </div>
          <div className="post-period">
            <div>{project.period ?? project.year}</div>
          </div>
          {textModules.length > 0 && (
            <div className="post-text">
              {textModules.map((module, index) => (
                <div
                  key={`text-${index}`}
                  dangerouslySetInnerHTML={{ __html: module.html }}
                />
              ))}
            </div>
          )}
          {project.links && project.links.length > 0 && (
            <div className="project-list-cont">
              <div className="project-link-wrap">
                {project.links.map((link) => (
                  <div key={link.href} className="project-link">
                    <strong>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {mediaModules.length > 0 && (
          <div className="post-imgs-wrap">
            <div className="hidden md:contents">
              <MediaModuleRenderer modules={mediaModules} />
            </div>
            <div className="contents md:hidden">
              <MediaModuleRenderer modules={mobileMediaModules} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
