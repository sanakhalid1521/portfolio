'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import profilepic from '../public/profilepic.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-black to-gray-800 text-white"
    >
      <div className="text-center md:text-left md:w-1/2 p-4 animate-fade-in-up">
        <h1 className="text-6xl font-extrabold mb-4 animate-text">
          Hi, I am{' '}
          <span className="text-shadow bg-gradient-to-r text-green-400">
            Sana Khalid
          </span>
        </h1>
        <div className="text-3xl mb-4">
          <Typewriter
            options={{
              strings: [
                'Web Developer',
                'JavaScript Lover',
                'UI/UX Designer',
                'Web Application Expert',
                'Python & Agentic AI Explorer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-lg mb-4">
          I am a web developer and UI expert. I specialize in creating intuitive
          and visually appealing web applications. Recently, I’ve been working
          on advanced Python projects like a Translator App, Multi-Agent System,
          and Crypto Currency Assistant using Agentic AI principles.
        </p>

        <div className="mt-4">
          <span className="inline-block bg-green-700 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">
            Python
          </span>
          <span className="inline-block bg-green-700 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">
            Agentic AI
          </span>
          <span className="inline-block bg-green-700 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">
            Translator App
          </span>
          <span className="inline-block bg-green-700 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">
            Multi-Agent System
          </span>
          <span className="inline-block bg-green-700 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">
            Crypto Currency AI
          </span>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center animate-fade-in">
        <Image
          src={profilepic}
          alt="Sana Khalid"
          width={300}
          height={300}
          className="rounded-full border-4 border-white"
        />
      </div>
    </section>
  );
};

export default Hero;
