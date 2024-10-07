import React from "react";
import { testimonials } from "@/lib/data";
import TestimonialCard from "./TestimonialCard";
import Script from "next/script";

const Testimonials = () => {
  return (
    <div
      className="max-w-[100vw] bg-secondary pb-[12vh] lg:pt-[12vh] overflow-hidden relative"
      id="testimonials"
    >
      <div>
        <div className="flex items-center gap-3 shadow-[0px_0px_40px_1px] shadow-dark_primary/40 bg-dark_secondary border-[1px] border-gray-700 w-max py-3 px-8 rounded-sm mx-auto mb-4">
          <p className="text-base font-semibold">WHAT PEOPLE SAY</p>
        </div>
        <h2 className=" text-center mb-8 lg:mb-16 text-4xl lg:text-8xl font-extrabold">
          Our Supporters
        </h2>
      </div>
      {/* <div className="all-testimonials overflow-hidden ">
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
      </div> */}
      <main className="max-w-[92vw] md:max-w-[80vw] mx-auto">
        <div
          className="senja-embed"
          data-id="009fa368-d06f-4e12-8e49-4596e671ad29"
          data-lazyload="false"
          data-mode="shadow"
        ></div>
        {/* This changed from <script> to <Script> */}
        <Script
          async
          type="text/javascript"
          // src="https://static.senja.io/dist/platform.js"
          src="https://widget.senja.io/widget/009fa368-d06f-4e12-8e49-4596e671ad29/platform.js"
        ></Script>
      </main>
    </div>
  );
};

export default Testimonials;
