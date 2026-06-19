# Portfolio CMS 작업 요약

2percent 사이트 포트폴리오를 Sanity CMS로 관리하도록 전환한 작업 기록입니다.

---

## 1. CMS 도입 (Sanity)

- 포트폴리오를 코드 하드코딩 대신 **Sanity Studio** (`/studio`)에서 관리
- Sanity Project ID: `kssc2mie`
- 환경 변수: `.env.local`에 `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` 설정됨
- Studio는 사이트 헤더/푸터/스플래시와 분리 (`components/layout/SiteShell.tsx`)

### Studio 접속

- 로컬: `http://localhost:3000/studio`
- Portfolio 메뉴에서 등록·수정 후 **Publish**

---

## 2. 스키마: `project` → `portfolio`

기존 `project` + 모듈 블록(이미지/텍스트/영상) 구조를 제거하고, 마케팅 에이전시용 `portfolio` 문서 타입으로 교체했습니다.

### 현재 Portfolio 필드

| 필드 | Studio 표시명 | 용도 |
|------|---------------|------|
| `title` | 프로젝트명 | 제목 |
| `slug` | URL 슬러그 | 상세 페이지 URL (`/{slug}`) |
| `client` | 클라이언트명 | 클라이언트 |
| `category` | 카테고리 | 다중 선택 |
| `thumbnail` | 리스트용 썸네일 | `/work` 목록 이미지 |
| `coverImage` | 상세페이지 대표 이미지 | 상세 히어로 이미지 (영상 없을 때) |
| `coverVideo` | 상세페이지 대표 영상 | 상세 맨 위 영상 (선택, MP4) |
| `gallery` | 상세 이미지 | 상세 갤러리 (라이트박스) |
| `summary` | 메인페이지 설명 | `/work` 목록에만 표시 |
| `description` | 상세 설명 | 상세 페이지 본문 |
| `year` | 작업 연도 | 연도 (숫자) |
| `isFeatured` | 메인 노출 여부 | 기본값 `false` |
| `isPublished` | 공개 여부 | 기본값 `true` |
| `order` | 정렬 순서 | 기본값 `0` |

### 카테고리 옵션

- Branding
- Website
- Landing Page
- Detail Page
- Performance Marketing
- Content
- SNS
- Etc

### 삭제된 필드/구조

- `services` (작업 범위)
- `mainPageDescription` / `result` (성과 또는 결과)
- 예전 `project` 문서 및 모듈 블록 (`imageBlock`, `textBlock`, `videoBlock` 등)
- 코드 내 샘플 시드 데이터 6개

---

## 3. 웹사이트 ↔ Sanity 연결

- `lib/portfolios.ts`에서 GROQ로 `portfolio` 데이터 fetch
- `/work` → 공개 포트폴리오 목록
- `/{slug}` → 포트폴리오 상세
- `isPublished: false` → 사이트 미노출
- 정렬: `order` 오름차순 → `year` 내림차순

### 필드 ↔ 화면 매핑

| Sanity | `/work` 목록 | 상세 페이지 |
|--------|-------------|------------|
| `thumbnail` | 썸네일 | — |
| `coverImage` | — | 대표 이미지 (영상 없을 때) |
| `coverVideo` | — | 상세 맨 위 영상 |
| `gallery` | — | 갤러리 (이미지 라이트박스) |
| `client` + `year` | `worksy · 2026` 형식 | 메타 정보 |
| `summary` | 메인페이지 설명 | — |
| `description` | — | 상세 본문 |
| `category` | — | pill 태그 버튼 |

---

## 4. UI 수정 내역

### `/work` 목록 (`ProjectCover.tsx`)

- 클라이언트명 · 작업 연도: `worksy · 2026` 형식 (`PortfolioMeta`)
- 메인페이지 설명: 상단 패딩 16px (`pt-4`), 폰트 14px (`text-sm`)

### 상세 페이지 (`ProjectDetail.tsx`)

- 카테고리: pill 태그 버튼 (`h-7` 고정 높이, `post-text` 클래스 미사용)
- `summary`는 목록 전용, 상세에는 `description`만 표시
- `coverVideo`가 있으면 상세 맨 위에 영상 표시, 없으면 `coverImage` 표시

### Studio (`/studio`)

- React 상태 충돌 방지: `SiteShell`로 Studio 레이아웃 분리
- `NextStudio`는 `ssr: false`로 클라이언트 전용 로드

---

## 5. 주요 파일 구조

```
sanity/
  schema/portfolio.ts       # Studio 스키마
  schemaTypes/index.ts
  structure.ts              # 왼쪽 "Portfolio" 메뉴

lib/
  portfolios.ts             # getAllPortfolios, getPortfolioBySlug 등
  sanity/
    queries.ts              # GROQ 쿼리
    mapPortfolio.ts         # Sanity → Portfolio 타입 변환
    client.ts
    image.ts
    file.ts

types/portfolio.ts

components/
  work/ProjectCover.tsx
  work/ProjectGrid.tsx
  project/ProjectDetail.tsx
  project/VideoModuleBlock.tsx
  layout/SiteShell.tsx

app/
  work/page.tsx
  [slug]/page.tsx
  studio/[[...tool]]/page.tsx
  api/revalidate/route.ts
```

---

## 6. 환경 변수

`.env.local` 예시:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=kssc2mie
NEXT_PUBLIC_SANITY_DATASET=production

# Webhook용 (선택)
SANITY_REVALIDATE_SECRET=랜덤_문자열
```

`.env.example`에도 동일 항목 참고.

---

## 7. 아직 안 한 것

- [ ] Sanity **Publish webhook** 설정 → `/api/revalidate?secret=...` 연동
- [ ] 배포 환경(Vercel 등)에 환경 변수 등록
- [ ] `isFeatured`를 메인 페이지 등에 활용 (현재 필드만 존재)

### Webhook 설정 (배포 후)

1. [sanity.io/manage](https://www.sanity.io/manage) → API → Webhooks
2. URL: `https://도메인/api/revalidate?secret=SANITY_REVALIDATE_SECRET값`
3. Trigger: Create, Update, Delete
4. Filter: `_type == "portfolio"`

---

## 8. 기술 스택

- Next.js 16 (App Router)
- Sanity 5 + next-sanity
- TypeScript, Tailwind CSS 4
