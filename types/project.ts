export type ImageModule = {
  type: "image";
  src: string;
  alt?: string;
  variant?: "hero" | "default";
  lightbox?: boolean;
};

export type TextModule = {
  type: "text";
  html: string;
};

export type YoutubeEmbedModule = {
  type: "embed";
  provider: "youtube";
  videoId: string;
  playlistId?: string;
  title?: string;
};

export type VimeoEmbedModule = {
  type: "embed";
  provider: "vimeo";
  videoId: string;
  hash?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
};

export type EmbedModule = YoutubeEmbedModule | VimeoEmbedModule;

export type VideoModule = {
  type: "video";
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
};

export type ProjectModule = ImageModule | TextModule | EmbedModule | VideoModule;

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectStatistic = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  period?: string;
  excerpt?: string;
  statistic?: ProjectStatistic;
  cover: { src: string; alt?: string };
  modules: ProjectModule[];
  links?: ProjectLink[];
  relatedSlugs?: string[];
};
