import type { VideoModule } from "@/types/project";

type BackgroundVideoModuleProps = {
  module: VideoModule;
};

export default function BackgroundVideoModule({
  module,
}: BackgroundVideoModuleProps) {
  return (
    <div className="works-video-embed">
      <video
        src={module.src}
        poster={module.poster}
        autoPlay={module.autoplay ?? true}
        loop={module.loop ?? true}
        muted={module.muted ?? true}
        controls={module.controls ?? false}
        playsInline
        preload="metadata"
        aria-label="Project video"
      />
    </div>
  );
}
