import type { Article } from '../../types/article';
import ArticleCard from './ArticleCard';

interface ArticleListProps {
  articles: Article[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No articles found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
