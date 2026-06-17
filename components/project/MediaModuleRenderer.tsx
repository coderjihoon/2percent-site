import type { ProjectModule } from "@/types/project";
import BackgroundVideoModule from "./BackgroundVideoModule";
import ImageModuleBlock from "./ImageModuleBlock";
import LazyVimeoEmbed from "./LazyVimeoEmbed";
import StaticImageModule from "./StaticImageModule";

type MediaModuleRendererProps = {
  modules: ProjectModule[];
};

function buildVimeoSrc(module: Extract<ProjectModule, { type: "embed"; provider: "vimeo" }>) {
  const params = new URLSearchParams({
    autopause: "0",
    title: "0",
    byline: "0",
    portrait: "0",
  });

  if (module.hash) {
    params.set("h", module.hash);
  }

  if (module.autoplay) {
    params.set("autoplay", "1");
  }

  if (module.muted !== false) {
    params.set("muted", "1");
  }

  if (module.controls === false) {
    params.set("controls", "0");
  }

  if (module.loop) {
    params.set("loop", "1");
  }

  return `https://player.vimeo.com/video/${module.videoId}?${params.toString()}`;
}

function buildYoutubeSrc(module: Extract<ProjectModule, { type: "embed"; provider: "youtube" }>) {
  const params = new URLSearchParams();

  if (module.playlistId) {
    params.set("list", module.playlistId);
  }

  const query = params.toString();
  return `https://www.youtube.com/embed/${module.videoId}${query ? `?${query}` : ""}`;
}

export default function MediaModuleRenderer({ modules }: MediaModuleRendererProps) {
  const firstImageIndex = modules.findIndex((module) => module.type === "image");

  return (
    <>
      {modules.map((module, index) => {
        if (module.type === "image") {
          const isPrimaryImage = index === firstImageIndex;
          const useLightbox = module.lightbox !== false;

          if (!useLightbox) {
            return (
              <StaticImageModule
                key={`${module.src}-${index}`}
                module={module}
                priority={isPrimaryImage || module.variant === "hero"}
              />
            );
          }

          return (
            <figure
              key={`${module.src}-${index}`}
              className="wp-block-image size-large has-lightbox"
            >
              <ImageModuleBlock src={module.src} alt={module.alt} />
            </figure>
          );
        }

        if (module.type === "video") {
          return (
            <BackgroundVideoModule
              key={`video-${module.src}-${index}`}
              module={module}
            />
          );
        }

        if (module.type === "embed" && module.provider === "vimeo") {
          return (
            <LazyVimeoEmbed
              key={`vimeo-${module.videoId}-${index}`}
              module={module}
              src={buildVimeoSrc(module)}
            />
          );
        }

        if (module.type === "embed" && module.provider === "youtube") {
          return (
            <figure
              key={`youtube-${module.videoId}-${index}`}
              className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"
            >
              <div className="wp-block-embed__wrapper">
                <iframe
                  loading="lazy"
                  title={module.title ?? `YouTube video ${module.videoId}`}
                  src={buildYoutubeSrc(module)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </figure>
          );
        }

        return null;
      })}
    </>
  );
}
