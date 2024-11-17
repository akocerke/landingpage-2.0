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
      className="z-50 p-2 fixed top-5 left-4 pr-6">
      {theme === "light" ? (
        <FaSun size={24} className="text-gray-300 hover:text-orange-300" />
      ) : (
        <FaMoon size={24} className="text-gray-300 hover:text-orange-300" />
      )}
    </button>
  );
}
