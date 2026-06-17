export const siteMetadata = {
  title: "2percent | 브랜드 성장을 만드는 마케팅 에이전시",
  description:
    "전략, 브랜딩, 콘텐츠, 퍼포먼스 마케팅까지.\n브랜드의 다음 성장을 설계합니다.",
  siteName: "2percent",
  ogImage: {
    url: "/og image.png",
    width: 3600,
    height: 1890,
    alt: "2percent",
  },
} as const;

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}
