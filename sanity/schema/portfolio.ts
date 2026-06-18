import { defineArrayMember, defineField, defineType } from "sanity";

const categoryOptions = [
  { title: "Branding", value: "Branding" },
  { title: "Website", value: "Website" },
  { title: "Landing Page", value: "Landing Page" },
  { title: "Detail Page", value: "Detail Page" },
  { title: "Performance Marketing", value: "Performance Marketing" },
  { title: "Content", value: "Content" },
  { title: "SNS", value: "SNS" },
  { title: "Etc", value: "Etc" },
];

export const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "프로젝트명",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL 슬러그",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "client",
      title: "클라이언트명",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "카테고리",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: categoryOptions,
      },
    }),
    defineField({
      name: "thumbnail",
      title: "리스트용 썸네일",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "상세페이지 대표 이미지",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "상세 이미지",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "summary",
      title: "메인페이지 설명",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "description",
      title: "상세 설명",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "year",
      title: "작업 연도",
      type: "number",
      validation: (rule) => rule.required().integer().min(2000).max(2100),
    }),
    defineField({
      name: "isFeatured",
      title: "메인 노출 여부",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isPublished",
      title: "공개 여부",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "정렬 순서",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client",
      year: "year",
      media: "thumbnail",
      isPublished: "isPublished",
    },
    prepare({ title, subtitle, year, media, isPublished }) {
      const yearLabel = year ? String(year) : "";
      const clientLabel = subtitle ? `${subtitle}` : "";
      const statusLabel = isPublished === false ? " · 비공개" : "";

      return {
        title: title || "Untitled",
        subtitle: [clientLabel, yearLabel].filter(Boolean).join(" · ") + statusLabel,
        media,
      };
    },
  },
  orderings: [
    {
      title: "정렬 순서",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "year", direction: "desc" },
      ],
    },
    {
      title: "연도 (최신)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
});
