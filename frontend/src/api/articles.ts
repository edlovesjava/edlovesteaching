import client from './client';
import type { Article, PagedResponse } from '../types/article';

export const getArticles = async (page = 0, size = 10): Promise<PagedResponse<Article[]>> => {
  const response = await client.get(`/articles?page=${page}&size=${size}`);
  return response.data;
};

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const response = await client.get(`/articles/${slug}`);
  return response.data;
};

export const getArticlesByCategory = async (
  categorySlug: string,
  page = 0,
  size = 10
): Promise<PagedResponse<Article[]>> => {
  const response = await client.get(`/articles/category/${categorySlug}?page=${page}&size=${size}`);
  return response.data;
};

export const getArticlesByTag = async (
  tagSlug: string,
  page = 0,
  size = 10
): Promise<PagedResponse<Article[]>> => {
  const response = await client.get(`/articles/tag/${tagSlug}?page=${page}&size=${size}`);
  return response.data;
};
