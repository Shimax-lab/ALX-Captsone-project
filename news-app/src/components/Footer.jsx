import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-[#55453d] text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">Hobby News</p>    
          <p className="mt-4 text-xs text-gray-400">&copy; {new Date().getFullYear()} Hobby News. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  