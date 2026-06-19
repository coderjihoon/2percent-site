type VideoModuleBlockProps = {
  src: string;
};

export default function VideoModuleBlock({ src }: VideoModuleBlockProps) {
  return (
    <div className="works-video-embed">
      <video controls playsInline preload="metadata" src={src} />
    </div>
  );
}
