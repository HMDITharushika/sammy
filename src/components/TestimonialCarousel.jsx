import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "The spices from Sammy England have completely transformed my cooking. The flavors are so rich and vibrant, it's like a culinary adventure in every dish.",
    name: "John Marc",
    title: "Software Engineer",
  },
  {
    text: "Absolutely love the freshness and aroma of these spices. They've become a staple in my kitchen!",
    name: "Lara Thompson",
    title: "Chef",
  },
  {
    text: "These spices are unmatched in quality. I use them daily and recommend them to all my friends.",
    name: "David Kim",
    title: "Food Blogger",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#8AB1AF] py-16 text-black">
      <div className="container mx-auto px-4 text-center relative max-w-3xl">
        <p className="text-xl italic font-semibold">
          {testimonials[current].text}
        </p>

        <div className="mt-8 flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <p className="mt-4 font-bold">{testimonials[current].name}</p>
          <p className="text-sm">{testimonials[current].title}</p>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2"
          onClick={prevSlide}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
          onClick={nextSlide}
        >
          <FaChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="mt-6 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-black" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
