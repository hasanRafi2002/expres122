import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Award, ShoppingCart } from "lucide-react";

const stats = [
  {
    icon: <Award size={36} className="text-blue-600" />,
    number: "500+",
    title: "Exclusive Products",
    description: "Curated premium sports gear for every athlete's unique needs.",
  },
  {
    icon: <ShoppingCart size={36} className="text-green-600" />,
    number: "1M+",
    title: "Products Sold",
    description: "Trusted by athletes worldwide, delivering quality gear.",
  },
  {
    icon: <ChevronRight size={36} className="text-purple-600" />,
    number: "99%",
    title: "Customer Satisfaction",
    description: "Excellence driven by our commitment to your athletic journey.",
  }
];

const StatCard = ({ icon, number, title, description }) => (
  <div className="p-6 space-y-3 transition-all transform shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl hover:scale-105">
    <div className="flex items-center gap-4">
      {icon}
      <h3 className="text-2xl font-bold text-gray-800 ">{number}</h3>
    </div>
    <h4 className="text-lg font-semibold text-gray-700 ">{title}</h4>
    <p className="text-sm text-gray-600 ">{description}</p>
  </div>
);

export function GoodLifeHero() {
  return (
    <main className="relative flex flex-col justify-center min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
        {/* Left Image Section */}
        <div className="relative order-2 lg:order-1">
          <img
            src="/api/placeholder/550/700"
            alt="Sports gear showcase"
            className="object-cover w-full shadow-2xl rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
        </div>

        {/* Right Content Section */}
        <div className="order-1 space-y-6 lg:order-2">
          <h1 className="text-4xl font-bold leading-tight text-gray-700 dark:text-gray-200 md:text-5xl ">
            Elevate Your Athletic Performance
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 ">
            Unlock your potential with our cutting-edge sports gear. From professional athletes to weekend warriors, we provide the tools to push your limits.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link 
              to="/shop" 
              className="flex items-center justify-center px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Shop Now
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <button 
              className="flex items-center justify-center px-6 py-3 text-blue-600 transition-colors border-2 border-blue-600 rounded-lg hover:bg-blue-50"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid gap-6 mx-auto mt-16 max-w-7xl md:grid-cols-3">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </main>
  );
}

export default GoodLifeHero;