"use client";

import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

type ImageModuleBlockProps = {
  src: string;
  alt?: string;
};

export default function ImageModuleBlock({ src, alt }: ImageModuleBlockProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="relative block w-full cursor-zoom-in"
        onClick={() => setOpen(true)}
        aria-label="Open image in lightbox"
      >
        <div className="relative aspect-video w-full bg-surface">
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </button>
      <ImageLightbox
        src={src}
        alt={alt ?? ""}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
