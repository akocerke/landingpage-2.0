"use client";
import Hero from "./component/Hero";
import Features from "./features/page";
import PageToTopButton from "./component/PageToTopButton";

export default function Home() {
  return (
    <>
    <PageToTopButton/>
    <Hero />
    <Features/>
    
    </>
    
  );
}
