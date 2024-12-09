import * as React from "react";
import { ArrowRight } from "lucide-react";

export const BlogCard = ({ date, title, category, imageUrl }) => {
  return (
    <article className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white max-w-[636px] w-full">
      {/* Image and Category */}
      <div className="relative">
        <div className="relative">
          <img
            loading="lazy"
            src={imageUrl}
            alt={`Blog post: ${title}`}
            className="object-cover w-full h-64"
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-purple-600 bg-opacity-50"></div>
        </div>

        <span className="absolute px-4 py-1 text-sm font-medium text-white bg-purple-600 rounded-lg top-4 left-4">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <time className="text-sm text-gray-500">{date}</time>
        <h2 className="mt-4 font-semibold text-gray-800 text-md">{title}</h2>
        <button
          className="flex items-center gap-2 mt-4 text-purple-600 transition hover:text-teal-800"
          aria-label={`Read more about ${title}`}
        >
          <span className="font-medium">Read More</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
};
