"use client";
import Hero from "./component/Hero";
import Features from "./features/page";
import PageToTopButton from "./component/PageToTopButton";
import ToastifyPage from "./toastify/page";

export default function Home() {
  return (
    <>
    <PageToTopButton/>
    <Hero />
    <Features/>
    <ToastifyPage/>
    
    </>
    
  );
}
