import React, { useEffect, useState } from "react";
import SingleStoryPage from "../pages/SingleStoryPage";
import { useParams } from "react-router";
import { storyCover } from "../components/constants";

const SingleStoryLayout = () => {
  const { story } = useParams();
  // console.log(book);
  const [cover, setcover] = useState({});

  useEffect(() => {
    setcover(
      storyCover.filter((storycover) => {
        return story === storycover.title.replace(/\s+/g, "-");
      })
    );
    console.log(cover);
  }, [storyCover]);
  return <SingleStoryPage storydata={cover[0]}></SingleStoryPage>;
};

export default SingleStoryLayout;
