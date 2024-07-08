import React from 'react';

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-between gap-7 ">
        <a href="/dashboard"><img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto" alt="Logo" className="h-8 w-8 mr-2"/></a>
        <span className="text-white font-bold">Your Logo</span>
      </div>
      <div>
        <a href="/home" className="text-white mx-4">Home</a>
      </div>
      <div>
        <a href="/signup" className="text-white mx-2">Signup</a>
        <a href="/login" className="text-white mx-2">Login</a>
      </div>
    </nav>
  );
}

export default Header;
