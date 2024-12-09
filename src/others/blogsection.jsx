



import * as React from "react";
import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    category: "Fitness & Wellness",
    date: "April 10, 2024",
    title: "Top 10 Exercises for Building Endurance and Strength",
    imageUrl:
      "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/a9/fitness.jpg?raw=true",
  },
  {
    category: "Nutrition Tips",
    date: "April 12, 2024",
    title: "Boost Your Energy with These Superfoods in 2024",
    imageUrl:
      "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/a9/nutrition.jpg?raw=true",
  },
  {
    category: "Lifestyle Hacks",
    date: "April 15, 2024",
    title: "Maximize Your Day with These Time Management Techniques",
    imageUrl:
      "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/a9/lifestyle.jpg?raw=true",
  },
];

export function BlogSection() {
  return (
    <section className="w-full px-8 py-12 rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b] dark:text-white
 ">
      <header className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 max-md:text-2xl">
          Explore Our Latest Insights
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-200">
          Stay inspired with actionable tips, expert advice, and trends that 
          help you thrive in health, wellness, and beyond.
        </p>
        <button className="px-6 py-2 mt-6 text-white transition bg-indigo-600 rounded-md shadow-md hover:bg-indigo-800">
          View All Blogs
        </button>
      </header>
      <main className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            category={post.category}
            date={post.date}
            title={post.title}
            imageUrl={post.imageUrl}
          />
        ))}
      </main>
    </section>
  );
}
