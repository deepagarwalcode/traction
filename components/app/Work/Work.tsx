import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  {
    title: "10 qualified leads in 24 hours.",
    imgUrl: "https://tractionagency.io/assets/images/image04.jpg?v=56504970",
  },
  {
    title: "12 qualified leads in 18 hours.",
    imgUrl: "https://tractionagency.io/assets/images/image17.jpg?v=56504970",
  },
  {
    title: "35 qualified leads in 7 days.",
    imgUrl: "https://tractionagency.io/assets/images/image01.jpg?v=56504970",
  },
  {
    title: "64 qualified leads in 30 days.",
    imgUrl: "https://tractionagency.io/assets/images/image07.jpg?v=56504970",
  },
  {
    title: "50 qualified leads in 35 days.",
    imgUrl: "https://tractionagency.io/assets/images/image15.jpg?v=56504970",
  },
  {
    title: "12 SQLs from 36 Messages (33% positive response rate)",
    imgUrl: "https://tractionagency.io/assets/images/image16.jpg?v=56504970",
  },
  {
    title: "91 SQLs in 60 days",
    imgUrl: "https://tractionagency.io/assets/images/image14.jpg?v=56504970",
  },

  {
    title: "74 qualified leads in 41 days.",
    imgUrl: "https://tractionagency.io/assets/images/image08.jpg?v=56504970",
  },
  {
    title: "21 qualified leads in 10 days.",
    imgUrl: "https://tractionagency.io/assets/images/image12.jpg?v=56504970",
  },
  {
    title: "17 qualified leads in 40 hours.",
    imgUrl: "https://tractionagency.io/assets/images/image13.jpg?v=56504970",
  },
  {
    title: "20 qualified leads in 1 week.",
    imgUrl: "https://tractionagency.io/assets/images/image09.jpg?v=56504970",
  },
  {
    title: "Practicing what we preach internally :-)",
    imgUrl: "https://tractionagency.io/assets/images/image06.jpg?v=56504970",
  },
];

export function Work() {
  return (
    <div className="mx-auto py-[12vh]" id="work">
      <div className="flex items-center gap-3 shadow-[0px_0px_40px_1px] shadow-dark_primary/40 bg-dark_secondary border-[1px] border-gray-700 w-max py-3 px-8 rounded-sm mx-auto mb-4">
        {/* <div className="h-3 w-3 bg-primary rounded-full "></div> */}
        <p className="text-base font-semibold">OUR PAST WORK</p>
      </div>
      <h2 className=" text-center mb-8 lg:mb-16 text-4xl lg:text-8xl font-extrabold">
      Campaign Screenshots
        {/* <div className="absolute h-2 lg:h-[10px] right-0 bg-primary w-full rounded-sm"></div> */}
      </h2>
      <Carousel className="hidden md:block mx-auto max-w-[72vw]">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-4 rounded-lg pt-6 bg-dark_secondary cursor-pointer">
                <p className="text-xl md:text-4xl font-bold text-center mb-4">
                  {image.title}
                </p>
                <Image
                  width={1000}
                  height={500}
                  src={image.imgUrl}
                  alt={image.title}
                  className="w-[72vw] object-contain h-[60vh] bg-white rounded-md py-4"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="md:hidden flex flex-col gap-4 mx-2">
        {images.map((image, index) => (
          <div className="p-2 rounded-lg pt-4 bg-dark_secondary cursor-pointer" key={index}>
            <p className="text-xl md:text-4xl font-bold text-center mb-4">
              {image.title}
            </p>
            <Image
              width={1000}
              height={500}
              src={image.imgUrl}
              alt={image.title}
              className="w-[92vw] object-contain h-[24vh] bg-white rounded-md py-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
