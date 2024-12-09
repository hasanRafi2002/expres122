


import * as React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    rating: 5,
    title: "Best Sports Gear Store!",
    description:
      "EquiSport hub has completely transformed my sports experience! Their top-quality equipment has improved my performance significantly.",
    avatar:
      "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/rafi---04.jpg?raw=true",
    name: "Tawhid Hasan Rafi",
  },
  {
    rating: 5,
    title: "Fantastic Customer Service",
    description:
      "The customer service at EquiSport Hub is phenomenal! They were quick to help me find the perfect gear for my sport.",
    avatar:
      "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/photo/jankar.png?raw=true",
    name: "Jhankar Mahbub",
  },
  {
    rating: 5,
    title: "Quality Products and Fast Delivery",
    description:
      "I was amazed by the quality of the equipment and how fast my order arrived. Definitely my go-to for all my sports gear needs.",
    avatar:
      "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/photo/munjerin.png?raw=true",
    name: "Mashroom",
  },
];

function TestimonialsSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-20 max-md:py-16">
      <div className="relative z-10 max-w-4xl text-center">
        <h2 className="text-3xl font-bold     dark:text-gray-200  text-gray-800 sm:text-4xl">
          What Our Customers Are Saying
        </h2>
        <p className="mt-4 text-lg     dark:text-gray-200  text-gray-600">
          Our customers rave about our sports gear! Read their stories and see how Lotus EquiSports has helped enhance their game.
        </p>
      </div>
      <div className="relative z-10 grid grid-cols-1 gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            rating={testimonial.rating}
            title={testimonial.title}
            description={testimonial.description}
            avatar={testimonial.avatar}
            name={testimonial.name}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
