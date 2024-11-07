import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    
    <nav className="bg-gray-800 p-4 z-50 sticky top-0 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sana Khalid</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="#home" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-gray-400">Skills</Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-gray-400">Services</Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-400 mr-5">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
