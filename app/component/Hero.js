"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialisiert AOS mit einer Dauer von 1 Sekunde
  }, []);
  return (
    <section className="h-screen flex flex-col items-center justify-center text-gray-200 bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-950 dark:text-gray-300">
  <div>
    <h1
      data-aos="fade-up"
      data-aos-offset="200"
      className="drop-shadow-md dark:drop-shadow-[0_5px_5px_rgba(128,0,128,1)]  text-center text-6xl font-bold transition-transform duration-300"
    >
      Welcome to my Page
    </h1>
  </div>
  <div data-aos="fade-up" data-aos-offset="200" className="pt-14">
    <button className="px-6 py-3 shadow-md  bg-purple-700 rounded hover:bg-purple-900 hover:scale-x-110 hover:scale-y-110 transition">
      Get Started
    </button>
  </div>
</section>

  );
}
