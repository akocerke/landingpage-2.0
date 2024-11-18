"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "react-scroll";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialisiert AOS mit einer Dauer von 1 Sekunde
  }, []);
  return (
    <section className="h-screen flex flex-col items-center justify-center text-gray-200 bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-950 dark:text-gray-300 p-2">
      <div>
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          className="drop-shadow-md dark:drop-shadow-[0_5px_5px_rgba(128,0,128,1)]  text-center text-6xl font-bold transition-transform duration-300"
        >
          Welcome to the Future
        </h1>
        <p
          data-aos="fade-up"
          className="text-lg mb-8 pt-6 drop-shadow-md dark:drop-shadow-[0_5px_5px_rgba(128,0,128,1)] text-center"
        >
          Explore the best of React, DaisyUI and Tailwind magic.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-offset="200" className="pt-14">
        <Button
          to={"features"}
          smooth={true}
          duration={1000}
          className="px-6 py-3 shadow-md  bg-purple-700 rounded hover:bg-purple-900 hover:scale-x-110 hover:scale-y-105 transition-transform duration-300 hover:cursor-pointer"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
