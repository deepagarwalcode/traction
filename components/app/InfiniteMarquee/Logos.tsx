import React from "react";
import styles from "./WorkedWith.module.css";
import { logos } from "@/lib/logos";
const Logos = () => {
  return (
    <div>
      <p className="text-gray-400 mb-10 text-sm md:text-lg font-bold uppercase z-[40] text-center ">
        Educating and helping global growth leaders
      </p>
      <div className="w-max bg-secondary overflow-hidden relative overflow-x-hidden md:mb-4">
        {/* <div className="w-max mt-[-2vh] mb-[-2vh] md:my-[-4vh] md:py-[12vh] md:pt-[8vh] overflow-hidden relative overflow-x-hidden"> */}

        <div className="all-testimonials overflow-hidden">
          <div className="slider">
            {logos.map((logo, index) => (
              <img
                className="h-12 md:h-30 max-w-96 object-contain mx-4  md:mx-12 md:px-2"
                src={logo}
                alt={`logo-${index}`}
                key={index}
              />
            ))}
          </div>

          <div className="slider">
            {logos.map((logo, index) => (
              <img
                className="h-12 md:h-30 max-w-96 object-contain  mx-4 md:mx-12 md:px-2"
                src={logo}
                alt={`logo-${index}`}
                key={index}
              />
            ))}
          </div>
          <div className={"vignette_overlay"}></div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
