import { Timeline } from "@/components/ui/timeline";
import React from "react";
import ProcessCard from "./ProcessCard";
import { processData } from "@/lib/data";
import { TimelineLeft } from "./TimelineLeft";

export interface IProcess {
  name: string;
  description: string;
  image?: any;
  goal?: string;
}

// const data = [
//   {content: <ProcessCard data={processData[0]} index={0} />},
//   {content: <ProcessCard data={processData[1]} index={1} />},
//   {content: <ProcessCard data={processData[2]} index={2} />},
//   {content: <ProcessCard data={processData[3]} index={3} />},
//   {content: <ProcessCard data={processData[4]} index={4} />},
// ]

const ProcessTimeline = () => {
  return (
    <div className="bg-secondary pt-[8vh]">
      <div>
        <div className="flex items-center gap-3 shadow-[0px_0px_40px_1px] shadow-dark_primary/40 bg-dark_secondary border-[1px] border-gray-700 w-max py-3 px-8 rounded-sm mx-auto mb-4">
          {/* <div className="h-3 w-3 bg-primary rounded-full "></div> */}
          <p className="text-base font-semibold">OUR PROCESS</p>
        </div>
        <h2 className=" text-center mb-8 lg:mb-4 text-4xl lg:text-8xl font-extrabold">
          Timeline
          {/* <div className="absolute h-2 lg:h-[10px] right-0 bg-primary w-full rounded-sm"></div> */}
        </h2>
        {/* <p className="text-center font-bold text-lg px-4 lg:px-0 lg:text-2xl mt-2 mb-24">
          A combination of movement, mentality and nutrition, <br className="hidden lg:flex" />
          <span className="bg-primary backdrop-blur-sm text-white px-2 rounded-sm">
            personalized for YOU.
          </span>
        </p> */}
      </div>
      <div className="pt-[14vh] hero-bg pb-[0] rounded-xl flex mx-[4vw] bg-dark_secondary shadow-[inset_0px_0px_200px_100px] shadow-secondary">
        <TimelineLeft
          data={processData.map((item, index) => {
            return {
              content: <ProcessCard data={item} index={index} isLeft={true} />,
            };
          })}
        />
        <Timeline
          data={processData.map((item, index) => {
            return { content: <ProcessCard data={item} index={index} /> };
          })}
        />
      </div>
    </div>
  );
};

export default ProcessTimeline;
