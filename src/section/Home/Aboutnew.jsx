import React from "react";
import { newAMGautam } from "../../assets/images";
import "./newAbout.css";
const Aboutnew = () => {
  return (
    <div className="pl-20 bg-slate-100 pr-48 ">
      <div className=" imgWrap w-[650px] z-30  float-left  ">
        <img src={newAMGautam} alt="" className="z-50" />
      </div>
      <div className=" text-justify font-TimesNewRoman ml-72 py-16 text-[22px]">
        <span className="text-[27px]  2xl:text-[29px] text-black max-sm:text-xl ml-28 max-sm:ml-0 font-semibold  mr-2 max-sm:mr-2">
          A.M. Gautam
        </span>
        is an Indian writer from Bangalore with interests in cultural
        commentary, essays, and speculative fiction. He has been published in
        various literary magazines, journals, and newspapers in India and
        elsewhere. In 2022, his work appeared in David Davidar’s A Case of
        Indian Marvels anthology which recognized “the country’s finest new
        writers” and the very next year he was published in the The Greatest
        Indian Stories Ever Told alongside literary stars like Premchand,
        RabindranathTagore, Krishna Sobti, and Ruskin Bond. He has twice been
        longlisted for the TFA Award in Creative Writing, and in 2020 he won the
        Short Story Prize from Defenestration, where he was then invited to
        serve as a judge for future contests. A.M. Gautam’s debut essay
        collection is forthcoming from The Aleph Book Company.
      </div>

      <div className="bg-slate-200   max-lg:hidden h-28  w-28 right-10 rounded-full  absolute  "></div>
      <div className="bg-slate-200 h-72 top-36 w-72 max-lg:hidden  rounded-full  absolute  left-72 "></div>
      <div className="bg-slate-200 h-48 top-[400px] w-48 max-lg:hidden  rounded-full  absolute  right-20 "></div>
    </div>
  );
};

export default Aboutnew;
