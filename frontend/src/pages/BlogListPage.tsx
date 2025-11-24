import { useQuery } from '@tanstack/react-query';
import { getArticles } from '../api/articles';
import ArticleList from '../components/article/ArticleList';

const BlogListPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: () => getArticles(0, 10),
  });

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg">Error loading articles. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Articles</h1>
      <ArticleList articles={data?.data || []} />
    </div>
  );
};

export default BlogListPage;
