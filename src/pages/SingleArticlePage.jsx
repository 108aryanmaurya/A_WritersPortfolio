import React from "react";
import ArticleHero from "../section/Article/ArticleHero";
import ArticleBody from "../section/Article/ArticleBody";

const SingleArticlePage = ({ articledata }) => {
  console.log(articledata);
  return (
    <section>
      <ArticleHero></ArticleHero>
      <ArticleBody articledata={articledata}></ArticleBody>
    </section>
  );
};

export default SingleArticlePage;
