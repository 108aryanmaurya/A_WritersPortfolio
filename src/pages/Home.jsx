import React from "react";
import Hero from "../section/Home/Hero";
import About from "../section/Home/About";
import MoreContent from "../section/Home/MoreContent";
import Newsletter from "../section/Home/Newsletter";
import Contact from "../section/Contact/ContactForm";
export default function Home() {
  return (
    <>
      <div className="grid">
        <Hero />
      </div>
      <About />
      <MoreContent />
      <Newsletter />
    </>
  );
}
