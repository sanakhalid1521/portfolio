'use client'
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error and success
    setError('');
    setSuccess(false);

    // Basic validation
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!validateEmail(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!message.trim()) {
      setError('Please enter your message.');
      return;
    }

    if (message.trim().length < 10) {
      setError('Please enter a more detailed message (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with actual Formspree or backend)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In a real app, you would send data to your backend here
      console.log('Form submitted:', { name, email, message });

      setSuccess(true);
      setIsSubmitting(false);

      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setMessageCount(0);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="bg-white dark:bg-gradient-to-r dark:from-black dark:to-gray-800 body-font relative transition-colors duration-500">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-800 dark:text-gray-200">
            Get In Touch
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        {success && (
          <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-start space-x-4">
              <svg className="mt-1 h-5 w-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <div className="flex items-start space-x-4">
              <svg className="mt-1 h-5 w-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Something went wrong
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            action="https://formspree.io/f/mqakpjne" // TODO: Replace with your Formspree ID
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-200 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 dark:text-gray-200 py-2 px-4 leading-7 transition-colors duration-200 ease-in-out"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-200 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 dark:text-gray-200 py-2 px-4 leading-7 transition-colors duration-200 ease-in-out"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-200 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setMessageCount(e.target.value.length);
                    }}
                    className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 dark:text-gray-200 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    placeholder="Type your message here..."
                    required
                    minLength="10"
                  />
                  <div className="mt-1 text-right text-sm text-gray-500 dark:text-gray-400">
                    {messageCount}/1000 characters
                  </div>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex mx-auto text-white bg-green-600 border-0 py-3 px-8 focus:outline-none hover:bg-green-700 rounded-lg text-lg font-medium transition-all duration-300 transform
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}