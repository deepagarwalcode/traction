import React from "react";
import { IProcess } from "./ProcessTimeline";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProcessCard = ({
  data,
  index,
  isLeft,
}: {
  data: IProcess;
  index: number;
  isLeft?: boolean;
}) => {
  function hideCard() {
    if (index % 2 === 0 && isLeft) {
      return true;
    } else if (!isLeft && index % 2 === 1) {
      return true;
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row mb-12 lg:mb-8 box-border mt-[-1vh] md:mt-[-4vh] pl-6 pr-0 md:px-4 pb-10 rounded-md justify-between gap-12 w-[72vw] lg:w-[40vw]",
        isLeft && "lg:flex-row-reverse ml-auto",
        hideCard() && "lg:opacity-0"
      )}
    >
      <div className="flex-2 flex flex-col gap-4 min-w-[24vw]">
        <p
          className={cn(
            "timeline-index text-5xl lg:text-8xl font-extrabold text-left",
            isLeft && "text-right"
          )}
        >
          0{index + 1}
        </p>
        <p
          className={cn(
            "capitalize text-2xl lg:text-4xl font-extrabold",
            isLeft && "text-right"
          )}
        >
          {data.name}
        </p>
        <p
          className={cn(
            "text-xl md:w-[36vw] text-gray-400 font-semibold",
            isLeft ? "text-right" : ""
          )}
        >
          {data.description} {isLeft && <br />}{" "}
          {/* <span className="text-white border-b-4 font-bold border-dark_primary"> */}
            {data?.goal}
          {/* </span> */}
        </p>
      </div>
      {/* <Image
        src={data.image}
        alt={data.name}
        width={2000}
        height={2000}
        className="max-h-[40vh] lg:max-h-[50vh] lg:h-[50vh]  flex-1 object-contain pb-8"
      /> */}
    </div>
  );
};

export default ProcessCard;
