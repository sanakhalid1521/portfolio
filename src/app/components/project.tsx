"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import resume from '../../../public/resume.png';
import countdowntimer from '../../../public/countdowntimer.png'
import todolist from '../../../public/todolist.png'
import idcard from '../../../public/idcard.png'
import pizzapic from '../../../public/pizzapic.png'
import growthmind from '../../../public/growthmind.png'
import librarymanager from '../../../public/librarymanager.png'
import password from '../../../public/password.png'
import unitconverter from '../../../public/unitconverter.png' 
import humanoid from '../../../public/humanoid.png'

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projectData = [
    {
      title: "Professional Resume Builder",
      category: "Professional Tools",
      description: "A high-performance, professional tool for creating polished resumes with advanced customization and real-time preview.",
      image: resume,
      link: "https://professional-resume-builder-gamma.vercel.app",
      tag: "Professional Tool"
    },
    {
      title: "Count Down Timer",
      category: "Web Apps",
      description: "A countdown timer app to track time precisely and enhance productivity.",
      image: countdowntimer,
      link: "https://countdowntimer1.vercel.app",
      tag: "Utility"
    },
    {
      title: "To-Do-List",
      category: "Web Apps",
      description: "A streamlined to-do list app for efficient task management and daily productivity.",
      image: todolist,
      link: "https://todolistnextjs-six.vercel.app",
      tag: "Productivity"
    },
    {
      title: "Governor ID card",
      category: "Professional Tools",
      description: "An ID card generator for the Governor Sindh IT Initiative, designed for quick and professional identification.",
      image: idcard,
      link: "https://idcard-eyomzki37-sanakhalid1521s-projects.vercel.app",
      tag: "Professional Tool"
    },
    {
      title: "Pizza E-commerce",
      category: "Web Apps",
      description: "A flavorful pizza e-commerce site offering delicious variety and seamless ordering.",
      image: pizzapic,
      link: "https://pizzaecommerce-rouge.vercel.app",
      tag: "E-Commerce"
    },
    {
      title: "Growth Mindset App",
      category: "AI & Python",
      description: "A Streamlit app that promotes positivity using Quranic verses and Islamic motivation.",
      image: growthmind,
      link: "https://growthmind.streamlit.app/",
      tag: "Streamlit App"
    },
    {
      title: "Library Manager",
      category: "Professional Tools",
      description: "A book issuing and search system using Python and Streamlit interface.",
      image: librarymanager,
      link: "https://librarymanager04.streamlit.app/",
      tag: "Management"
    },
    {
      title: "Password Strength Checker",
      category: "AI & Python",
      description: "An app that evaluates the strength of your password using Python logic.",
      image: password,
      link: "https://passwordstrength03.streamlit.app/",
      tag: "Security"
    },
    {
      title: "Unit Converter",
      category: "Web Apps",
      description: "A unit conversion tool built in Streamlit to convert length, weight, temperature & more.",
      image: unitconverter,
      link: "https://unitconverterb.streamlit.app/",
      tag: "Utility"
    },
    {
      title: "Humanoid Physical AI Book",
      category: "AI & Python",
      description: "An interactive guide and exploration of Humanoid Physical AI, featuring advanced concepts.",
      image: humanoid,
      link: "https://humanoid-physical-ai-book.vercel.app",
      tag: "AI & Robotics"
    }
  ];

  const categories = ['All', 'Web Apps', 'AI & Python', 'Professional Tools'];

  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(project => project.category === filter);

  return (
    <section id="projects" className="p-8 bg-gradient-to-r from-black to-gray-800 dark:from-black dark:to-black body-font transition-colors duration-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-200">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            Explore some of my recent work, crafted with a focus on functionality and user experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === cat 
                ? 'bg-green-600 border-green-600 text-white shadow-lg shadow-green-900/40' 
                : 'border-gray-600 text-gray-400 hover:border-green-500 hover:text-green-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap -m-4">
          {filteredProjects.map((project, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative h-64 group overflow-hidden rounded-xl border-2 border-gray-700 hover:border-green-500 transition-all duration-500">
                <Image
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  fill
                />
                <div className="px-8 py-10 relative z-10 w-full bg-gray-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
                  <h2 className="tracking-widest text-xs title-font font-semibold text-green-400 mb-1 uppercase">
                    {project.tag}
                  </h2>
                  <h1 className="title-font text-xl font-bold text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-sm text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <Link 
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

         
