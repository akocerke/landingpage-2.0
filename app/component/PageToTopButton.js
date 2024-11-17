"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Verwenden des React-Icons

export default function PageToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Überwacht das Scrollen und zeigt den Button, wenn der Benutzer nach unten scrollt
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Button anzeigen, wenn mehr als 500px gescrollt
      } else {
        setIsVisible(false); // Button ausblenden, wenn weniger als 500px gescrollt
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup-Funktion beim Verlassen der Komponente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Funktion, um zum Seitenanfang zu scrollen
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // sanftes Scrollen
    });
  };

  return (
    // Der Button wird nur gerendert, wenn der isVisible-Status wahr ist
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-purple-400 bg-opacity-35 text-white shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110`}
      >
        <FaArrowUp size={24} />
      </button>
    )
  );
}
