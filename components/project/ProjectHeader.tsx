type ProjectHeaderProps = {
  title: string;
};

export default function ProjectHeader({ title }: ProjectHeaderProps) {
  return (
    <header className="mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
      <h1 className="text-2xl font-medium tracking-tight md:text-3xl">{title}</h1>
    </header>
  );
}
