import React from "react";

export default function About() {
  return (
    <>
      <div className="my-28 max-sm:mt-12 max-sm:my-24 mx-auto ">
        <div className="relative flex">
          <div className="xl:w-[60%] lg:w-3/4 w-full mx-auto text-center">
            <div className="w-full flex flex-col justify-center items-center">
              <img
                src="https://lh3.googleusercontent.com/pw/ABLVV85D7meutv_6vpScXzib2drsyc0b5iuJzE7qAPhOkZLgAH_9xRt34reh_z5wwCDgQodWfKcO1VDgbqdHywHvr37guFsOMEz_BT5nfv-PK8WK4fN6BsAW_XX3_FVCptCPQdyxtzR3fBtVYPvSAUQnkRAEYw=w685-h913-s-no-gm?authuser=0"
                alt=""
                className="2xl:w-56 2xl:h-56  object-cover object-top w-52 h-52 rounded-full"
              />
            </div>
            <i className="fa fa-quote-right text-6xl max-sm:text-3xl my-5 text-gray-400  dark:text-darkTextPrimary "></i>
            <p className="text-gray-600 font-montserrat dark:text-darkTextPrimary mb-3 max-lg:px-5 max-sm:px-4 text-xl 2xl:text-2xl text-center max-sm:text-justify max-md:text-lg max-sm:text-base">
              <span className="text-[25px] max-sm:text-lg ml-28 font-[500]  ">
                A.M. Gautam{" "}
              </span>
              is an Indian writer from Bangalore with interests in cultural
              commentary, essays, and speculative fiction. He has been published
              in various literary magazines, journals, and newspapers in India
              and elsewhere. In 2022, his work appeared in David Davidar’s A
              Case of Indian Marvels anthology which recognized “the country’s
              finest new writers” and the very next year he was published in the
              The Greatest Indian Stories Ever Told alongside literary stars
              like Premchand, RabindranathTagore, Krishna Sobti, and Ruskin
              Bond. He has twice been longlisted for the TFA Award in Creative
              Writing, and in 2020 he won the Short Story Prize from
              Defenestration, where he was then invited to serve as a judge for
              future contests. A.M. Gautam’s debut essay collection is
              forthcoming from The Aleph Book Company.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
