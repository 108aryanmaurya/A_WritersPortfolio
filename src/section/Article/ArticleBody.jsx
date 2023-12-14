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
    <section>
      <div className="flex w-[60%] max-md:w-[90%] mx-auto flex-col  justify-center mt-10 items-center max-md:leading-4">
        <div
          className="
       font-Gamiliademo    text-[45px] max-md:text-[30px] max-md:leading-9 "
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <div className="box-border ">
          <div
            key={index}
            className=" break-inside-avoid mt-5 font-palanquin max-md:text-[11.5px] max-md:leading-3 flex relative justify-between text-justify"
          >
            <div className="w-[48%]">
              {articleslice[0]}
              <div className="">
                {/* <img src={Articlehero} className="h-full mt-1" alt="" /> */}
              </div>
            </div>
            <div className="w-[48%]">
              <div className="">
                <img src={article3} className="h-full" alt="" />
              </div>
              <div className="mt-1">{articleslice[1]}</div>
            </div>
          </div>

          {articleslice?.map((art) => {
            if (index <= articleslice.length) {
              return (
                <div
                  key={index}
                  className="break-inside-avoid mt-5 font-palanquin max-md:text-[11px] max-md:leading-3 flex relative justify-between text-justify"
                >
                  <div className="w-[48%]">{articleslice[index++]}</div>
                  <div className="w-[48%]">{articleslice[index++]}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ArticleBody;
