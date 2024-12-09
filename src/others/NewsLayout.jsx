



import * as React from "react";
import { 
  Bike, 
  Newspaper, 
  Flame, 
  ArrowRight 
} from "lucide-react";

const trendingNews = [
  {
    id: 1,
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    image: "/api/placeholder/300/200"
  }
];

const newsArticles = [
  {
    id: 1,
    author: "Sports360",
    date: "07 December 2024",
    title: "Technology's Impact on Athletic Performance",
    excerpt: "Exploring cutting-edge innovations transforming sports globally."
  },
  {
    id: 2,
    author: "Fitness World",
    date: "07 December 2024",
    title: "Training Secrets of Elite Athletes",
    excerpt: "Professional insights to elevate your athletic potential."
  },
  {
    id: 3,
    author: "Global Sports",
    date: "07 December 2024",
    title: "The Rise of Competitive Esports",
    excerpt: "How digital gaming is becoming a mainstream sporting phenomenon."
  }
];

const TrendingNewsCard = ({ image }) => (
  <div className="relative overflow-hidden transition-all transform rounded-lg shadow-md hover:scale-105">
    <img 
      src={image} 
      alt="Trending sports news" 
      className="object-cover w-full h-32"
    />
    <div className="absolute inset-0 transition-all bg-black/30 hover:bg-black/40"></div>
  </div>
);

const NewsArticleCard = ({ author, date, title, excerpt }) => (
  <div className="p-5 transition-all bg-white rounded-lg shadow-md hover:shadow-xl group">
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm text-gray-500">{author}</span>
      <span className="text-xs text-gray-400 ">{date}</span>
    </div>
    <h3 className="mb-2 text-lg font-bold text-gray-800 transition-colors group-hover:text-blue-600">
      {title}
    </h3>
    <p className="mb-4 text-sm text-gray-600 ">{excerpt}</p>
    <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
      Read More <ArrowRight className="ml-2" size={16} />
    </button>
  </div>
);

export default function NewsLayout() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Trending News Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Flame className="mr-3 text-orange-500" size={24} />
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Trending News</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
              {trendingNews.map((news) => (
                <TrendingNewsCard key={news.id} {...news} />
              ))}
            </div>
          </div>

          {/* News Articles Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Newspaper className="mr-3 text-blue-500" size={24} />
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Latest Articles</h2>
            </div>
            <div className="space-y-6">
              {newsArticles.map((article) => (
                <NewsArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>

          {/* Featured Story Section */}
          <div className="lg:col-span-1">
            <div className="p-6 text-white shadow-2xl bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Bike className="mr-2" size={24} />
                  <span className="text-sm font-medium">Cycling</span>
                </div>
                <span className="text-sm text-blue-100">07 December 2024</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">
                Unlock Exclusive Cycling Membership Benefits
              </h3>
              <p className="mb-6 text-blue-100">
                Join our cycling community and access premium perks, expert coaching, and exciting event discounts.
              </p>
              <button className="flex items-center justify-center w-full py-3 text-blue-700 transition-colors bg-white rounded-lg hover:bg-blue-50">
                Join Now <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}