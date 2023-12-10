import React from "react";
import AboutCrousel from "../section/About/AboutCrousel";
import AboutAuthor from "../section/About/AboutAuthor";
import AboutHero from "../section/About/AboutHero";
const About = () => {
  return (
    <>
      <AboutHero></AboutHero>
      <AboutAuthor></AboutAuthor>
      <AboutCrousel></AboutCrousel>
    </>
  );
};

export default About;
