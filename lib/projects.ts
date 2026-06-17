import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    slug: "sif-2025",
    title: "SIF 2025",
    year: "2026",
    period: "Jan – Mar, 2026",
    excerpt:
      "Seoul Illustration Fair's evolving brand identity — preserving the canvas concept while creating a distinctly new experience.",
    statistic: {
      value: "70%",
      label: "Increase in social engagement across campaign channels",
    },
    cover: {
      src: "/sif-2025-cover.png",
      alt: "SIF 2025 cover",
    },
    modules: [
      {
        type: "image",
        src: "https://picsum.photos/seed/sif-hero/1920/1080",
        alt: "SIF 2025 hero",
        variant: "hero",
        lightbox: false,
      },
      {
        type: "text",
        html: `<div class="rank-math-block">
<div class="rank-math-list">
<div class="rank-math-list-item">
<h3 class="rank-math-question">Q. <span>What was the challenge?</span></h3>
<div class="rank-math-answer">
<p>Since the BI renewal in 2021, Seoul Illustration Fair has continued to expand its brand identity every two years. The goal was to preserve the established concept of "the act of drawing and the canvas" while creating a distinctly new experience.</p>
</div>
</div>
</div>
</div>
<div class="rank-math-block">
<div class="rank-math-list">
<div class="rank-math-list-item">
<h3 class="rank-math-question">Q. <span>What was the solution?</span></h3>
<div class="rank-math-answer">
<p>CFC designed the categories of Drawing, Story, Graphic, Motion, and Metaverse to interact within a single dimensional canvas system, visualizing the fresh and dynamic atmosphere unique to Seoul Illustration Fair.</p>
</div>
</div>
</div>
</div>`,
      },
      {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        autoplay: true,
        loop: true,
        muted: true,
        controls: false,
      },
      {
        type: "image",
        src: "https://picsum.photos/seed/sif-detail/1920/1080",
        alt: "SIF 2025 detail",
      },
    ],
    links: [
      {
        label: "Seoul Illustration Fair",
        href: "https://example.com",
      },
    ],
    relatedSlugs: ["hecto", "simpac", "circle"],
  },
  {
    slug: "hecto",
    title: "HECTO",
    year: "2026",
    excerpt:
      "A visual identity system for HECTO that balances technical precision with approachable brand warmth.",
    cover: {
      src: "https://picsum.photos/seed/hecto/1920/1080",
      alt: "HECTO cover",
    },
    modules: [
      {
        type: "image",
        src: "https://picsum.photos/seed/hecto-hero/1920/1080",
        alt: "HECTO hero",
      },
      {
        type: "text",
        html: `<div class="space-y-6">
          <p class="font-medium tracking-wide uppercase text-sm">The Challenge</p>
          <p>A new visual identity system for HECTO that balances technical precision with approachable brand warmth across digital and physical touchpoints.</p>
          <p class="font-medium tracking-wide uppercase text-sm">The Solution</p>
          <p>A modular grid-based identity built around geometric forms and a restrained palette, enabling consistent application across product, marketing, and environment design.</p>
        </div>`,
      },
    ],
    relatedSlugs: ["sif-2025", "simpac", "olive-young-n-seongsu"],
  },
  {
    slug: "simpac",
    title: "SIMPAC",
    year: "2026",
    excerpt:
      "Repositioning an industrial brand for a global audience without losing its heritage of engineering excellence.",
    statistic: {
      value: "3×",
      label: "Brand recognition uplift in target markets",
    },
    cover: {
      src: "https://picsum.photos/seed/simpac/1920/1080",
      alt: "SIMPAC cover",
    },
    modules: [
      {
        type: "image",
        src: "https://picsum.photos/seed/simpac-hero/1920/1080",
        alt: "SIMPAC hero",
      },
      {
        type: "text",
        html: `<div class="space-y-6">
          <p class="font-medium tracking-wide uppercase text-sm">The Challenge</p>
          <p>Repositioning an industrial brand for a global audience without losing its heritage of engineering excellence.</p>
          <p class="font-medium tracking-wide uppercase text-sm">The Solution</p>
          <p>A refined wordmark and visual system emphasizing structural clarity, applied across corporate communications and digital platforms.</p>
        </div>`,
      },
    ],
    relatedSlugs: ["hecto", "sif-2025", "heirei"],
  },
  {
    slug: "olive-young-n-seongsu",
    title: "OLIVE YOUNG N SEONGSU",
    year: "2025",
    excerpt:
      "A flagship retail experience reflecting the energy of Seongsu-dong while staying true to the Olive Young brand.",
    cover: {
      src: "https://picsum.photos/seed/olive-young/1920/1080",
      alt: "OLIVE YOUNG N SEONGSU cover",
    },
    modules: [
      {
        type: "image",
        src: "https://picsum.photos/seed/olive-young-hero/1920/1080",
        alt: "OLIVE YOUNG N SEONGSU hero",
      },
      {
        type: "text",
        html: `<div class="space-y-6">
          <p class="font-medium tracking-wide uppercase text-sm">The Challenge</p>
          <p>Creating a flagship retail experience that reflects the energy of Seongsu-dong while staying true to the Olive Young brand.</p>
          <p class="font-medium tracking-wide uppercase text-sm">The Solution</p>
          <p>Environmental graphics and wayfinding designed as a cohesive spatial narrative, guiding visitors through curated zones of discovery.</p>
        </div>`,
      },
    ],
    relatedSlugs: ["circle", "hecto", "simpac"],
  },
  {
    slug: "circle",
    title: "CIRCLE",
    year: "2025",
    excerpt:
      "A brand identity for a new fintech product that communicates trust and innovation simultaneously.",
    cover: {
      src: "https://picsum.photos/seed/circle/1920/1080",
      alt: "CIRCLE cover",
    },
    modules: [
      {
        type: "image",
        src: "https://picsum.photos/seed/circle-hero/1920/1080",
        alt: "CIRCLE hero",
      },
      {
        type: "text",
        html: `<div class="space-y-6">
          <p class="font-medium tracking-wide uppercase text-sm">The Challenge</p>
          <p>Developing a brand identity for a new fintech product that communicates trust and innovation simultaneously.</p>
          <p class="font-medium tracking-wide uppercase text-sm">The Solution</p>
          <p>A circular motif system representing connection and flow, applied across app UI, marketing, and motion assets.</p>
        </div>`,
      },
    ],
    relatedSlugs: ["olive-young-n-seongsu", "heirei", "sif-2025"],
  },
  {
    slug: "heirei",
    title: "Heirei",
    year: "2024",
    excerpt:
      "Premium packaging and identity for a boutique spirits brand entering the Korean market.",
    cover: {
      src: "https://picsum.photos/seed/heirei/1920/1080",
      alt: "Heirei cover",
    },
    modules: [
      {
        type: "image",
        src: "https://picsum.photos/seed/heirei-hero/1920/1080",
        alt: "Heirei hero",
      },
      {
        type: "text",
        html: `<div class="space-y-6">
          <p class="font-medium tracking-wide uppercase text-sm">The Challenge</p>
          <p>Crafting a premium packaging and identity system for a boutique spirits brand entering the Korean market.</p>
          <p class="font-medium tracking-wide uppercase text-sm">The Solution</p>
          <p>Typography-led label design with subtle tactile finishes, paired with a minimal digital presence that lets the product speak for itself.</p>
        </div>`,
      },
    ],
    relatedSlugs: ["circle", "simpac", "hecto"],
  },
];

export function getAllProjects(): Project[] {
  return [...projects].sort(
    (a, b) => Number.parseInt(b.year, 10) - Number.parseInt(a.year, 10),
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(
  slug: string,
  limit = 4,
): Project[] {
  const project = getProjectBySlug(slug);
  if (!project) return [];

  const relatedSlugs = project.relatedSlugs ?? [];
  const related = relatedSlugs
    .map((relatedSlug) => getProjectBySlug(relatedSlug))
    .filter((item): item is Project => item !== undefined);

  if (related.length >= limit) {
    return related.slice(0, limit);
  }

  const fallback = getAllProjects()
    .filter((item) => item.slug !== slug && !relatedSlugs.includes(item.slug))
    .slice(0, limit - related.length);

  return [...related, ...fallback];
}

export function getAllSlugs(): string[] {
  return projects.map((project) => project.slug);
}
