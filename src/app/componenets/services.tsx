import React from 'react';
import Image from 'next/image';
import webdevelopment from '../public/webdevelopment.webp';
import uiuxdesign1 from '../public/uiuxdesign1.png';
import consultingservice from '../public/consultingservice.webp';

const Service: React.FC = () => {
  return (
    <section id='services' className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-200">My Services</h2>
        <p className="mt-4 text-gray-200">
          I offer a variety of services to help bring your vision to life.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {/* Service 1 */}
          <div className="w-64 p-4 bg-gray-500 rounded-lg shadow-md flex flex-col items-center group hover:bg-gray-600 transition-all">
            <div className="overflow-hidden rounded">
              <Image 
                src={webdevelopment} 
                alt="Web Development" 
                width={200} 
                height={150} 
                className="rounded object-cover transition-transform duration-300 transform group-hover:-translate-y-2" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-200 mt-4">Web Development</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Building responsive and modern web applications tailored to your needs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="w-64 p-4 bg-gray-500 rounded-lg shadow-md flex flex-col items-center group hover:bg-gray-600 transition-all">
            <div className="overflow-hidden rounded">
              <Image 
                src={uiuxdesign1} 
                alt="UI/UX Design" 
                width={200} 
                height={150} 
                className="rounded object-cover transition-transform duration-300 transform group-hover:-translate-y-2" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-200 mt-4">UI/UX Design</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Crafting intuitive and visually appealing user interfaces.
            </p>
          </div>

          {/* Service 3 - Consultation */}
          <div className="w-64 p-4 bg-gray-500 rounded-lg shadow-md flex flex-col items-center group hover:bg-gray-600 transition-all">
            <div className="overflow-hidden rounded">
              <Image 
                src={consultingservice} 
                alt="Consultation" 
                width={200} 
                height={150} 
                className="rounded object-cover transition-transform duration-300 transform group-hover:-translate-y-2" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-200 mt-4">Consultation</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Providing insights and strategies for enhancing your digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
