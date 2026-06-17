import type { Metadata } from "next";
import BackToTop from "@/components/layout/BackToTop";

export const metadata: Metadata = {
  title: "Contact — 2percent",
  description: "Contact 2percent",
};

const offices = [
  {
    name: "Seoul Forest.(HQ)",
    lines: [
      "서울특별시 성동구 서울숲2길 32-14,",
      "101동 202호(갤러리아포레)",
    ],
    english: [
      "101-201, 32-14, Seoulsup 2-gil, Seongdong-gu,",
      "Seoul, Korea",
      "Zipcode 04769",
    ],
  },
] as const;

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M3.654 1.328a.678.678 0 0 1 .737-.064l2.79 1.395c.329.165.445.557.257.892l-1.028 1.856a.678.678 0 0 0 .165.768l1.385 1.385a.678.678 0 0 0 .768.165l1.856-1.028a.678.678 0 0 1 .892.257l1.395 2.79a.678.678 0 0 1-.064.737l-1.378 1.378a2.25 2.25 0 0 1-2.414.513 13.5 13.5 0 0 1-6.09-6.09 2.25 2.25 0 0 1 .513-2.414L3.654 1.328Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="1.5"
        y="3"
        width="13"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M1.5 4.5 8 9l6.5-4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <article>
      <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          What can we do for
          <br />
          your brand?
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted md:mt-8 md:text-lg">
          We are passionate about creating visually stunning and functional
          solutions that communicate effectively.
        </p>
      </div>

      <div className="contact-content mx-auto max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-24">
          <section>
            <h2 className="text-sm font-medium tracking-wide text-foreground uppercase">
              Contacts
            </h2>
            <div className="mt-8 space-y-5">
              <a
                href="tel:+8225087871"
                className="flex items-center gap-3 text-[15px] text-foreground transition-colors hover:text-accent"
              >
                <PhoneIcon />
                +82 2 508 7871 (REP)
              </a>
              <a
                href="mailto:info@samseoul.com"
                className="flex items-center gap-3 text-[15px] text-foreground transition-colors hover:text-accent"
              >
                <EmailIcon />
                info@samseoul.com
              </a>
            </div>
          </section>

          <section className="space-y-12">
            {offices.map((office) => (
              <div key={office.name}>
                <h3 className="text-base font-medium text-foreground">
                  {office.name}
                </h3>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground-muted">
                  <p>
                    {office.lines.map((line, index) => (
                      <span key={line}>
                        {line}
                        {index < office.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <p>
                    {office.english.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <BackToTop />
    </article>
  );
}
