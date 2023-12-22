import React, { useEffect, useState } from "react";
import { articles } from "../../components/constants";
import ArticleCard from "../../components/ArticleCard";

const MoreArticle = ({ article }) => {
  const [moreArticle, setmoreArticle] = useState([]);

  useEffect(() => {
    setmoreArticle(
      articles.filter((art) => {
        return article?.title !== art?.title;
      })
    );
  }, [article]);

  return (
    <section className="mb-20 max-md:mb-10 ">
      <div className=" text-center text-[26px] max-md:text-[20px] mb-10  max-md:mb-3 max-md:my-6 font-[100] uppercase font-CooperHevitt">
        more short stories
      </div>
      <div className="px-36  flex flex-col  justify-center my-7 max-md:my-6 max-md:ml-0 max-md:px-3   max-md:mx-4 max-md:gap-9 gap-14 ">
        {moreArticle?.map((ind) => {
          return <ArticleCard key={2} art={ind}></ArticleCard>;
        })}
      </div>
    </section>
  );
};

export default MoreArticle;
