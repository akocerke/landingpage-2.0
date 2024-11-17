"use client";
import Hero from "./component/Hero";
import Features from "./features/page";
import PageToTopButton from "./component/PageToTopButton";
import ToastifyPage from "./toastify/page";
import ThemeToggle from "./component/ThemeToggle";


export default function Home() {
  return (
    <>
    
    <ThemeToggle />
    <PageToTopButton/>
    <Hero />
    <Features/>
    <ToastifyPage/>
    
    </>
    
  );
}
