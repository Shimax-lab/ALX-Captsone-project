import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/Footer';

const ArticleDetails = () => {
  const { title } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const savedArticles = JSON.parse(localStorage.getItem('newsArticles'));
        if (!savedArticles) {
          throw new Error('No articles found in local storage');
        }
        const foundArticle = savedArticles.find(a => a.title === decodeURIComponent(title));
        if (!foundArticle) {
          throw new Error('Article not found');
        }
        setArticle(foundArticle);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchArticle();
  }, [title]);

  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!article) return <div className="p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-2 max-w-full">
          <HeaderBar/>

      
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="flex items-center space-x-4 text-gray-500 mb-6">
        <span>{article.source?.name}</span>
        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        {article.author && (
          <>
            <span>•</span>
            <span>By {article.author}</span>
          </>
        )}
      </div>

      <img
        src={article.urlToImage || '/placeholder-image.jpg'}
        alt={article.title}
        className="w-2/3 object-center h-64 object-cover mb-6 rounded-lg"
      />

      <div className="text-gray-700 leading-relaxed mb-6">
        {article.content || article.description}
      </div>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#55453d] text-white px-6 py-2 rounded hover:bg-blue-900 transition-colors"
      >
        Read Full Article
      </a>
      <Footer/>
    </div>
  );
};

export default ArticleDetails;
