import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-7 ">
        <Link to="/"><img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto" alt="Logo" className="h-12 w-24 mr-2"/></Link>
        <span className="text-white font-bold">Anime World</span>
      </div>
      <div>
        <Link to="/home" className="text-white mx-4">Home</Link>
      </div>
      <div>
        <Link to="/signup" className="text-white mx-2">Signup</Link>
        <Link to="/login" className="text-white mx-2">Login</Link>
      </div>
    </nav>
  );
}

export default Header;
