import React from "react";
import HomeHero from "./HomeHero";

import { GoodLifeHero } from "../others/GoodLifeHero";
import HeroSection from "../others/CreateHero";
import TestimonialsSection from "../others/TestimonialsSection";
import { BlogSection } from "../others/blogsection";
import SportsGrid from "./SportsGrid";
import Card from "./CardPage";
import NewsLayout from "../others/NewsLayout";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <div className="">
      <Card/>
<SportsGrid/>
        <GoodLifeHero />
        <HeroSection />
        
        <NewsLayout/>
        <BlogSection />
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Home;
