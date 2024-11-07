import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-200 body-font bg-gray-800">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-200">
          <span className="ml-3 text-xl">Sana Khalid</span> 
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {currentYear} Sana Khalid
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a 
            href="https://www.linkedin.com/in/" 
            className="text-blue-900 hover:text-indigo-500 transition duration-300 ease-in-out ml-3"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={50} />
          </a>
          <a 
            href="https://www.facebook.com/" 
            className="text-blue-900 hover:text-indigo-500 transition duration-300 ease-in-out ml-3"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={50} />
          </a>
          <a 
            href="https://github.com/" 
            className="text-blue-900 hover:text-indigo-500 transition duration-300 ease-in-out ml-3"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={50} />
          </a>
          <a 
            href="https://twitter.com/" 
            className="text-blue-900 hover:text-indigo-500 transition duration-300 ease-in-out ml-3"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={50} />
          </a>
        </span>
      </div>
    </footer>
  );
}
