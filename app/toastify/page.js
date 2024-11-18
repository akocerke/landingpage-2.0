"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function ToastifyPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS initialisieren
  }, []);

  // Toastify-Benachrichtigungen für verschiedene Typen
  const notifySuccess = () =>
    toast.success("This is a success toast!", {
      className: "dark:bg-gray-800 dark:text-gray-300",
    });

  const notifyInfo = () =>
    toast.info("This is an info toast!", {
      className: "dark:bg-gray-800 dark:text-gray-300",
    });

  const notifyError = () =>
    toast.error("This is an error toast!", {
      className: "dark:bg-gray-800 dark:text-gray-300",
    });

  const notifyWarning = () =>
    toast.warning("This is a warning toast!", {
      className: "dark:bg-gray-800 dark:text-gray-300",
    });

  return (
    <section className="max-h-screen py-20 bg-gradient-to-l from-purple-600 to-blue-500 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-950">
      {/* Header */}
      <div className="flex items-center justify-center pb-11 shadow-md p-4">
        <div
          data-aos="fade-right"
          className="border-l-4 border-teal-400 h-12 mr-4"
        ></div>
        <h2
          data-aos="fade-left"
          className="text-6xl text-center font-bold text-gray-100 drop-shadow-md dark:drop-shadow-[0_5px_5px_rgba(128,0,128,1)]"
        >
          Toastify
        </h2>
      </div>

      {/* Buttons Grid */}
      <div
        data-aos="zoom-in"
        className="flex justify-center items-center pt-14"
      >
        <div className="w-3/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Success Toast Button */}
          <div className="flex justify-center">
            <button
              onClick={notifySuccess}
              className="text-gray-200 px-6 py-3 shadow-md bg-green-500 rounded hover:bg-green-600 hover:scale-x-110 hover:scale-y-105 transition-transform duration-300"
            >
              Success Toast
            </button>
          </div>

          {/* Info Toast Button */}
          <div className="flex justify-center">
            <button
              onClick={notifyInfo}
              className="text-gray-200 px-6 py-3 shadow-md bg-blue-500 rounded hover:bg-blue-600 hover:scale-x-110 hover:scale-y-105 transition-transform duration-300"
            >
              Info Toast
            </button>
          </div>

          {/* Error Toast Button */}
          <div className="flex justify-center">
            <button
              onClick={notifyError}
              className="text-gray-200 px-6 py-3 shadow-md bg-red-500 rounded hover:bg-red-600 hover:scale-x-110 hover:scale-y-105 transition-transform duration-300"
            >
              Error Toast
            </button>
          </div>

          {/* Warning Toast Button */}
          <div className="flex justify-center">
            <button
              onClick={notifyWarning}
              className="text-gray-200 px-6 py-3 shadow-md bg-yellow-500 rounded hover:bg-yellow-600 hover:scale-x-110 hover:scale-y-105 transition-transform duration-300"
            >
              Warning Toast
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-11 p-4 text-center min-h-[100px] max-w-[400px] mx-auto">
        <p className="text-gray-200 text-center" data-aos="fade-up">
          If you want to know how it works
          <a
            href="https://fkhadra.github.io/react-toastify/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center drop-shadow-md text-gray-300 hover:text-orange-200 hover:scale-110 duration-300 dark:text-gray-400 dark:hover:text-orange-200"
          >
            <AiOutlineQuestionCircle size={24} className="ml-3 mr-2" />
            <span>Read the documentation</span>
          </a>
        </p>
      </div>
    </section>
  );
}
