"use client";
import Hero from "./component/Hero";
import Features from "./features/page";
import PageToTopButton from "./component/PageToTopButton";
import ToastifyPage from "./toastify/page";
import ThemeToggle from "./component/ThemeToggle";
import ModalExample from "./modal/page";
import AccordionExample from "./accordion/page";

export default function Home() {
  return (
    <>
    
    <ThemeToggle />
    <PageToTopButton/>
    <Hero />
    <Features/>
    <ToastifyPage/>
    <ModalExample/>
    <AccordionExample/>
    
    </>
    
  );
}
