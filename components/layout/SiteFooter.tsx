import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="footer-bottom mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
          <ul className="footer__util space-y-2 text-xs leading-relaxed text-foreground-muted">
            <li className="text-foreground">
              <Image
                src="/logo.png"
                alt="이퍼센트"
                width={1024}
                height={258}
                className="mb-2 h-8 w-auto"
              />
              이퍼센트 마케팅
            </li>
            <li>(주)브랜드랩</li>
            <li>대표 : 김철수</li>
            <li>사업자등록번호 : 123-45-67890</li>
            <li>서울특별시 강남구 테헤란로 123</li>
            <li>
              <a
                href="mailto:hello@brandlab.co.kr"
                className="text-foreground-muted transition-colors hover:text-accent"
              >
                hello@brandlab.co.kr
              </a>
            </li>
            <li className="copyright pt-2 text-foreground-subtle">
              Copyright © 2percent, All rights reserved.
            </li>
          </ul>

          <nav className="footer__util--right lg:text-right">
            <p className="information text-sm text-foreground">
              <span className="information__title mr-3 text-xs text-foreground-muted">
                대표전화
              </span>
              <a
                href="tel:+8225087871"
                className="transition-colors hover:text-accent"
              >
                +82 2 508 7871
              </a>
            </p>
            <ul className="information__desc mt-2 space-y-1 text-xs text-foreground-muted">
              <li>평일 10:00~17:00</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
