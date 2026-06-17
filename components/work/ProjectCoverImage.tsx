"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type ProjectCoverImageProps = {
  href: string;
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  ariaLabel: string;
  className?: string;
};

export default function ProjectCoverImage({
  href,
  src,
  alt,
  sizes,
  priority = false,
  ariaLabel,
  className = "",
}: ProjectCoverImageProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = linkRef.current?.getBoundingClientRect();
    if (!rect) return;

    setCursor({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setCursor(null);
  };

  return (
    <Link
      ref={linkRef}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative block overflow-hidden ${cursor ? "cursor-none" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        sizes={sizes}
        priority={priority}
      />
      {cursor ? (
        <span
          className="pointer-events-none absolute z-10 whitespace-nowrap rounded-full border border-white/25 bg-white/15 px-5 py-2.5 text-sm font-medium text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-md"
          style={{
            left: cursor.x,
            top: cursor.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          더 알아보기
        </span>
      ) : null}
    </Link>
  );
}
