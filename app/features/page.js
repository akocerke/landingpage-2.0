"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS initialisieren
  }, []);

  return (
    <section
      id="features"
      className="py-28 bg-gradient-to-l from-purple-600 to-blue-500 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-950"
    >
      {/* Header mit Border */}
      <div className="flex items-center justify-center pb-11 shadow-md">
        <div
          data-aos="fade-right"
          className="border-l-4 border-teal-400 h-12 mr-4"
        ></div>{" "}
        {/* Höhe anpassen */}
        <h2
          data-aos="fade-left"
          className="text-6xl font-bold text-gray-100 drop-shadow-md dark:drop-shadow-[0_5px_5px_rgba(128,0,128,1)]"
        >
          Features
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-wrap justify-center items-center gap-8 pt-11">
        <div
          data-aos="zoom-in"
          className="bg-gray-100 dark:bg-slate-800 dark:text-gray-200 p-6 rounded shadow-lg text-center dark:border dark:border-teal-400"
        >
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">
            Responsive Design
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Beautiful on any device.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="bg-gray-100 p-6 rounded shadow-lg text-center dark:bg-slate-800 dark:border dark:border-teal-400"
        >
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">
            Dark/Light Mode
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Switch themes seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
}
