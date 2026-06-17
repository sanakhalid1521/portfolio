import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-600 dark:text-gray-200 body-font bg-white dark:bg-gray-800 transition-colors duration-500 border-t border-gray-200 dark:border-gray-700">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-800 dark:text-gray-200">
          <span className="ml-3 text-xl font-bold">Sana Khalid</span> 
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 dark:sm:border-gray-600 sm:py-2 sm:mt-0 mt-4">
          © {currentYear} Sana Khalid
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a 
            href="https://www.linkedin.com/in/sana-khalid" // TODO: Verify your LinkedIn handle
            className="text-blue-600 dark:text-blue-400 hover:text-green-500 transition duration-300 ease-in-out ml-3"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a 
            href="https://www.facebook.com/sanakhalid" // TODO: Verify your Facebook handle
            className="text-blue-600 dark:text-blue-400 hover:text-green-500 transition duration-300 ease-in-out ml-3"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
          <a 
            href="https://github.com/sanakhalid1521" 
            className="text-gray-800 dark:text-white hover:text-green-500 transition duration-300 ease-in-out ml-3"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a 
            href="https://twitter.com/sanakhalid" // TODO: Verify your Twitter handle
            className="text-blue-400 hover:text-green-500 transition duration-300 ease-in-out ml-3"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>
        </span>
      </div>
    </footer>
  );
}
