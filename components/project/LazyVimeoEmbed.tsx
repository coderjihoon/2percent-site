"use client";

import { useEffect, useRef, useState } from "react";
import type { VimeoEmbedModule } from "@/types/project";

type LazyVimeoEmbedProps = {
  module: VimeoEmbedModule;
  src: string;
};

export default function LazyVimeoEmbed({ module, src }: LazyVimeoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="works-vimeo-embed">
      {shouldLoad ? (
        <iframe
          src={src}
          title={`Vimeo video ${module.videoId}`}
          allow="autoplay; picture-in-picture"
          loading="lazy"
        />
      ) : null}
    </div>
  );
}
