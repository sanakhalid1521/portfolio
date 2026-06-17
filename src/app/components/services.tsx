import React from 'react';
import Image from 'next/image';
import physicalAIBook from '../../../public/Pysical AI Book.png';
import todo_app from '../../../public/Todo_app.png';
import ai_employee from '../../../public/247 AI employee.png';
import id_card_generator from '../../../public/ID card generator.png';
import fullstack_developer from '../../../public/FullStackDeveloper.png';
import resume_builder from '../../../public/ResumeBuilder.png';

const Service: React.FC = () => {
  return (
    <section id='services' className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">My Services</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-200">
          I offer a variety of specialized services to help bring your vision to life.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {/* Service 1 - Physical AI Book */}
          <div className="w-64 p-4 bg-gray-100 dark:bg-gray-500 rounded-lg shadow-md flex flex-col items-center group hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
            <div className="overflow-hidden rounded h-40 w-full flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <Image 
                src={physicalAIBook} 
                alt="Physical AI Book" 
                className="rounded object-contain h-full w-full transition-transform duration-300 transform group-hover:-translate-y-2" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4">Physical AI Book</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              Creating interactive educational content and books on Physical AI and Robotics.
            </p>
          </div>

          {/* Service 2 - Todo App Development */}
          <div className="w-64 p-4 bg-gray-500 rounded-lg shadow-md flex flex-col items-center group hover:bg-gray-600 transition-all">
            <div className="overflow-hidden rounded h-40 w-full flex items-center justify-center bg-gray-700">
              <Image 
                src={todo_app} 
                alt="Todo App Development" 
                className="rounded object-contain h-full w-full transition-transform duration-300 transform group-hover:-translate-y-2" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-200 mt-4">Modern Web Apps</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Building efficient and intuitive task management and utility applications.
            </p>
          </div>

          {/* Service 3 - 24/7 AI Employee */}
          <div className="w-64 p-4 bg-gray-500 rounded-lg shadow-md flex flex-col items-center group hover:bg-gray-600 transition-all">
            <div className="overflow-hidden rounded h-40 w-full flex items-center justify-center bg-gray-700">
              <Image 
                src={ai_employee} 
                alt="24/7 AI Employee" 
                className="rounded object-contain h-full w-full transition-transform duration-300 transform group-hover:-translate-y-2" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-200 mt-4">24/7 AI Employee</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Developing automated AI agents to handle business processes round the clock.
            </p>
          </div>

          {/* Service 4 - ID Card Generator */}
          <div className="w-64 p-4 bg-gray-500 rounded-lg shadow-md flex flex-col items-center group hover:bg-gray-600 transition-all">
            <div className="overflow-hidden rounded h-40 w-full flex items-center justify-center bg-gray-700">
              <Image 
                src={id_card_generator} 
                alt="ID Card Generator" 
                className="rounded object-contain h-full w-full transition-transform duration-300 transform group-hover:-translate-y-2" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-200 mt-4">ID Card Generator</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Custom tools for professional identification card generation and management.
            </p>
          </div>

          {/* Service 5 - Fullstack Development */}
          <div className="w-64 p-4 bg-gray-500 rounded-lg shadow-md flex flex-col items-center group hover:bg-gray-600 transition-all">
            <div className="overflow-hidden rounded h-40 w-full flex items-center justify-center bg-gray-700">
              <Image 
                src={fullstack_developer} 
                alt="Fullstack Development" 
                className="rounded object-contain h-full w-full transition-transform duration-300 transform group-hover:-translate-y-2" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-200 mt-4">Fullstack Dev</h3>
            <p className="mt-2 text-gray-300 text-sm">
              End-to-end development of complex web systems, from UI to database.
            </p>
          </div>

          {/* Service 6 - Resume Builder */}
          <div className="w-64 p-4 bg-gray-500 rounded-lg shadow-md flex flex-col items-center group hover:bg-gray-600 transition-all">
            <div className="overflow-hidden rounded h-40 w-full flex items-center justify-center bg-gray-700">
              <Image 
                src={resume_builder} 
                alt="Resume Builder" 
                className="rounded object-contain h-full w-full transition-transform duration-300 transform group-hover:-translate-y-2" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-200 mt-4">Resume Builder</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Creating specialized platforms for professional resume creation and sharing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
