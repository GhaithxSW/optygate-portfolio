export interface ProjectResult {
  metric: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  industry: string;
  technologies: string[];
  thumbnailImage: string;
  images: string[];
  results?: ProjectResult[];
  challenge?: string;
  solution?: string;
  link?: string;
  featured: boolean;
  year?: string;
}

export type Industry =
  | "Healthcare"
  | "Education"
  | "Media & Entertainment"
  | "Arts & Culture"
  | "Sports"
  | "Technology"
  | "Financial Services"
  | "Home & Construction"
  | "Retail & E-commerce"
  | "All";
