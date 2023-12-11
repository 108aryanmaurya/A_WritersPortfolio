import React from "react";
import AboutCrousel from "../section/About/AboutCrousel";
import AboutAuthor from "../section/About/AboutAuthor";
import AboutHero from "../section/About/AboutHero";
import WritingJourney from "../section/About/WritingJourney";
const About = () => {
  return (
    <>
      <AboutHero></AboutHero>
      <AboutAuthor></AboutAuthor>
      <WritingJourney></WritingJourney>
      <AboutCrousel></AboutCrousel>
    </>
  );
};

export default About;
