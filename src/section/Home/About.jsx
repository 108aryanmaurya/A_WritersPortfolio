import React from "react";

export default function About() {
  return (
    <>
      <div className="my-32 max-sm:my-24 mx-auto ">
        <div className="relative flex">
          <div className="xl:w-[50%] lg:w-3/4 w-full mx-auto text-center">
            <i className="fa fa-quote-right text-6xl text-gray-400  dark:text-darkTextPrimary mb-8"></i>
            <p className="text-gray-600 dark:text-darkTextPrimary flex justify-center my-3 max-sm:px-2 text-xl items-center max-md:text-lg max-sm:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus quidem necessitatibus earum magni, esse voluptates
              facere perferendis animi reiciendis est, libero dolores dolor fuga
              quod porro eveniet asperiores cumque voluptate. Animi quia
              laboriosam in nobis hic esse quidem dignissimos obcaecati illum
              beatae! Debitis deleniti quas inventore iure aliquid, dolor ut
              aspernatur beatae, nihil asperiores voluptate. Praesentium
              delectus maxime maiores repudiandae!
            </p>
            <p className="leading-relaxed text-gray-500 text-lg max-lg:text-md text-lightTextMain dark:text-darkTextMain my-10">
              A.M Gautam
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
