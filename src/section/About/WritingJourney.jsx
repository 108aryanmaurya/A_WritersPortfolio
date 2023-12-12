import React from "react";

export default function WritingJourney() {
  return (
    <>
      <div class=" text-black py-8 max-md:mt-24">
        <div class="container mx-auto flex flex-col items-start md:flex-row mb-12 md:mb-24">
          <div class="flex flex-col w-full sticky md:top-44 lg:w-1/3 mt-2 md:mt-12 px-8 max-sm:items-center justify-center">
            <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed  font-CooperHevitt max-sm:font-semibold">
              My Writing Journey
            </p>
            <p class="font-bold text-text-gray-700 uppercase mb-2 tracking-loose font-Oswald">
              Working Process
            </p>
            <p class="text-sm md:text-base text-gray-900 mb-4 max-sm:text-center font-montserrat">
              Here's your guide to the tech fest 2021 process. Go through all
              the steps to know the exact process of the fest.
            </p>
          </div>
          <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden p-10 max-sm:px-2 h-full">
                <div class="border-2-2 border-[#FFC100] right-[50%] rounded-sm border-yellow-555 absolute h-full border"></div>
                <div class="border-2-2 border-[#FFC100] left-[50%] rounded-sm border-yellow-555 absolute h-full border"></div>
                <div class=" flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-right">
                    <p class="mb-3 text-base text-text-gray-700">
                      1-6 May, 2021
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl font-Oswald">
                      Registration
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-900 text-opacity-100 font-montserrat">
                      Pick your favourite event(s) and register in that event by
                      filling the form corresponding to that event. Its that
                      easy :)
                    </p>
                  </div>
                </div>
                <div class=" flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1  w-5/12 px-1 py-4 text-left">
                    <p class="mb-3 text-base text-text-gray-700">
                      6-9 May, 2021
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl font-Oswald">
                      Participation
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-900 text-opacity-100 font-montserrat">
                      Participate online. The links for your registered events
                      will be sent to you via email and whatsapp groups. Use
                      those links and show your talent.
                    </p>
                  </div>
                </div>
                <div class=" flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-right">
                    <p class="mb-3 text-base text-text-gray-700">
                      {" "}
                      10 May, 2021
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl font-Oswald">
                      Result Declaration
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-900 text-opacity-100 font-montserrat">
                      The ultimate genius will be revealed by our judging panel
                      on 10th May, 2021 and the resukts will be announced on the
                      whatsapp groups and will be mailed to you.
                    </p>
                  </div>
                </div>

                <div class=" flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>

                  <div class="order-1  w-5/12 px-1 py-4">
                    <p class="mb-3 text-base text-text-gray-700">
                      12 May, 2021
                    </p>
                    <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left font-Oswald">
                      Prize Distribution
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-900 text-opacity-100 font-montserrat">
                      The winners will be contacted by our team for their
                      addresses and the winning goodies will be sent at their
                      addresses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
