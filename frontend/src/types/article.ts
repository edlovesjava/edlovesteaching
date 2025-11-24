export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  category?: CategorySummary;
  tags?: TagSummary[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  metaTitle?: string;
  metaDescription?: string;
  readingTimeMinutes: number;
}

export interface CategorySummary {
  id: number;
  name: string;
  slug: string;
}

export interface TagSummary {
  id: number;
  name: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface PagedResponse<T> {
  data: T;
  pagination: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}
