import type { Project, TextModule } from "@/types/project";
import MediaModuleRenderer from "./MediaModuleRenderer";

type ProjectDetailProps = {
  project: Project;
};

function getTextModules(modules: Project["modules"]): TextModule[] {
  return modules.filter((module): module is TextModule => module.type === "text");
}

function getMediaModules(modules: Project["modules"]) {
  return modules.filter((module) => module.type !== "text");
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const textModules = getTextModules(project.modules);
  const mediaModules = getMediaModules(project.modules);

  return (
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
          <MediaModuleRenderer modules={mediaModules} />
        </div>
      )}
    </div>
  );
}
