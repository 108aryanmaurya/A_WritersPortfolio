import React from "react";
import StoryHero from "../section/Story/StoryHero";
import StoryBody from "../section/Story/StoryBody";
import MoreStory from "../section/Story/MoreStory";

const SingleStoryPage = ({ storydata }) => {
  return (
    <div className="bg-slate-300/10">
      <StoryHero></StoryHero>
      <StoryBody storydata={storydata}></StoryBody>
      <MoreStory story={storydata}></MoreStory>
    </div>
  );
};

export default SingleStoryPage;
