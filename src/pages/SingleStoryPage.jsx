import React from "react";
import StoryHero from "../section/Story/StoryHero";
import StoryBody from "../section/Story/StoryBody";

const SingleStoryPage = ({ storydata }) => {
  return (
    <div>
      <StoryHero></StoryHero>
      <StoryBody storydata={storydata}></StoryBody>
    </div>
  );
};

export default SingleStoryPage;
