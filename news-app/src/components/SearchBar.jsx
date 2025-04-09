import { useNavigate } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery, category, setCategory }) => {
  const navigate = useNavigate();
  const categories = [
    'general', 'business', 'entertainment'
  ];

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      query: searchQuery.trim(),
      category: category
    }).toString();
    navigate(`/search?${queryParams}`);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="mb-8 space-y-4 mt-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleSearchKeyPress}
          className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-3 bg-[#55453d] text-white rounded-lg hover:bg-gray-300 transition"
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm ${
              category === cat
                ? 'bg-[#55453d] text-white'
                : 'bg-[#55453d] text-white hover:bg-gray-300'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
