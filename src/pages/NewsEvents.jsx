import React from "react";
import { campaign1, campaign2 } from "../assets/images";
import { ArrowRightBlack } from "../assets/icons";
import Hero from "../section/NewsEvents/Hero";
import Cards from "../section/NewsEvents/Cards";
export default function NewsEvents() {
  return (
    <section>
      <div className="grid">
        <Hero />
      </div>
      <Cards />
    </section>
  );
}
