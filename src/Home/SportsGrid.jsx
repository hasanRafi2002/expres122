


import * as React from "react";
import SportCard from "./SportCard";

const sportsData = [
  {
    title: "Football",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/92671d8f9120b264c8ee9c50e282cce0254a82062d7627ebfc45ff8637f6785d?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
    imagePosition: "bottom"
  },
  {
    title: "Basketball",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4966b2e3b27f8cbd0673fb3ec0385ccf08661d1a9ab4dbdce3cd3c6416381c54?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
    imagePosition: "top"
  },
  {
    title: "Car Sport",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8e4cad07ab142dfea3c1bce0d4b802b19db01b65f2d73640b6c919f20436dbb?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
    imagePosition: "bottom"
  },
  {
    title: "Table Tennis",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1387a64355b462f78ef779ad4ae7bb07b5762563297bb3760caa585cbabb1bbb?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
    imagePosition: "top",
    darkMode: true
  }
];

function SportsGrid() {
  return (
    <div className="container px-4 py-12 mx-auto   bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b]">
      <h1 className="mb-12 text-4xl font-bold text-center     dark:text-gray-200  text-gray-800">
        Explore Our Sports
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {sportsData.map((sport, index) => (
          <SportCard
            key={sport.title}
            title={sport.title}
            imageSrc={sport.imageSrc}
            imagePosition={sport.imagePosition}
            darkMode={sport.darkMode}
          />
        ))}
      </div>
    </div>
  );
}

export default SportsGrid;