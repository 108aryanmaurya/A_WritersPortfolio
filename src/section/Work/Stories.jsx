import { storyCover } from "../../components/constants";
import StoryCard from "../../components/StoryCard";
import StoryCardnew from "../../components/StoryCardnew";

const Stories = ({ StoryData }) => {
  return (
    <section className="flex relative flex-col my-44 mb-20 max-md:mb-0 max-md:my-12  items-center justify-center">
      {/* <div className="text-center text-[29px] pt-4 max-md:text-[23px] max-md:pb-3 pb-7 font-[100] font-CooperHevitt   border-black">
        SHORT STORIES
      </div>
      <div className=" grid grid-cols-3 max-md:grid-cols-2  gap-x-24 max-md:w-[90%] max-md:gap-x-10 max-md:gap-y-16 gap-y-20 my-10 max-md:my-6 justify-center ">
        {StoryData?.map((ind) => {
          return <StoryCard key={2} ind={ind}></StoryCard>;
        })}

        <div className="bg-slate-200 -z-50 max-lg:hidden h-28  w-28 right-1 rounded-full  absolute  "></div>
        <div className="bg-slate-200 -z-50  h-72 top-96 w-72 max-lg:hidden  rounded-full  absolute  right-12 "></div>
        <div className="bg-slate-200 -z-50 h-48 top-[600px] w-48 max-lg:hidden  rounded-full  absolute  left-4 "></div>
      </div> */}
      <div className=" flex-col w-full mx-auto items-center justify-center flex   ">
        {StoryData?.map((ind) => {
          return <StoryCardnew key={2} ind={ind}></StoryCardnew>;
        })}

        <div className="bg-slate-200 -z-50 max-lg:hidden h-28  w-28 right-1 rounded-full  absolute  "></div>
        <div className="bg-slate-200 -z-50  h-72 top-96 w-72 max-lg:hidden  rounded-full  absolute  right-12 "></div>
        <div className="bg-slate-200 -z-50 h-48 top-[600px] w-48 max-lg:hidden  rounded-full  absolute  left-4 "></div>
      </div>
    </section>
  );
};

export default Stories;
