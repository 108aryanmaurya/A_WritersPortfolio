import React, { useEffect, useState } from "react";
import { Download } from "../assets/icons";
import { Aboutimg, cover1 } from "../assets/images";
import { covers } from "../components/constants";
import BookHero from "../section/Book/BookHero";
import AboutBook from "../section/Book/AboutBook";
import BookSynopsis from "../section/Book/BookSynopsis";
import BookDownload from "../section/Book/BookDownload";
import Testimonials from "../section/Book/Testimonials";

const SingleBookPage = ({ bookdetails }) => {
  return (
    <section className="">
      <BookHero bookdetails={bookdetails}></BookHero>
      <AboutBook></AboutBook>
      <BookSynopsis></BookSynopsis>
      <BookDownload></BookDownload>
      <Testimonials></Testimonials>
      {/* <div className=" max-sm:p-1 max-md:mt-6  max-md:m-2   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-sm:text-[14px]   border-black">
        <span>GET A SAMPLE</span>
        <img src={Download} className="w-8 px-1 pl-2" alt="" />
      </div> */}
    </section>
  );
};

export default SingleBookPage;
