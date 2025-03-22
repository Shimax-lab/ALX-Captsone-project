
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import HeaderBar from '../components/HeaderBar'; 
import Footer from '../components/Footer'; 

const HomePage = () => {
    

    return (
    
        <div className="container mx-auto p-0">
            <HeaderBar />
            <SearchBar/>
        
           <NewsCard/>
           <Footer/>
        </div>
    
        
        
    )
}

export default HomePage