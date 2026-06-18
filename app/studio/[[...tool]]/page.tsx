"use client";

import dynamic from "next/dynamic";
import config from "@/sanity.config";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-svh items-center justify-center text-sm text-foreground-muted">
        Studio loading...
      </div>
    ),
  },
);

export default function StudioPage() {
  return <NextStudio config={config} />;
}
