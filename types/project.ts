export type ImageModule = {
  type: "image";
  src: string;
  alt?: string;
  variant?: "hero" | "default";
  lightbox?: boolean;
};
