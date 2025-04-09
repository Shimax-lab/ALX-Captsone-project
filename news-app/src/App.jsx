import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from'./pages/HomePage'
import ArticleDetails from './pages/ArticleDetails'
import SearchResultsPage from './components/SearchResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:title" element={<ArticleDetails />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </Router>
  )
}

export default App