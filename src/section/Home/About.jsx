import React from "react";

export default function About() {
  return (
    <>
      <div className="my-32 max-sm:mt-12 max-sm:my-24 mx-auto ">
        <div className="relative flex">
          <div className="xl:w-[60%] lg:w-3/4 w-full mx-auto text-center">
            <div className="w-full flex flex-col justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="w-52 h-52 rounded-full"
              />
              <p className="leading-relaxed text-gray-500 text-2xl max-sm:xl max-lg:text-md text-lightTextMain dark:text-darkTextMain my-5 font-Authorfont">
                A.M Gautam
              </p>
            </div>
            <i className="fa fa-quote-right text-6xl max-sm:text-2xl mb-4 text-gray-400  dark:text-darkTextPrimary "></i>
            <p className="text-gray-600 font-montserrat dark:text-darkTextPrimary flex justify-center my-3 max-sm:px-5 max-lg:px-5 text-xl items-center max-md:text-lg max-sm:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus quidem necessitatibus earum magni, esse voluptates
              facere perferendis animi reiciendis est, libero dolores dolor fuga
              quod porro eveniet asperiores cumque voluptate. Animi quia
              laboriosam in nobis hic esse quidem dignissimos obcaecati illum
              beatae! Debitis deleniti quas inventore iure aliquid, dolor ut
              aspernatur beatae, nihil asperiores voluptate. Praesentium
              delectus maxime maiores repudiandae!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
