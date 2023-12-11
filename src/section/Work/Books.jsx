import React from "react";
import { covers } from "../../components/constants";
import { ArrowRightBlack, Cart, Download } from "../../assets/icons";
import { useNavigate } from "react-router";

const Books = () => {
  const navigate = useNavigate();

  return (
    <article>
      <div className="text-center text-[29px] pb-7 font-[100] font-CooperHevitt   border-black">
        BOOKS
      </div>

      <div className=" flex flex-col justify-center items-center mx-auto ">
        {covers?.map((singleBook) => (
          <div
            className="flex flex-col   mb-[100px] gap-2 justify-center items-center mx-auto"
            key={2}
          >
            <img
              src={singleBook.cover}
              alt=""
              className=" h-full w-[25%]"
              onClick={() => {
                // navigate(`/Book/${singleBook.title}`);
              }}
            />

            <p className="font-serif mt-4 tracking-[2px] text-[30px] font-[300] text-gray-900">
              {singleBook.title}
            </p>
            <div className="text-justify font-montserrat  text-gray-900 w-[40%]">
              {singleBook.description}
            </div>
            <div className="flex gap-7">
              <div
                className=" max-sm:p-1 max-md:mt-6  max-md:m-2   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-sm:text-[14px]   border-black"
                onClick={() => {
                  // navigate(`/Book/${singleBook.title}`);
                }}
              >
                <span>READ MORE</span>
                <img src={ArrowRightBlack} className="w-8 px-1 pl-2" alt="" />
              </div>
              <div className=" max-sm:p-1 max-md:mt-6  max-md:m-2   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-sm:text-[14px]   border-black">
                <span>ORDER NOW</span>
                <img src={Cart} className=" w-7 px-1 pl-2" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Books;
