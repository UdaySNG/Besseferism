import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition duration-300">
            Besseferism
          </Link>
          <div className="space-x-8">
            <Link to="/" className="hover:text-blue-200 transition duration-300 font-medium">
              Home
            </Link>
            <Link to="/filosofie" className="hover:text-blue-200 transition duration-300 font-medium">
              Filosofie
            </Link>
            <Link to="/about" className="hover:text-blue-200 transition duration-300 font-medium">
              Over ons
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
