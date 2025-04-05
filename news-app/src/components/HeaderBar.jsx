import React from 'react'
import { Link } from 'react-router-dom';
const HeaderBar = () => (
    <div className="flex items-center p-4 bg-[#55453d] shadow-md rounded-b-1g">
            <img 
            src="./src/assets/hobby-news-high-resolution-logo.png" 
            alt="Website Logo" 
            className="h-12 w-auto"  
            />
            <nav className="ml-auto flex gap-8">
                <Link 
                    to="/" 
                    className="text-white font-medium hover:text-gray-300 transition-colors no-underline"
                >
                 General
                </Link>
                <Link 
                    to="/" 
                    className="text-white font-medium hover:text-gray-300 transition-colors no-underline"
                >
                 Entertainment
                </Link>
                <Link 
                    to="/" 
                    className="text-white font-medium hover:text-gray-300 transition-colors no-underline"
                >
                    Business
                </Link>
            </nav>
    </div>


);
 

export default HeaderBar