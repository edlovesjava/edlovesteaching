import { Link } from 'react-router-dom';
import { Article } from '../../types/article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link to={`/blog/${article.slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
        {article.featuredImage && (
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            {article.category && (
              <span className="text-sm font-medium text-blue-600">
                {article.category.name}
              </span>
            )}
            <span className="text-sm text-gray-500">
              {article.readingTimeMinutes} min read
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4">{article.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags?.map((tag) => (
              <span
                key={tag.id}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-500">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
