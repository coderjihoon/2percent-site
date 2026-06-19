type VideoModuleBlockProps = {
  src: string;
  poster?: string;
};

export default function VideoModuleBlock({ src, poster }: VideoModuleBlockProps) {
  return (
    <div className="works-video-embed">
      <video
        controls
        playsInline
        preload="metadata"
        poster={poster}
        src={src}
      />
    </div>
  );
}
