import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import resume from '../public/resume.png';
import countdowntimer from '../public/countdowntimer.png'
import todolist from '../public/todolist.png'
import idcard from '../public/idcard.png'
import pizzapic from '../public/pizzapic.png'
import growthmind from '../public/growthmind.png'
import librarymanager from '../public/librarymanager.png'
import password from '../public/password.png'
import unitconverter from '../public/unitconverter.png' 

const Projects = () => {
  return (
    <>
      <section id="projects" className="p-8 bg-gradient-to-r from-black to-gray-800  body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
              My  projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
            Explore some of my recent work, crafted with a focus on functionality and user experience.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={resume}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume Builder
                  </h1>
                  <p className="leading-relaxed">
                  A user-friendly tool that enables seamless resume creation with customizable templates, shareable links, and download options.

                  </p>
                  <Link href="https://uniquepathshareand-download.vercel.app" 
                    className="text-indigo-500 inline-flex items-center mt-3  hover:underline">
                      View Project
                    
                  </Link>
                </div>
              </div>
            </div>


 {/* countdowntimer Project */}
 <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="New Project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={countdowntimer}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Count Down Timer
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Count Down Timer
                  </h1>
                  <p className="leading-relaxed">
                  A countdown timer app to track time precisely and enhance productivity. 
                  </p>
                  <Link href="https://countdowntimer1.vercel.app" 
                    className="text-indigo-500 inline-flex items-center mt-3">
                      View Project
                  
                  </Link>
                </div>
              </div>
            </div>



             {/* todolist Project */}
             <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="New Project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={todolist}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Todo-list
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    To-Do-List
                  </h1>
                  <p className="leading-relaxed">
                  A streamlined to-do list app for efficient task management and daily productivity.
                  </p>
                  <Link href="https://todolistnextjs-six.vercel.app" 
                    className="text-indigo-500 inline-flex items-center mt-3">
                      View Project
                    
                  </Link>
                </div>
              </div>
            </div>


{/* id-card Project */}
<div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="New Project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={idcard}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Id card
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Governor ID card
                  </h1>
                  <p className="leading-relaxed">
                  An ID card generator for the Governor Sindh IT Initiative, designed for quick and professional identification.
   
   </p>               <Link href="https://id-card-1-sanakhalid1521s-projects.vercel.app" 
                    className="text-indigo-500 inline-flex items-center mt-3">
                      View Project
                    
                  </Link>
                </div>
              </div>
            </div>


{/* e-commercewebsite Project */}
<div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="New Project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={pizzapic}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    E-Commerce websit
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Pizza E-commerce
                  </h1>
                  <p className="leading-relaxed">
                  A flavorful pizza e-commerce site offering delicious variety and seamless ordering.
                  </p>
                  <Link href="https://pizzaecommercrwebsite.vercel.app"
                    className="text-indigo-500 inline-flex items-center mt-3">
                      View Project
                    
                  </Link>
                </div>
              </div>
            </div>

          {/* Growth Mindset App */}
<div className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <Image
      alt="Growth Mindset"
      className="absolute inset-0 w-full h-full object-cover object-center"
      src={growthmind}
      layout="fill"
      objectFit="cover"
    />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
        Streamlit App
      </h2>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Growth Mindset App
      </h1>
      <p className="leading-relaxed">
        A Streamlit app that promotes positivity using Quranic verses and Islamic motivation.
      </p>
      <Link href="https://growthmind.streamlit.app/" className="text-indigo-500 inline-flex items-center mt-3">
        View Project
      </Link>
    </div>
  </div>
</div>

{/* Library Manager */}
<div className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <Image
      alt="Library Manager"
      className="absolute inset-0 w-full h-full object-cover object-center"
      src={librarymanager}
      layout="fill"
      objectFit="cover"
    />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
        Streamlit App
      </h2>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Library Manager
      </h1>
      <p className="leading-relaxed">
        A book issuing and search system using Python and Streamlit interface.
      </p>
      <Link href="https://librarymanager04.streamlit.app/" className="text-indigo-500 inline-flex items-center mt-3">
        View Project
      </Link>
    </div>
  </div>
</div>

{/* Password Strength Checker */}
<div className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <Image
      alt="Password Checker"
      className="absolute inset-0 w-full h-full object-cover object-center"
      src={password}
      layout="fill"
      objectFit="cover"
    />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
        Streamlit App
      </h2>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Password Strength Checker
      </h1>
      <p className="leading-relaxed">
        An app that evaluates the strength of your password using Python logic.
      </p>
      <Link href="https://passwordstrength03.streamlit.app/" className="text-indigo-500 inline-flex items-center mt-3">
        View Project
      </Link>
    </div>
  </div>
</div>

{/* Unit Converter */}
<div className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <Image
      alt="Unit Converter"
      className="absolute inset-0 w-full h-full object-cover object-center"
      src={unitconverter}
      layout="fill"
      objectFit="cover"
    />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
        Streamlit App
      </h2>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Unit Converter
      </h1>
      <p className="leading-relaxed">
        A unit conversion tool built in Streamlit to convert length, weight, temperature & more.
      </p>
      <Link href="https://unitconverterb.streamlit.app/" className="text-indigo-500 inline-flex items-center mt-3">
        View Project
      </Link>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

         
