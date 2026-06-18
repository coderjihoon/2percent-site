export type PortfolioImage = {
  src: string;
  alt?: string;
};

export type Portfolio = {
  slug: string;
  title: string;
  client?: string;
  category?: string[];
  thumbnail: PortfolioImage;
  coverImage: PortfolioImage;
  gallery: PortfolioImage[];
  summary?: string;
  description?: string;
  year: number;
  isFeatured: boolean;
  isPublished: boolean;
  order: number;
};
