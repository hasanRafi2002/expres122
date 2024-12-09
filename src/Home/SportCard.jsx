



import * as React from "react";

function SportCard({ 
  title, 
  imageSrc, 
  imagePosition = "bottom", 
  darkMode = false 
}) {
  const cardColorClasses = darkMode 
    ? "bg-gray-900 text-white shadow-2xl" 
    : "bg-white shadow-lg hover:shadow-xl";

  const imageComponent = (
    <div 
      className={`
        flex 
        flex-col 
        ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} 
        rounded-2xl 
        overflow-hidden 
        transform 
        transition-all 
        duration-300 
        hover:scale-105
      `}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} sport illustration`}
        className={`
          object-cover 
          w-full 
          h-64 
          ${darkMode ? 'opacity-80' : 'opacity-100'}
          rounded-2xl
          ${darkMode ? 'aspect-[1.36]' : 'aspect-[0.94]'}
        `}
      />
    </div>
  );

  const titleComponent = (
    <div 
      className={`
        px-6 
        py-4 
        text-2xl 
        text-center 
        uppercase 
        tracking-wider 
        font-bold 
        ${darkMode 
          ? 'bg-gray-800 text-white' 
          : 'bg-gray-100       text-gray-800'}
        rounded-2xl 
        transition-colors 
        duration-300
      `}
    >
      {title}
    </div>
  );

  return (
    <div 
      className={`
        flex 
        flex-col 
        w-full 
        md:w-72 
        transition-all 
        duration-300 
        ${cardColorClasses}
        rounded-3xl 
        overflow-hidden 
        hover:scale-105
        transform
        group
      `}
    >
      <div 
        className="flex flex-col p-4 space-y-4 grow"
      >
        {imagePosition === "bottom" ? (
          <>
            {titleComponent}
            <div className="mt-auto">{imageComponent}</div>
          </>
        ) : (
          <>
            {imageComponent}
            <div className="mt-4">{titleComponent}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default SportCard;