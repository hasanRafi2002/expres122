import React, { useState, useEffect } from "react";

const AutoWallpaperCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample wallpaper data - replace with your actual images
  const wallpapers = [
    "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/a9/b4.jpg?raw=true",
    "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/a9/a1.jpg?raw=true",
    "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/a9/law.jpg?raw=true",
    "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/a9/interview.jpg?raw=true",
    "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/a9/writer.jpg?raw=true",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % wallpapers.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [wallpapers.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Carousel Slides */}
      <div
        className="flex transition-transform duration-[1500ms] ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {wallpapers.map((wallpaper, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-[500px] bg-black"
          >
            <img
              src={wallpaper}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full opacity-80"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Title and Subtitle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-3xl font-extrabold tracking-wide md:text-5xl lg:text-6xl">
          Elevate Your Game
        </h1>
        <p className="max-w-2xl mt-4 text-lg md:text-xl lg:text-2xl">
          Discover premium sports gear and accessories tailored to fuel your
          passion and performance.
        </p>
        <button className="px-6 py-3 mt-6 font-bold text-white transition duration-300 bg-teal-600 rounded-full shadow-md hover:bg-teal-700">
          Explore Now
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute flex space-x-2 -translate-x-1/2 bottom-6 left-1/2">
        {wallpapers.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`cursor-pointer h-3 w-3 rounded-full border-2 transition ${
              currentSlide === index
                ? "bg-teal-600 border-teal-600"
                : "bg-gray-400 border-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoWallpaperCarousel;
