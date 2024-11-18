"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function ModalExample() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS initialisieren
  }, []);

  return (
    <section
      className="max-h-screen py-28 bg-gradient-to-l from-purple-600 to-blue-500 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-950"
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
          Modal
        </h2>
      </div>
      <p
        className="text-center text-gray-100 dark:text-gray-300 dark:drop-shadow-[0_5px_5px_rgba(128,0,128,1)] pt-11 pb-11"
        data-aos="fade-up"
      >
        Add dialogs to your site for light boxes, user notifications, or
        completely custom content.
      </p>
      <div
        className="flex items-center justify-center pt-11"
        data-aos="zoom-in"
      >
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-warning dark:text-gray-600 dark:hover:text-gray-300 hover:btn-accent"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Modal Demo
        </button>
        <dialog id="my_modal_1" className="modal bg-gray-950 bg-opacity-25">
          <div className="modal-box dark:bg-slate-900 dark:text-gray-200">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <button className="btn btn-warning dark:text-gray-600 dark:hover:text-gray-300 hover:btn-accent">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <div className="flex flex-col justify-center items-center mt-11 p-4 text-center min-h-[100px] max-w-[400px] mx-auto">
        <p className="text-gray-200 text-center" data-aos="fade-up">
          If you want to know how it works,
          <a
            href="https://daisyui.com/components/modal/"
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
