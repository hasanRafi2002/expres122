



import React from "react";
import { Sparkles, ChevronRight, Layers, Feather, Star } from "lucide-react";

const SlateFloatingHeroSection = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 to-teal-400">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic Floating Shapes */}
        <div className="absolute w-32 h-32 rounded-full top-1/4 left-1/4 bg-white/5 animate-float blur-xl" />
        <div className="absolute w-48 h-48 rounded-full bottom-1/4 right-1/4 bg-white/10 animate-float-inverse blur-xl" />

        {/* Floating Icons */}
        <Layers className="absolute w-12 h-12 opacity-50 text-slate-300 top-1/3 left-1/5 animate-drift" />
        <Feather className="absolute w-10 h-10 text-gray-200 bottom-1/4 right-1/3 opacity-40 animate-drift-slow" />
        <Star className="absolute w-8 h-8 text-slate-200 top-1/2 right-1/5 opacity-60 animate-float" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 transition-transform duration-700 bg-gradient-to-r from-blue-500 to-purple-400 opacity-80 group-hover:scale-105" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl p-20 mx-auto text-center">
        <div className="inline-block p-4 mb-8 bg-white/10 rounded-2xl backdrop-blur-md animate-bounce">
          <Sparkles className="w-10 h-10 text-gray-300 " />
        </div>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white drop-shadow-2xl">
          We're Here to Help
        </h1>

        <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed text-white/90 drop-shadow-lg">
          Reach out to us for any inquiries, feedback, or assistance. Let's build
          a brighter future together!
        </p>

        <button className="flex items-center gap-3 px-10 py-5 mx-auto font-bold transition-all bg-white shadow-2xl text-slate-700 group/btn rounded-2xl hover:bg-opacity-90 hover:shadow-3xl">
          Contact Us Now
          <ChevronRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default SlateFloatingHeroSection;
