import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

function Skill() {
  return (
    <div>
      <section id='skills' className="p-8 bg-gradient-to-r from-black to-gray-800 ">
        <div className="container px-5 py-24 mx-auto mb-[5rem]">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-200 mb-20">
            My Skills
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            
            {/* HTML Skill */}
            <div className="p-4 md:w-1/3 flex items-center">
              <div className="text-gray-100 mr-3 flex-shrink-0">
                <CiCircleCheck size={24} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-300 text-lg title-font font-medium mb-1">
                  HTML
                </h2>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-indigo-500 rounded-xl text-right font-bold text-gray-200 w-[100%]">100%</div>
                </div>
              </div>
            </div>

            {/* CSS Skill */}
            <div className="p-4 md:w-1/3 flex items-center">
              <div className="text-gray-100 mr-3 flex-shrink-0">
                <CiCircleCheck size={24} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-300 text-lg title-font font-medium mb-1">
                  CSS
                </h2>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-indigo-500 rounded-xl text-right font-bold text-gray-200 w-[95%]">95%</div>
                </div>
              </div>
            </div>

             {/* Typescript Skill */}
             <div className="p-4 md:w-1/3 flex items-center">
              <div className="text-gray-100 mr-3 flex-shrink-0">
                <CiCircleCheck size={24} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-300 text-lg title-font font-medium mb-1">
                  Typescript/Javascript
                </h2>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-indigo-500 rounded-xl text-right font-bold text-gray-200 w-[90%]">90%</div>
                </div>
              </div>
            </div>

             {/* Nextjs Skill */}
             <div className="p-4 md:w-1/3 flex items-center">
              <div className="text-gray-100 mr-3 flex-shrink-0">
                <CiCircleCheck size={24} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-300 text-lg title-font font-medium mb-1">
                  Nextjs
                </h2>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-indigo-500 rounded-xl text-right font-bold text-gray-200 w-[85%]">85%</div>
                </div>
              </div>
            </div>

             {/* tailwind Skill */}
             <div className="p-4 md:w-1/3 flex items-center">
              <div className="text-gray-100 mr-3 flex-shrink-0">
                <CiCircleCheck size={24} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-300 text-lg title-font font-medium mb-1">
                  Tailwind
                </h2>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-indigo-500 rounded-xl text-right font-bold text-gray-200 w-[80%]">80%</div>
                </div>
              </div>
            </div>

             {/* Figma Skill */}
             <div className="p-4 md:w-1/3 flex items-center">
              <div className="text-gray-100 mr-3 flex-shrink-0">
                <CiCircleCheck size={24} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-300 text-lg title-font font-medium mb-1">
                  Figma
                </h2>
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-indigo-500 rounded-xl text-right font-bold text-gray-200 w-[75%]">75%</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Skill
