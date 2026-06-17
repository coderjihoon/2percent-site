"use client";

import { useEffect } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
};

export default function ImageLightbox({
  src,
  alt,
  open,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-[101] text-sm uppercase tracking-wide text-foreground-muted transition-colors hover:text-accent md:top-8 md:right-8"
        aria-label="Close lightbox"
      >
        Close
      </button>
      <div
        className="relative max-h-[90vh] w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="mx-auto h-auto max-h-[90vh] w-full object-contain"
        />
      </div>
    </div>
  );
}
