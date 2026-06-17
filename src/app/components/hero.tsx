"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profilepic from '../../../public/profilepic.png';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 dark:bg-green-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="text-center md:text-left md:w-1/2 p-6 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
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
              delay: 75,
            }}
          />
        </div>
        <p className="text-lg md:text-xl mb-8 text-gray-400 leading-relaxed">
          Pioneering the future of <strong>Humanoid Physical AI</strong>. I specialize in building 
          intelligent 24/7 AI Agents and end-to-end Fullstack systems that bridge the gap 
          between software and robotics.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <a 
            href="/resume.png" 
            download="Sana_Khalid_CV.png"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-green-900/20 flex items-center cursor-pointer"
          >
            Download CV
          </a>
          <Link 
            href="#contact"
            className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500/10 font-bold rounded-lg transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {['ROS 2', 'Next.js', 'Agentic AI', 'Python', 'Physical AI'].map((tag) => (
            <span key={tag} className="bg-gray-800/50 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center relative">
        {/* Glow effect behind image */}
        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse scale-90"></div>
        <div className="relative group">
          <Image
            src={profilepic}
            alt="Sana Khalid"
            width={350}
            height={350}
            className="rounded-full border-4 border-green-500/30 object-cover aspect-square shadow-2xl transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
