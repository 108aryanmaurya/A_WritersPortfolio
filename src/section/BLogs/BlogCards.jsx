import React from "react";
import { ArrowRightBlack } from "../../assets/icons";

export default function BlogCards() {
  const blogs = [
    {
      title: "The Twin towers",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum suscipit doloremque, expedita voluptatum maiores corporis modi assumenda esse consectetur error nulla, vero alias.",
      imageSrc:
        "https://images.unsplash.com/photo-1445966275305-9806327ea2b5?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=14a02fab1200216368d682ecaa91e540",
    },
    {
      title: "Looking for alaska",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum suscipit doloremque, expedita voluptatum maiores corporis modi assumenda esse consectetur error nulla, vero alias.",
      imageSrc:
        "https://images.unsplash.com/photo-1445966275305-9806327ea2b5?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=14a02fab1200216368d682ecaa91e540",
    },
    // Add more blog entries as needed
  ];

  return (
    <>
      <div className="flex gap-16 max-md:gap-10 max-sm:gap-7 flex-col px-32 max-sm:px-0 mt-5 max-md:mt-0">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`flex max-md:flex-col ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="relative max-h-[700px]">
              <img
                src={blog.imageSrc}
                className="max-w-full max-h-[700px] object-cover object-center"
                alt=""
              />
            </div>

            <div className="px-8 pb-8 max-md:p-8 max-sm:pt-4">
              <h1 className="pb-2 max-sm:pb-2 text-4xl relative font-Gamiliademo capitalize">
                {blog.title}
              </h1>
              <p className="mb-4 font-montserrat">{blog.content}</p>
              <div className="max-sm:p-1 max-md:mt-2  max-md:m-0   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-md:gap-1 max-sm:text-[14px]   border-black">
                <span>READ MORE</span>
                <img
                  src={ArrowRightBlack}
                  className="w-8 px-1 max-md:pl-0 max-md:w-5 max-md:px-0 pl-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
