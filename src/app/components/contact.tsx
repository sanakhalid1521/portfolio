'use client'
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    console.log({ name, email, message });


    setName('');
    setEmail('');
    setMessage('');
    setSuccess(true);
    setError('');
  };

  return (
    <section id='contact' className="bg-white dark:bg-gradient-to-r dark:from-black dark:to-gray-800 body-font relative transition-colors duration-500">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-800 dark:text-gray-200">Contact Us</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form 
            action="https://formspree.io/f/mqakpjne" // TODO: Replace with your Formspree ID
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 dark:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 dark:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 dark:text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg transition-colors">
                  Send Message
                </button>
              </div>
              {error && (
                <div className="p-2 w-full text-red-500">{error}</div>
              )}
              {success && (
                <div className="p-2 w-full text-green-500">Your message has been sent successfully!</div>
              )}
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <span className="inline-flex">
                  <a className="text-gray-500">
              
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
