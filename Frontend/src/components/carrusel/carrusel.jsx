"use client"
import { useState, useEffect } from 'react';
import './carrusel-style.css'; // Importamos el archivo de estilos

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Autogestión",
      description: "Nuestro servicio de autogestión le permite programar sus propios turnos médicos de manera rápida y sencilla, sin necesidad de esperas ni llamadas telefónicas.",
      imageUrl: "/images/autogestion.png"
    },
    {
      title: "Chat y Videollamadas",
      description: "Con nuestras videollamadas médicas, puede consultar a un profesional de la salud desde la comodidad de su hogar, recibiendo atención personalizada sin la necesidad de desplazarse.",
      imageUrl: "/images/Videollamadas.png"
    },
    {
      title: "Historial",
      description: "Acceda fácilmente a su historial clínico en línea, manteniendo un registro completo de sus consultas pasadas, tratamientos y resultados de exámenes, todo disponible con solo unos clics.",
      imageUrl: "/images/Historial.png"
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
    }, 5000); // Cambia el valor para ajustar la velocidad del carrusel

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
