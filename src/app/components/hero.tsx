"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profilepic from '../../../public/profilepic.png';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [isTyped, setIsTyped] = useState(false);

  useEffect(() => {
    // Add a slight delay to trigger the typing animation
    const timer = setTimeout(() => {
      setIsTyped(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 dark:bg-green-900/20 rounded-full blur-3xl -z-10 animate-pulse animate-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 animate-pulse animate-slower"></div>

      {/* Floating decorative circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-16 w-12 h-12 bg-green-500/10 rounded-full animate-float-slow delay-0"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-blue-500/10 rounded-full animate-float delay-2"></div>
        <div className="absolute bottom-20 left-32 w-10 h-10 bg-emerald-500/10 rounded-full animate-float-slow delay-4"></div>
      </div>

      <div className="text-center md:text-left md:w-1/2 p-6 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
          Hi, I am{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
            Sana Khalid
          </span>
        </h1>
        <div className="text-2xl md:text-4xl font-light mb-6 text-gray-700 dark:text-gray-300">
          <Typewriter
            options={{
              strings: [
                'Humanoid Robotics Engineer',
                'Physical AI Architect',
                '24/7 AI Employee',
                'Fullstack Developer',
                'Agentic AI Specialist',
              ],
              autoStart: true,
              loop: true,
              delay: isTyped ? 75 : 0,
              deleteSpeed: 20,
            }}
          />
        </div>
        <p className="text-lg md:text-xl mb-8 text-gray-400 leading-relaxed max-w-xl">
          Pioneering the future of <strong className="text-green-500">Humanoid Physical AI</strong>. I specialize in building
          intelligent <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">24/7 AI Agents</span>
          and end-to-end Fullstack systems that bridge the gap between software and robotics.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <a
            href="/resume.png"
            download="Sana_Khalid_CV.png"
            className="relative overflow-hidden flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-green-900/20 flex items-center cursor-pointer group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              Download CV
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M5 19h14"></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-green-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
          <Link
            href="#contact"
            className="relative overflow-hidden px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500/10 font-bold rounded-lg transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              Contact Me
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.586a1 1 0 01.707.293l5.793 5.793a1 1 0 010 1.414l-5.793 5.793a1 1 0 01-1.414.707A1 1 0 019 19.414V17a1 1 0 00-1-1H5a2 2 0 01-2-2z"></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-green-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {['ROS 2', 'Next.js', 'Agentic AI', 'Python', 'Physical AI'].map((tag, index) => (
            <span
              key={tag}
              className={`relative overflow-hidden inline-block bg-gray-800/50 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full
                transition-all duration-300
                hover:bg-gray-700/50 hover:text-white
                hover:border-green-500/20
                transform
                hover:-translate-y-0.5
                delay-${index * 100}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center relative">
        {/* Glow effect behind image */}
        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse animate-slow"></div>
        <div className="relative group">
          {/* Floating image container */}
          <div className="relative inline-block animate-float delay-2">
            <Image
              src={profilepic}
              alt="Sana Khalid"
              width={350}
              height={350}
              className="rounded-full border-4 border-green-500/30 object-cover aspect-square shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              priority
            />
          </div>

          {/* Interactive pulse rings */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-pulse animate-slower"></div>
            <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-pulse animate-slowest"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;