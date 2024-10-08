import React from "react";
import CTAButton from "../CTAButton";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const Opening = () => (
  <div className="w-full flex flex-col items-center gap-6">
    <div className="flex items-center gap-4 shadow-[0px_0px_40px_1px] shadow-dark_primary/40 bg-dark_secondary border-[1px] border-gray-700 w-max py-4 px-6 rounded-full">
      <div className="h-4 w-4 bg-primary rounded-full"></div>
      <p className="text-xs md:text-base md:font-medium">
        FOR B2B SERVICES &gt; 50K MRR
      </p>
    </div>
    <h1 className="capitalize text-3xl md:text-5xl lg:text-8xl font-extrabold text-center">
      Turn outbound into your <br /> most valuable channel
    </h1>
    <p className="md:text-2xl px-8">
    We send emails with offers your prospects{" "}
      <span className="font-bold">can’t refuse.</span>{" "}
    </p>

    <CTAButton />
  </div>
);

const HeroSection = () => {
  return (
    <div className="pt-[10vh] md:pt-[20vh] pb-[12vh] w-full bg-dark_secondary hero-bg mx-auto" id="home">
      {/* <div className="w-full flex flex-col items-center  gap-8">
        <div className="flex gap-4 shadow-[0px_0px_40px_1px] shadow-dark_primary/40 bg-dark_secondary border-[1px] border-gray-700 w-max py-4 px-6 rounded-full">
          <div className="h-6 w-6 bg-primary rounded-full "></div>
          <p>FOR B2B COMPANIES ABOVE &gt;$100K/MO IN REVENUE</p>
        </div>
        <h1 className="capitalize text-8xl font-extrabold text-center">
          Turn outbound into your <br /> most valuable channel
        </h1>
        <p className=" text-2xl">
          We flood you with opportunities so you can focus on{" "}
          <span className="font-bold">closing deals.</span>{" "}
        </p>

        <CTAButton />
      </div> */}
      <ContainerScroll titleComponent={<Opening />}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/2LGlvhpmyVY"
          title="Welcome to Traction"
          // frameborder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
          className="rounded-md"
        ></iframe>
      </ContainerScroll>
    </div>
  );
};

export default HeroSection;
