const NewsCard = ({ article, onClick }) => {
    const formattedDate = new Date(article.publishedAt).toLocaleDateString()
  
    return (
      <div 
        onClick={onClick}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      >
        <img 
          src={article.urlToImage } 
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{article.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {article.description}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{article.source?.name}</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    )
  }
  export default NewsCard
  