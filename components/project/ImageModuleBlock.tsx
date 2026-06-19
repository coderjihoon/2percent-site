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
        <Image
          src={src}
          alt={alt ?? ""}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-auto w-full"
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
        />
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
