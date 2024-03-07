import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import your Mini CSS styles for the carousel

const Carousel = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide data, each containing an image URL, title, and description
  const slides = [
    {
      imageUrl:
        "https://cdn.wccftech.com/wp-content/uploads/2022/11/GPU-Intel-NVIDIA-AMD-low_res-scale-4_00x-scaled.jpg",
      title: "Welcome To This Website",
      description: "Look at The List Of Nvidia, AMD, and Intel Gpu's",
    },
    {
      imageUrl:
        "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/40-series/geforce-40-series-super-family-1024-t@2x.jpg",
      title: "Nvidia Geforce RTX GPU",
      description: "List With Variety Of RTX Cards 40, 30, and 20 Series",
    },
    {
      imageUrl:
        "https://cdn.videocardz.com/1/2023/08/AMD-RADEON-7000-GPU-SERIES.jpg",
      title: "AMD Radeon RX GPU",
      description: "Currently We Got The List Of The AMD RX 7000 Series",
    },
    {
      imageUrl:
        "https://www.cyberpowersystem.co.uk/template/2022/page/Intel/ARCASeriesGraphics/images/c1.jpg?v1",
      title: "Intel ARC GPU",
      description: "Search For The Newly Released Intel ARC Gpu's",
    },
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Automatically move to the next slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="content"
          >
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <div className="controls">
        <button onClick={prevSlide}>&#10094;</button>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="indicators">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
