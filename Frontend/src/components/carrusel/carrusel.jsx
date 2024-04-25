"use client";
import { useRef, useState, useEffect } from "react";
import "./carrusel-style.css";
export const Carrusel = () => {
  const sliderRef = useRef(null);
  const sliderIndividualRef = useRef([]);
  const [contador, setContador] = useState(1);
  let width = 0;
  const intervalo = 3000;

  useEffect(() => {
    const slider = sliderRef.current;
    const sliderIndividual = sliderIndividualRef.current;
    if (sliderIndividual.length > 0 && sliderIndividual[0]) {
      width = sliderIndividual[0].clientWidth;

      const resizeHandler = () => {
        width = sliderIndividual[0].clientWidth;
      };

      window.addEventListener("resize", resizeHandler);

      const interval = setInterval(() => {
        slides();
      }, intervalo);

      return () => {
        window.removeEventListener("resize", resizeHandler);
        clearInterval(interval);
      };
    }
  }, [sliderIndividualRef]);

  const slides = () => {
    const slider = sliderRef.current;
    const sliderIndividual = sliderIndividualRef.current;

    slider.style.transform = `translate(${-width * contador}px)`;
    slider.style.transition = "transform .8s";
    setContador((prevContador) => (prevContador + 1) % sliderIndividual.length);
  };
  return (
    <div className="slider-contenedor" ref={sliderRef}>
      {sliderIndividualRef.current.map((section, index) => (
        <div
          key={index}
          className="content-slider"
          ref={(el) => (sliderIndividualRef.current[index] = el)}
        >
          <section>
            <div>
              <h1>Autogestión</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                illum ducimus odit sapiente similique? Debitis corrupti harum
                rerum? Eum amet rerum quisquam quos quaerat harum, veniam quas
                commodi possimus quibusdam?
              </p>
            </div>
            <div>
              <img src="/images/Vector.svg" alt="vector" />
            </div>
          </section>

          <section>
            <div>
              <h1>Chat / Videollamada</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                illum ducimus odit sapiente similique? Debitis corrupti harum
                rerum? Eum amet rerum quisquam quos quaerat harum, veniam quas
                commodi possimus quibusdam?
              </p>
            </div>
            <div>
              <img src="/images/Vector.svg" alt="vector" />
            </div>
          </section>

          <section>
            <div>
              <h1>Historial</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                illum ducimus odit sapiente similique? Debitis corrupti harum
                rerum? Eum amet rerum quisquam quos quaerat harum, veniam quas
                commodi possimus quibusdam?
              </p>
            </div>
            <div>
              <img src="/images/Vector.svg" alt="vector" />
            </div>
          </section>
          <div className="button">
            <button>-</button> <button>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
