"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaAngleDown } from "react-icons/fa";


export default function AccordionExample() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS initialisieren
  }, []);

  // Dynamisches Array für Accordion Items
 const items = [
    {
      uuid: 1,
      heading: "What harsh truths do you prefer to ignore?",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat.",
    },
    {
      uuid: 2,
      heading: "Is free will real or just an illusion?",
      content:
        "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse.",
    },
    {
      uuid: 3,
      heading: "What can you do today that you were not capable of a year ago?",
      content:
        "Dolor sit amet, consectetur adipiscing elit. Nullam vehicula, urna at pulvinar consequat, risus justo pellentesque risus.",
    },
  ];

  return (
    <section
      id="features"
      className="h-auto overflow-hidden py-28 bg-gradient-to-l from-purple-600 to-blue-500 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-950"
    >
      {/* Header mit Border */}
      <div className="flex items-center justify-center pb-11 shadow-md p-4">
        <div
          data-aos="fade-right"
          className="border-l-4 border-teal-400 h-12 mr-4"
        ></div>{" "}
        {/* Höhe anpassen */}
        <h2
          data-aos="fade-left"
          className="text-center text-6xl font-bold text-gray-100 drop-shadow-md dark:drop-shadow-[0_5px_5px_rgba(128,0,128,1)]"
        >
          Accordion Demo
        </h2>
      </div>
      <p
        className="text-center text-gray-100 dark:text-gray-300 dark:drop-shadow-[0_5px_5px_rgba(128,0,128,1)] pt-11"
        data-aos="fade-up"
      >
        React Component for creating an Accordion.
      </p>
      <div data-aos="zoom-in" className="max-w-[500px] mx-auto p-4">
      <Accordion allowZeroExpanded className="space-y-4">
      {items.map((item) => (
        <AccordionItem key={item.uuid} className="shadow-lg rounded-lg border border-gray-300 dark:border-gray-700">
          {/* Header */}
          <AccordionItemHeading className="font-semibold">
            <AccordionItemButton className="flex rounded-md justify-between items-center p-4 w-full dark:from-purple-800 dark:to-blue-900 dark:hover:from-purple-500 dark:hover:to-blue-500 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 rounded-t-lg focus:outline-none duration-300">
              <span>{item.heading}</span>
              <FaAngleDown className="transition-transform duration-200 ease-in-out group-open:rotate-180" />
            </AccordionItemButton>
          </AccordionItemHeading>

          {/* Panel */}
          <AccordionItemPanel className="p-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-b-lg transition-all duration-300 ease-in-out">
            {item.content}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
      </div>

      <div className="flex flex-col justify-center items-center pt-6 p-4 text-center min-h-[100px] max-w-[400px] mx-auto">
        <p className="text-gray-200 text-center" data-aos="fade-up">
          If you want to know how it works,
          <a
            href="https://www.npmjs.com/package/react-accessible-accordion"
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
