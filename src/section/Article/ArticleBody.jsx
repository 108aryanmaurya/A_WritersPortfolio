import React, { useEffect, useState } from "react";
import { Articlehero, article2, article3 } from "../../assets/images";
import { singleArticle } from "../../components/constants";
import DOMPurify from "dompurify";

const ArticleBody = ({ articledata }) => {
  console.log(articledata);
  //   const [index, setindex] = useState(0);
  // const [articleslice, setarticleslice] = useState([]);
  // let index = 2;
  // let arr = [];
  // useEffect(() => {
  //   const func = () => {
  //     console.log(singleArticle[0].description.length);
  //     let k = 0;
  //     for (let i = 0; i < singleArticle[0]?.description?.length; i++) {
  //       if (
  //         (singleArticle[0]?.description.charAt(i) == "." ||
  //           singleArticle[0]?.description.charAt(i) == " ") &&
  //         i - k >= 1200
  //       ) {
  //         console.log(k);
  //         console.log(i);
  //         console.log(singleArticle[0]?.description?.charAt(i));
  //         if (arr.length == 1) {
  //           arr.push(singleArticle[0]?.description?.substring(k, i - 300));
  //           i = i - 300;
  //         } else {
  //           arr.push(singleArticle[0]?.description?.substring(k, i));
  //         }
  //         console.log(arr[arr.length - 1].length);

  //         // setarticleslice((prevSlice) => [
  //         //   ...prevSlice,
  //         //   singleArticle[0]?.description?.substring(k, i),
  //         // ]);

  //         setarticleslice(arr);

  //         k = i;
  //       }
  //     }
  //   };
  //   func();
  //   console.log(arr.length);
  //   console.log(articleslice);
  // }, [singleArticle[0]]);

  // useEffect(() => {
  //   // setarticleslice(arr);
  // }, [arr]);

  return (
    <div className="relative max-md:w-full w-[90%] mx-auto p-16 max-sm:p-0 max-md:mt-8   justify-center items-center">
      <div
        className="
font-Gamiliademo  w-[80%] max-md:w-[90%] mx-auto  text-[45px] max-md:text-[30px] max-md:leading-9 "
      >
        {articledata?.title}
      </div>

      <div className="mt-10 w-[100%]  max-md:p-4  p-10  bg-white ">
        <div className="float-left ">
          <img
            src={article2}
            alt="person"
            className=" pb-1 pr-6  z-10 max-md:pr-2 max-md:pb-[1px]    max-md:w-[200px] w-[600px]  "
          />
        </div>

        <div
          className="text-[16px]   text-justify max-lg:w-[100%] max-md:w-[100%]  max-md:leading-[18px] max-md:text-[13px]  font-montserrat          "
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(articledata?.description),
          }}
        ></div>
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
