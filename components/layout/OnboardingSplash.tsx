"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DURATION_MS = 2200;

function progressColor(progress: number): string {
  const t = progress / 100;
  const r = Math.round(255 + (239 - 255) * t);
  const g = Math.round(255 + (68 - 255) * t);
  const b = Math.round(255 + (68 - 255) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function OnboardingSplash() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      setProgress(next);

      if (next < 100) {
        frameId = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => {
          setFadeOut(true);
          window.setTimeout(() => {
            setVisible(false);
            document.body.style.overflow = "";
          }, 500);
        }, 250);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={fadeOut}
    >
      <Image
        src="/logo.png"
        alt="이퍼센트"
        width={1024}
        height={258}
        className="mb-10 h-7 w-auto md:h-9"
        priority
      />

      <div className="w-44 md:w-56">
        <div className="h-px w-full bg-border">
          <div
            className="h-full transition-[width] duration-75 ease-linear"
            style={{
              width: `${progress}%`,
              backgroundColor: progressColor(progress),
            }}
          />
        </div>
        <p className="mt-3 text-center text-xs tabular-nums tracking-wider text-foreground-muted">
          {progress}%
        </p>
      </div>
    </div>
  );
}
