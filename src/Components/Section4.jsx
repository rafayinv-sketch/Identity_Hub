import React, { useState } from "react";

const Section4 = () => {
  // Track current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // All slides (text instead of images)
  const slides = [
    {
      title: "Boost Your Productivity",
      desc: "Organize your tasks and achieve more every day.",
    },
    {
      title: "Collaborate Seamlessly",
      desc: "Work together in real time with your team.",
    },
    {
      title: "Track Your Progress",
      desc: "Stay on top of deadlines and milestones.",
    },
    {
      title: "Achieve Your Goals",
      desc: "Turn your ideas into reality with consistency.",
    },
  ];

  // Go to previous
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Go to next
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container mx-auto bg-black p-4 flex flex-row lg:flex-col items-center overflow-hidden relative mt-0">
      <div className="relative w-full h-56 md:h-96 overflow-hidden rounded-lg flex items-center justify-center">
        {/* Slide Content */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center text-center px-6 transition duration-700 ease-in-out">
          <h2 className="text-2xl md:text-4xl font-bold  text-[#CAD1E9] mb-3">
            {slides[currentIndex].title}
          </h2>
          <p className=" text-[#CAD1E9] text-sm md:text-lg max-w-md">
            {slides[currentIndex].desc}
          </p>
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 p-5">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-[#CAD1E9]"
              }`}
            ></button>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="bg-[linear-gradient(120deg,#090EDB_13.43%,#E73DC4_73.37%)] inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="bg-[linear-gradient(120deg,#090EDB_13.43%,#E73DC4_73.37%)] inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Section4;
