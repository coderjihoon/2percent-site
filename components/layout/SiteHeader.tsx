"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Works", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

function NavLinks({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();

  const isWorkRoute =
    pathname === "/work" ||
    (pathname !== "/" && pathname !== "/contact");

  return (
    <nav className={className}>
      {navItems.map((item) => {
        const isActive =
          item.href === "/work" ? isWorkRoute : pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className={`transition-colors hover:text-accent ${
              isActive
                ? "text-accent underline decoration-accent underline-offset-4"
                : "text-foreground opacity-80"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="relative mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          <div className="hidden w-[120px] md:block" aria-hidden="true" />

          <Link
            href="/work"
            className="absolute left-1/2 -translate-x-1/2 transition-opacity hover:opacity-80"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="이퍼센트"
              width={1024}
              height={258}
              className="h-6 w-auto md:h-8"
              priority
            />
          </Link>

          <div className="ml-auto flex items-center">
            <NavLinks className="hidden items-center gap-8 text-sm md:flex" />

            <button
              type="button"
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className={`block h-px w-5 bg-foreground transition-transform duration-300 ${
                  menuOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-foreground transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-px w-5 bg-foreground transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="overflow-hidden">
            <div
              className={`border-t border-border px-6 pb-8 pt-6 transition-opacity duration-300 ${
                menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <NavLinks
                className="flex flex-col gap-8 text-lg"
                onNavigate={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
}
