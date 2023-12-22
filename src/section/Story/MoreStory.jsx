import React, { useEffect, useState } from "react";
import { storyCover } from "../../components/constants";
import StoryCard from "../../components/StoryCard";

const MoreStory = ({ story }) => {
  const [moreStory, setmoreStory] = useState([]);

  useEffect(() => {
    setmoreStory(
      storyCover.filter((str) => {
        return story.title !== str.title;
      })
    );
  }, [storyCover, story]);

  return (
    <section className="mb-20 max-md:mb-10 ">
      <div className=" text-center text-[26px] max-md:text-[20px] mb-10  max-md:mb-3 max-md:my-6 font-[100] uppercase font-CooperHevitt">
        more short stories
      </div>
      <div className=" max-md:grid  max-md:grid-cols-2 grid-flow-row  flex  gap-x-10 max-md:mx-4 max-md:gap-x-10   max-md:gap-y-10 gap-y-10 my-10 max-md:my-6 justify-center ">
        {moreStory?.map((ind) => {
          return <StoryCard key={2} ind={ind}></StoryCard>;
        })}
      </div>
    </section>
  );
};

export default MoreStory;
