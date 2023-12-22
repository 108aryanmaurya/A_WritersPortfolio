import React from "react";
import ArticleHero from "../section/Article/ArticleHero";
import ArticleBody from "../section/Article/ArticleBody";
import MoreArticle from "../section/Article/MoreArticle";

const SingleArticlePage = ({ articledata }) => {
  console.log(articledata);
  return (
    <section>
      <ArticleHero></ArticleHero>
      <ArticleBody articledata={articledata}></ArticleBody>
      <MoreArticle article={articledata}></MoreArticle>
    </section>
  );
};

export default SingleArticlePage;
