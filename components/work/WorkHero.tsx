"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type WorkHeroProps = {
  title: string;
  subtitle: string;
  backgroundImages: string[];
};

function ScrollCueIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="hero-scroll-cue-icon h-4 w-4"
      fill="none"
      aria-hidden="true"
    >
      <path d="M8 11L3 6h10L8 11z" fill="currentColor" />
    </svg>
  );
}

export default function WorkHero({
  title,
  subtitle,
  backgroundImages,
}: WorkHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages.length <= 1) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % backgroundImages.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {backgroundImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            className={`hero-ken-burns hero-slide-image object-cover object-center ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
            priority={index === 0}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 from-10% via-black/50 to-black/30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col justify-end px-6 pb-28 md:px-10 md:pb-36 lg:pb-40">
        <h1 className="hero-fade-up mb-6 block w-full text-balance text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
          {title}
        </h1>

        <div className="hero-fade-up hero-fade-up-delay-1 max-w-[66ch] text-lg leading-relaxed text-foreground/80 md:text-xl md:leading-relaxed">
          <p>{subtitle}</p>
        </div>
      </div>

      <a
        href="#works"
        className="hero-scroll-cue absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest text-foreground/60 uppercase transition-colors hover:text-accent"
      >
        Works
        <ScrollCueIcon />
      </a>
    </section>
  );
}
