


import * as React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <main className="flex flex-col items-center w-full px-4 py-16 overflow-hidden">
      <section className="relative w-full max-w-6xl overflow-hidden shadow-2xl bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl">
        <div className="relative z-10 grid grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-12">
          {/* Left Text Section */}
          <article className="flex flex-col justify-center space-y-6 text-white">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Unleash Your Athletic Potential
            </h1>
            <p className="text-base leading-relaxed text-white md:text-lg text-opacity-90">
              Elevate your game with cutting-edge sports equipment. Whether you're a weekend warrior or a professional athlete, find the gear that transforms your performance and passion.
            </p>
            <Link to="/shop" className="self-start">
              <button className="px-8 py-3 font-bold text-pink-600 transition-colors duration-300 transform bg-white rounded-lg shadow-lg hover:bg-pink-100 hover:scale-105 active:scale-95">
                Explore Gear
              </button>
            </Link>
          </article>

          {/* Right Image Section */}
          <div className="relative overflow-hidden shadow-xl rounded-xl">
            <img
              loading="lazy"
              src="https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/a9/b6-team.jpg?raw=true"
              alt="Dynamic athletes in motion"
              className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-40"></div>
          </div>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute w-64 h-64 bg-pink-500 rounded-full -top-20 -right-20 bg-opacity-20 blur-3xl"></div>
        <div className="absolute w-64 h-64 bg-purple-600 rounded-full -bottom-20 -left-20 bg-opacity-20 blur-3xl"></div>
      </section>
    </main>
  );
}

export default HeroSection;