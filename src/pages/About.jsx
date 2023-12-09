import React from "react";
import { Aboutimg, RandomPerson } from "../assets/images";
const About = () => {
  return (
    <>
      <div className="h-80 relative flex  justify-center max-sm:h-52 items-end bg-black">
        <img
          src={Aboutimg}
          alt="AboutTopImg"
          className="object-cover object-bottom w-full h-full opacity-60"
        />
        <p className="absolute bottom-10 max-sm:tracking-[6px] max-sm:text-[27px] text-white tracking-[11px] font-Oswald font-semibold text-[50px]  ">
          {" "}
          AUTHOR BIOGRAPHY
        </p>
      </div>
      <div className="relative  p-16 max-sm:p-0 max-sm:mt-4 max-sm:ml-4  justify-center items-center h-[600px]">
        <div className="float-left">
          <img
            src={RandomPerson}
            alt="person"
            className=" pb-4 pr-6 z-10 max-sm:pr-2 max-sm:pb-1 max-sm:h-[260px] h-[600px] "
          />
        </div>
        <div className="text-black head-title flex font-serif transform translate-y-10 -translate-x-40  max-md:-translate-x-0 text-center justify-center text-6xl max-md:text-2xl tracking-wide my-6 max-md:m-0 mt-0 max-md:ml-5  ">
          <span>A</span>ditya&nbsp;
          <span>G</span>autam
        </div>
        <div className="float-none text-[19px]  text-justify bg-white w-[60%] max-sm:w-[85%] max-sm:p-2 max-sm:leading-[17px] max-sm:ml-8 max-sm:mt-14  ml-24 mt-24  p-10 max-sm:text-[15px]  ">
          <span className="text-[25px] ml-3 font-serif ">L</span>
          orem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolorum
          iure nesciunt enim dignissimos cumque voluptatum eos, possimus odio
          error perferendis nihil atque laudantium rem quos esse cupiditate
          repellat minima. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Fugit non, dignissimos quisquam doloremque reprehenderit quod
          dolores iste impedit sed voluptas quasi culpa fuga delectus asperiores
          assumenda porro omnis, alias praesentium! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Maiores, quae doloremque voluptatum unde
          exercitationem voluptate, error laboriosam minima fuga soluta ullam
          culpa accusamus necessitatibus, nihil ducimus voluptatem praesentium
          inventore. Quibusdam. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Illo dolorum iure nesciunt enim dignissimos cumque
          voluptatum eos, possimus odio error perferendis nihil atque laudantium
          rem quos esse cupiditate repellat minima. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Fugit non, dignissimos quisquam
          doloremque reprehenderit quod dolores iste impedit sed voluptas quasi
          culpa fuga delectus asperiores assumenda porro omnis, alias
          praesentium! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Maiores, quae doloremque voluptatum unde exercitationem voluptate,
          error laboriosam minima fuga soluta ullam culpa accusamus
          necessitatibus, nihil ducimus voluptatem praesentium inventore.
          Quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Illo dolorum iure nesciunt enim dignissimos cumque voluptatum eos,
          possimus odio error perferendis nihil atque laudantium rem quos esse
          cupiditate repellat minima. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Fugit non, dignissimos quisquam doloremque
          reprehenderit quod dolores iste impedit sed voluptas quasi culpa fuga
          delectus asperiores assumenda porro omnis, alias praesentium! Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Maiores, quae
          doloremque voluptatum unde exercitationem voluptate, error laboriosam
          minima fuga soluta ullam culpa accusamus necessitatibus, nihil ducimus
          eriores assumenda porro omnis, alias praesentium! Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Maiores, quae doloremque
          voluptatum unde exercitationem voluptate, error laboriosam minima fuga
        </div>
      </div>
    </>
  );
};

export default About;
