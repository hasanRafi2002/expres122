


import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";

const ComponentCardPage = () => {
  const [components, setComponents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:4000/api/component");
        // Limit to first 6 components
        const limitedComponents = response.data.slice(0, 6);
        setComponents(limitedComponents);
      } catch (error) {
        console.error("Error fetching component data:", error);
        setError("Failed to load components. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchComponents();
  }, []);

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8   bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b]">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Discover Premium Components
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-200">
          Explore our curated collection of high-quality tech components designed 
          to elevate your projects with cutting-edge technology.
        </p>
      </div>

      {/* Components Section */}
      <div className="mx-auto max-w-7xl">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-t-4 border-purple-500 rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-xl text-center text-red-500">
            {error}
          </div>
        ) : (
          <>
            {components.length === 0 ? (
              <div className="text-xl text-center text-gray-500 dark:text-gray-200">
                No components available at the moment.
              </div>
            ) : (
                <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {components.map((component) => (
                  <CardComponent
                    key={component._id}
                    id={component._id}
                    image={component.image}
                    itemName={component.itemName}
                    categoryName={component.categoryName}
                    description={component.description}
                    price={component.price}
                    rating={component.rating}
                  />
                ))}
              </div>
              </div>
            )}
          </>
        )}
      </div>



                      <div className="mt-12 text-center">
                   <button 
                      
                      className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium tracking-tighter text-white rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 group"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span className="relative">Show More Components</span>
                    </button>
                  </div>

      

      {/* Features Section */}
      <div className="px-4 mx-auto mt-20 max-w-7xl">
        <div className="grid gap-8 text-center md:grid-cols-3">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Premium Quality",
              description: "Meticulously selected components that meet the highest standards of performance."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "Competitive Pricing",
              description: "Unbeatable prices without compromising on component quality."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 01-4.355-4.355l-.477-2.387a2 2 0 00-.547-1.022L6 5m8 8l-1.535-1.535a5.985 5.985 0 01-1.464-3.869l.193-1.837a2 2 0 011.598-1.597l1.292-.16c.462-.055.89-.281 1.195-.618l.53-.666a2 2 0 012.904-.266L20 5" />
                </svg>
              ),
              title: "Extensive Catalog",
              description: "Wide range of components to suit diverse technological requirements."
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600 ">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentCardPage;