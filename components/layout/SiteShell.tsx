"use client";

import { usePathname } from "next/navigation";
import OnboardingSplash from "@/components/layout/OnboardingSplash";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) {
    return <div className="h-svh">{children}</div>;
  }

  return (
    <>
      <OnboardingSplash />
      <SiteHeader />
      <div className="flex min-h-[calc(100vh-4rem)] flex-col md:min-h-[calc(100vh-5rem)]">
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
