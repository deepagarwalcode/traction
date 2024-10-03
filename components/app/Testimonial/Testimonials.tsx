import React from "react";
import { testimonials } from "@/lib/data";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="max-w-[100vw] bg-secondary pb-[12vh] lg:pt-[12vh] overflow-hidden relative">
      <div>
        <div className="flex items-center gap-3 shadow-[0px_0px_40px_1px] shadow-dark_primary/40 bg-dark_secondary border-[1px] border-gray-700 w-max py-3 px-8 rounded-sm mx-auto mb-4">
          {/* <div className="h-3 w-3 bg-primary rounded-full "></div> */}
          <p className="text-base font-semibold">WHAT PEOPLE SAY</p>
        </div>
        <h2 className=" text-center mb-8 lg:mb-16 text-4xl lg:text-8xl font-extrabold">
          Testimonials
          {/* <div className="absolute h-2 lg:h-[10px] right-0 bg-primary w-full rounded-sm"></div> */}
        </h2>
        {/* <p className="text-center font-bold text-lg px-4 lg:px-0 lg:text-2xl mt-2 mb-24">
          A combination of movement, mentality and nutrition, <br className="hidden lg:flex" />
          <span className="bg-primary backdrop-blur-sm text-white px-2 rounded-sm">
            personalized for YOU.
          </span>
        </p> */}
      </div>
      <div className="all-testimonials overflow-hidden ">
        <div className="slider">
          {testimonials.map((t, i) => (
            <TestimonialCard data={t} key={i} />
          ))}
        </div>
        <div className="slider">
          {testimonials.map((t, i) => (
            <TestimonialCard data={t} key={i} />
          ))}
        </div>
        {/* <div className={"vignette_overlay"}></div> */}
      </div>
      <div className="h-8"></div>
      <div className="all-testimonials overflow-hidden ">
        <div className="slider">
          {testimonials.map((t, i) => (
            <TestimonialCard data={t} key={i} />
          ))}
        </div>
        <div className="slider">
          {testimonials.map((t, i) => (
            <TestimonialCard data={t} key={i} />
          ))}
        </div>
        {/* <div className={"vignette_overlay"}></div> */}
      </div>
    </div>
  );
};

export default Testimonials;
