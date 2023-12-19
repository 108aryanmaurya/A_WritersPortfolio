import React, { useEffect, useState } from "react";
import SingleArticlePage from "../pages/SingleArticlePage";
import { useParams } from "react-router";
import { articles } from "../components/constants";

const SingleArticleLayout = () => {
  const { article } = useParams();
  console.log(article);
  const [cover, setcover] = useState({});

  useEffect(() => {
    setcover(
      articles.filter((art) => {
        return article === art.title.replace(/\s+/g, "-");
      })
    );

    console.log(cover);
  }, [articles]);
  console.log(cover);

  return <SingleArticlePage articledata={cover[0]}></SingleArticlePage>;
};

export default SingleArticleLayout;
