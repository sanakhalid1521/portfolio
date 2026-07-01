'use client';

export default function Blog() {
  return (
    <section id='blog' className="bg-white dark:bg-gradient-to-r dark:from-black dark:to-gray-800 body-font relative transition-colors duration-500">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-800 dark:text-gray-200">
            Insights & Updates
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            Sharing knowledge on Humanoid Robotics, Physical AI, and 24/7 AI Employee systems
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  1
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Building 24/7 AI Employees: Architecture & Best Practices
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    June 15, 2026 • 5 min read
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Learn how to design AI systems that operate continuously without downtime,
                    combining reactive planning with proactive maintenance for maximum uptime.
                  </p>
                  <a href="#" className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-500 dark:hover:text-green-300">
                    Read More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  2
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Physical AI: Bridging the Gap Between Digital and Robotics
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    June 10, 2026 • 7 min read
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Explore how Physical AI enables robots to understand and interact with the
                    physical world through learned dynamics and real-time adaptation.
                  </p>
                  <a href="#" className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-500 dark:hover:text-green-300">
                    Read More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  3
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Agentic AI Systems: From Theory to Production Deployment
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    June 5, 2026 • 6 min read
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Practical guide to deploying autonomous AI agents that can make decisions,
                    learn from interactions, and improve over time in production environments.
                  </p>
                  <a href="#" className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-500 dark:hover:text-green-300">
                    Read More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Want to stay updated on the latest in AI & Robotics?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Subscribe to get insights on building intelligent 24/7 AI systems
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-l focus:border-green-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 dark:text-gray-200 w-full md:w-64"
            />
            <button
              type="button"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-r transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}