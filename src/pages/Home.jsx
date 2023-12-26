import React from "react";
import Hero from "../section/NewsEvents/Hero";
import About from "../section/Home/About";
import MoreContent from "../section/Home/MoreContent";
import Newsletter from "../section/Home/Newsletter";
import HomeHero from "../section/Home/HomeHero";
import Aboutnew from "../section/Home/Aboutnew";
import ShowOption from "../section/Home/ShowOption";

export default function Home() {
  return (
    <>
      {/* <Aboutnew></Aboutnew> */}
      <About />
      <Newsletter />
      <HomeHero />
      <ShowOption></ShowOption>
      <MoreContent />
    </>
  );
}
