import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getArticleBySlug } from '../api/articles';
import MarkdownRenderer from '../components/markdown/MarkdownRenderer';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: article, isLoading, error } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => getArticleBySlug(slug!),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Loading article...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg">Article not found.</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        {article.category && (
          <span className="text-sm font-medium text-blue-600 mb-2 block">
            {article.category.name}
          </span>
        )}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <time>
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>·</span>
          <span>{article.readingTimeMinutes} min read</span>
        </div>
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((tag) => (
              <span
                key={tag.id}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </header>
      
      {article.featuredImage && (
        <img
          src={article.featuredImage}
          alt={article.title}
          className="w-full rounded-lg mb-8"
        />
      )}
      
      <div className="article-content">
        <MarkdownRenderer content={article.content} />
      </div>
    </article>
  );
};

export default BlogPostPage;
