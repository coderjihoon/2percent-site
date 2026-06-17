import Image from "next/image";
import type { ImageModule } from "@/types/project";

type StaticImageModuleProps = {
  module: ImageModule;
  priority?: boolean;
};

export default function StaticImageModule({
  module,
  priority = false,
}: StaticImageModuleProps) {
  return (
    <figure
      className={`wp-block-image size-large${
        module.variant === "hero" ? " works-detail-top-img" : ""
      }`}
    >
      <div className="relative aspect-video w-full bg-surface">
        <Image
          src={module.src}
          alt={module.alt ?? ""}
          fill
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </figure>
  );
}
