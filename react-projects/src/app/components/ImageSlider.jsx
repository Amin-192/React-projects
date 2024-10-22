'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'

export default function ImageSlider() {
  // Array of images
  const images = [image1, image2, image3];

  // State to track the current image index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  // Function to move to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  // Auto-slide functionality (every 3 seconds)
  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(slideInterval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="relative w-[300px] h-[200px] mx-auto">
      {/* Display the current image */}
      <Image
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        width={300}
        height={200}
        style={{ objectFit: 'cover' }}
      />

      {/* Previous button (inside the image) */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold bg-black bg-opacity-50 p-2 rounded hover:bg-opacity-75"
      >
        &#10094; {/* Left Arrow */}
      </button>

      {/* Next button (inside the image) */}
      <button
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold bg-black bg-opacity-50 p-2 rounded hover:bg-opacity-75"
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
}