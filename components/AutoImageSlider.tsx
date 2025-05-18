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
  interval = 3000,
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
    <div className="relative">
      {/* Image container */}
      <div className="relative overflow-hidden rounded-xl h-[500px]">
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
            />
          </div>
        ))}
      </div>

      {/* Caption */}
      <h3 className="mt-3 text-lg font-medium text-center text-purple-200">
        {images[currentIndex]?.title}
      </h3>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
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
