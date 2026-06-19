import type { Portfolio } from "@/types/portfolio";
import ImageModuleBlock from "./ImageModuleBlock";
import StaticImageModule from "./StaticImageModule";
import VideoModuleBlock from "./VideoModuleBlock";

type ProjectDetailProps = {
  portfolio: Portfolio;
};

export default function ProjectDetail({ portfolio }: ProjectDetailProps) {
  const coverModule = {
    type: "image" as const,
    src: portfolio.coverImage.src,
    alt: portfolio.coverImage.alt ?? portfolio.title,
    variant: "hero" as const,
    lightbox: false,
  };

  const meta = [portfolio.client, String(portfolio.year)]
    .filter(Boolean)
    .join(" · ");

  const tags = portfolio.category ?? [];
  const heroVideo = portfolio.coverVideo;

  return (
    <>
      <div className="md:hidden">
        {heroVideo ? (
          <VideoModuleBlock src={heroVideo} />
        ) : (
          <StaticImageModule module={coverModule} priority />
        )}
      </div>
      <div className="post-content">
        <div className="content-wrap">
          <div className="post-title">
            <h2>{portfolio.title}</h2>
          </div>
          {meta ? (
            <div className="post-period">
              <div>{meta}</div>
            </div>
          ) : null}
          {tags.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex h-7 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-border bg-surface px-3 text-xs leading-none text-foreground-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          {portfolio.description ? (
            <div className="post-text whitespace-pre-wrap">
              {portfolio.description}
            </div>
          ) : null}
        </div>
        <div className="post-imgs-wrap">
          <div className="hidden md:contents">
            {heroVideo ? (
              <VideoModuleBlock src={heroVideo} />
            ) : (
              <StaticImageModule module={coverModule} priority />
            )}
            {portfolio.gallery.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="wp-block-image size-large has-lightbox"
              >
                <ImageModuleBlock
                  src={image.src}
                  alt={image.alt ?? portfolio.title}
                />
              </figure>
            ))}
          </div>
          <div className="contents md:hidden">
            {portfolio.gallery.map((image, index) => (
              <figure
                key={`${image.src}-mobile-${index}`}
                className="wp-block-image size-large has-lightbox"
              >
                <ImageModuleBlock
                  src={image.src}
                  alt={image.alt ?? portfolio.title}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
