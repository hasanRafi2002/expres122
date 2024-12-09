import * as React from "react";
import { Star } from "lucide-react";

function TestimonialCard({ rating, title, description, avatar, name }) {
  return (
    <article className="flex flex-col justify-between items-start p-8 bg-gradient-to-br from-blue-100 to-purple-50  rounded-2xl shadow-lg min-h-[400px] max-w-md w-full">
      {/* Rating and Title Section */}
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, index) => (
            <Star key={index} className="w-5 h-5 text-yellow-400" />
          ))}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Description Section */}
      <p className="mt-6 text-sm leading-relaxed text-gray-600 ">
        {description}
      </p>

      {/* User Info Section */}
      <div className="flex items-center gap-4 mt-6">
        <img
          loading="lazy"
          src={avatar}
          alt={`${name}'s profile picture`}
          className="object-cover w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <div className="font-semibold text-gray-800 ">{name}</div>
          <div className="text-sm text-gray-500 ">Satisfied User</div>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;




