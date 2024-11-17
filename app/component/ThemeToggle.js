"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Importiere die Icons

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light"; // Standardwert: "light"
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // Fügt 'dark' Klasse zum html-Tag hinzu
    } else {
      document.documentElement.classList.remove("dark"); // Entfernt die 'dark' Klasse
    }
    localStorage.setItem("theme", theme); // Speichert das Theme in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="fixed right-4 top-4 sm:right-3 sm:top-3 md:right-5 md:top-5 z-50 bg-transparent">
      {theme === "light" ? (
        <FaSun size={24} className="text-gray-300 hover:text-orange-300" />
      ) : (
        <FaMoon size={24} className="text-gray-300 hover:text-orange-300" />
      )}
    </button>
  );
}
