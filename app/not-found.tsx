import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-medium">Page not found</h1>
      <p className="mt-4 text-foreground-muted">
        The project you are looking for does not exist.
      </p>
      <Link
        href="/work"
        className="mt-8 text-sm text-accent underline underline-offset-4 transition-colors hover:text-accent-hover"
      >
        Back to Work
      </Link>
    </div>
  );
}
