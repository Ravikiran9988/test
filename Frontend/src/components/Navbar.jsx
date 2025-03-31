import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-10 p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-500">Radiant Skincare</div>
        <div className="hidden md:flex space-x-6 text-gray-700 items-center">
          <a href="#" className="hover:text-pink-500">Home</a>
          <a href="#aiConsultation" className="hover:text-pink-500">Consultation</a>
          <a href="#" className="hover:text-pink-500">Products</a>
          <a href="#" className="hover:text-pink-500">About</a>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="bg-white p-4 fixed top-14 w-full">
          <a href="#" className="block py-2">Home</a>
          <a href="#aiConsultation" className="block py-2">Consultation</a>
          <a href="#" className="block py-2">Products</a>
          <a href="#" className="block py-2">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;