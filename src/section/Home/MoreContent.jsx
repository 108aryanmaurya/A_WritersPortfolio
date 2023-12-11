import React from "react";

const cardData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
  },
];

export default function MoreContent() {
  return (
    <>
      <div className="bg-gray-900 my-10 py-24 px-12 max-sm:px-8">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="max-sm:tracking-[6px] max-sm:text-[27px] tracking-[6px] font-semibold text-[40px] text-[#FAF8F0] font-Oswald textce uppercase">
            Reads By A.M Gautam
          </h2>
        </div>
        <div className="flex justify-center flex-wrap max-sm:flex-col items-center">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col m-10 max-sm:m-2 max-sm:justify-center max-sm:items-center max-sm:pb-10 max-w-[350px]"
            >
              <img
                alt="Art"
                src={card.image}
                className="h-64 w-64 object-cover"
              />

              <h3 className="mt-4 text-lg font-bold text-white sm:text-xl font-Authorfont">
                {card.title}
              </h3>

              <p className="mt-2 max-w-sm text-gray-200 max-sm:text-center  font-montserrat ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
