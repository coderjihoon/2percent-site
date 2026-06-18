const portfolioFields = `{
  "slug": slug.current,
  title,
  client,
  category,
  summary,
  description,
  year,
  isFeatured,
  isPublished,
  order,
  thumbnail,
  coverImage,
  gallery
}`;

export const portfoliosQuery = `*[_type == "portfolio" && isPublished != false] | order(order asc, year desc) ${portfolioFields}`;

export const portfolioBySlugQuery = `*[_type == "portfolio" && slug.current == $slug && isPublished != false][0] ${portfolioFields}`;

export const portfolioSlugsQuery = `*[_type == "portfolio" && isPublished != false]{ "slug": slug.current }`;
