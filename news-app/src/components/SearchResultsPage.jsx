import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/Footer';

const SearchResultsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('query') || '';
  const category = searchParams.get('category') || 'general';

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?q=${searchQuery}&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );

        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          const fullArticles = data.articles.map(article => ({
            title: article.title,
            description: article.description,
            content: article.content || 'Full content not available.',
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
            source: article.source.name,
          }));

          setArticles(fullArticles);
        } else {
          setError('No articles found.');
        }
      } catch (err) {
        setError('Failed to fetch news. Check your connection or API key.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [searchQuery, category]);

  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-2">
      <HeaderBar />
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              onClick={() => navigate(`/article/${encodeURIComponent(article.title)}`)}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
