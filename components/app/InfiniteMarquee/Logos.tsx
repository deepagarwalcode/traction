import React from "react";
import styles from "./WorkedWith.module.css";
import { test_logos } from "@/lib/logos";
const Logos = () => {
  return (
    <div className="w-max mt-[-2vh] mb-[-2vh] md:my-[-4vh] md:py-[12vh] md:pt-[8vh] overflow-hidden relative overflow-x-hidden">
      <div className="all-testimonials overflow-hidden">
        <div className="slider">
          {test_logos.map((logo, index) => (
            <img
              className="h-20 md:h-40 max-w-96 object-contain px-0 md:px-2 filter brightness-0 invert"
              src={logo}
              alt={`logo-${index}`}
              key={index}
            />
          ))}
        </div>

        <div className="slider">
          {test_logos.map((logo, index) => (
            <img
              className="h-20 md:h-40 max-w-96 object-contain px-0 md:px-2 filter brightness-0 invert"
              src={logo}
              alt={`logo-${index}`}
              key={index}
            />
          ))}
        </div>
        <div className={"vignette_overlay"}></div>
      </div>
    </div>
  );
};

export default Logos;
