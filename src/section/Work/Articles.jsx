import { articles } from "../../components/constants";
import ArticleCard from "../../components/ArticleCard";

const Article = () => {
  return (
    <section className=" max-md:py-1 max-md:mt-5 py-2  mt-10">
      <div className=" text-center text-[29px] my-12 max-md:my-2 font-[100] font-CooperHevitt">
        ARTICLE
      </div>
      <div className="px-36  flex flex-col  justify-center my-7 max-md:my-6 max-md:ml-0 max-md:px-3   max-md:mx-4 max-md:gap-9 gap-14">
        {articles.map((art) => (
          <ArticleCard key={3} art={art}></ArticleCard>
        ))}
      </div>
    </section>
  );
};

export default Article;
