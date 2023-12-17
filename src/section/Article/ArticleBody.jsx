import React, { useEffect, useState } from "react";
import { Articlehero, article2, article3 } from "../../assets/images";
import { singleArticle } from "../../components/constants";

const ArticleBody = () => {
  //   const [index, setindex] = useState(0);
  const [articleslice, setarticleslice] = useState([]);
  let index = 2;
  let arr = [];
  useEffect(() => {
    const func = () => {
      console.log(singleArticle[0].description.length);
      let k = 0;
      for (let i = 0; i < singleArticle[0]?.description?.length; i++) {
        if (
          (singleArticle[0]?.description.charAt(i) == "." ||
            singleArticle[0]?.description.charAt(i) == " ") &&
          i - k >= 1200
        ) {
          console.log(k);
          console.log(i);
          console.log(singleArticle[0]?.description?.charAt(i));
          if (arr.length == 1) {
            arr.push(singleArticle[0]?.description?.substring(k, i - 300));
            i = i - 300;
          } else {
            arr.push(singleArticle[0]?.description?.substring(k, i));
          }
          console.log(arr[arr.length - 1].length);

          // setarticleslice((prevSlice) => [
          //   ...prevSlice,
          //   singleArticle[0]?.description?.substring(k, i),
          // ]);

          setarticleslice(arr);

          k = i;
        }
      }
    };
    func();
    console.log(arr.length);
    console.log(articleslice);
  }, [singleArticle[0]]);

  useEffect(() => {
    // setarticleslice(arr);
  }, [arr]);

  return (
    <div className="relative  w-[80%] mx-auto p-16 max-sm:p-0 max-md:mt-8  max-sm:ml-4  justify-center items-center">
      <div
        className="
font-Gamiliademo  w-[75%] mx-auto  text-[45px] max-md:text-[30px] max-md:leading-9 "
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <div className="mt-10 p-5  bg-white ">
        <div className="float-left ">
          <img
            src={article3}
            alt="person"
            className=" pb-1 pr-6 z-10 max-sm:pr-2 max-sm:pb-1 max-xl:h-[550px] max-lg:h-[500px] max-md:h-[400px]  max-sm:h-[260px] h-[600px]  "
          />
        </div>

        <div className="text-[18px]   text-justify max-lg:w-[80%] max-md:w-[80%] max-sm:w-[85%] max-sm:p-2 max-sm:leading-[17px] max-md:text-[16px] max-sm:text-[15px] font-montserrat   max-sm:ml-8 max-sm:mt-14    max-sm:pt-5   ">
          <span className="text-[35px]  ml-3 mr-1 font-serif ">L</span>
          {singleArticle[0].description}
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;

// <div className="box-border ">
// <div
//   key={index}
//   className=" break-inside-avoid mt-5 font-palanquin max-md:text-[11.5px] max-md:leading-3 flex relative justify-between text-justify"
// >
//   <div className="w-[48%]">
//     {articleslice[0]}
//     <div className="">
//       {/* <img src={Articlehero} className="h-full mt-1" alt="" /> */}
//     </div>
//   </div>
//   <div className="w-[48%]">
//     <div className="">
//       <img src={article3} className="h-full" alt="" />
//     </div>
//     <div className="mt-1">{articleslice[1]}</div>
//   </div>
// </div>

// {articleslice?.map((art) => {
//   if (index <= articleslice.length) {
//     return (
//       <div
//         key={index}
//         className="break-inside-avoid mt-5 font-palanquin max-md:text-[11px] max-md:leading-3 flex relative justify-between text-justify"
//       >
//         <div className="w-[48%]">{articleslice[index++]}</div>
//         <div className="w-[48%]">{articleslice[index++]}</div>
//       </div>
//     );
//   }
// })}

// </div>
