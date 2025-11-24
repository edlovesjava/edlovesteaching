import client from './client';
import type { Tag } from '../types/article';

export const getTags = async (): Promise<Tag[]> => {
  const response = await client.get('/tags');
  return response.data;
};
