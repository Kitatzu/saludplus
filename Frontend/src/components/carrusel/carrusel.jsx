"use client"
import { useState, useEffect } from 'react';
import './carrusel-style.css'; // Importamos el archivo de estilos

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Autogestión",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      imageUrl: "/images/ilustracion.png"
    },
    {
      title: "Chat / Videollamada",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      imageUrl: "/images/ilustracion.png"
    },
    {
      title: "Historial",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      imageUrl: "/images/ilustracion.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia el valor para ajustar la velocidad del carrusel

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="carousel">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <img src={slide.imageUrl} alt="Slide" />
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;

