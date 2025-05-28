"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SliderImage {
  src: string;
  alt: string;
  title: string;
}

interface AutoImageSliderProps {
  images: SliderImage[];
  interval?: number; // Time in milliseconds between auto transitions
}

export function AutoImageSlider({
  images,
  interval = 5000,
}: AutoImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change image effect
  useEffect(() => {
    if (images.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images.length) return null;

  return (
    <div className="relative w-full">
      {/* Image container */}
      <div className="relative overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-md">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>
          </div>
        ))}

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-center text-white">
            {images[currentIndex]?.title}
          </h3>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 md:mt-6 gap-2 px-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
              index === currentIndex
                ? "bg-purple-500 scale-110"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
