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
            <li>(주)비에스브랜더</li>
            <li>대표 : 김지환</li>
            <li>사업자등록번호 : 402-87-03145</li>
            <li>서울특별시 영등포구 영신로 166</li>
            <li>
              <a
                href="mailto:bsbrander@gmail.com"
                className="text-foreground-muted transition-colors hover:text-accent"
              >
                bsbrander@gmail.com
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
                href="tel:010-4418-5438"
                className="transition-colors hover:text-accent"
              >
                010-4418-5438
              </a>
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
