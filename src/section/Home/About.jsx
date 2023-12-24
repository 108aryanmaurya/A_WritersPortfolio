import React from "react";
export default function About() {
  return (
    <>
      <div className="my-12 mb-60 max-sm:mt-12 max-sm:my-24 mx-auto">
        <div className="relative ">
          <i className="fa fa-quote-right text-5xl 2xl:text-6xl max-sm:text-3xl mb-16 text-gray-400  dark:text-darkTextPrimary text-center w-full"></i>
          <div className="xl:w-[100%] lg:w-3/4 w-full mx-auto text-center flex flex-row max-md:flex-col justify-evenly items-center">
            <div className="w-auto flex flex-col justify-center items-center">
              <img
                src="https://lh3.googleusercontent.com/pw/ABLVV85D7meutv_6vpScXzib2drsyc0b5iuJzE7qAPhOkZLgAH_9xRt34reh_z5wwCDgQodWfKcO1VDgbqdHywHvr37guFsOMEz_BT5nfv-PK8WK4fN6BsAW_XX3_FVCptCPQdyxtzR3fBtVYPvSAUQnkRAEYw=w685-h913-s-no-gm?authuser=0"
                alt=""
                className="2xl:w-[480px] 2xl:h-[480px]  object-cover object-center w-[400px] h-[400px]"
              />
            </div>
            <div className="w-[50%] max-md:w-full">
              <p className="text-gray-600 font-AGaramondProRegular mb-3 max-lg:px-5 max-sm:px-4 text-2xl 2xl:text-3xl text-center  max-md:text-lg max-sm:text-lg leading-9 2xl:leading-[2.8rem] max-sm:text-justify">
                <span className="text-[34px] max-sm:text-base ml-28 max-sm:ml-0 font-semibold  mr-2 max-sm:mr-1">
                  A.M. Gautam
                </span>
                is an Indian writer from Bangalore with interests in cultural
                commentary, essays, and speculative fiction. He has been
                published in various literary magazines, journals, and
                newspapers in India and elsewhere. In 2022, his work appeared in
                David Davidar’s A Case of Indian Marvels anthology which
                recognized “the country’s finest new writers” and the very next
                year he was published in the The Greatest Indian Stories Ever
                Told alongside literary stars like Premchand,
                RabindranathTagore, Krishna Sobti, and Ruskin Bond. He has twice
                been longlisted for the TFA Award in Creative Writing, and in
                2020 he won the Short Story Prize from Defenestration, where he
                was then invited to serve as a judge for future contests. A.M.
                Gautam’s debut essay collection is forthcoming from The Aleph
                Book Company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
