"use client"
import React from "react";
import CTAButton from "./CTAButton";
import { AuroraBackground } from "../ui/aurora-background";
import Link from "next/link";

const CTASection = () => {
  return (
    <Link  target="_blank" href={"https://form.jotform.com/241904856397065"}>

      <AuroraBackground
        className="bg-dark_secondary/40 w-[96vw] md:w-[80vw] h-[max] text-white  flex flex-col items-center justify-center gap-4 md:gap-8 py-[6vh] md:py-[16vh] mx-auto rounded-md my-[8vh] cursor-pointer"
        showRadialGradient
      >
        <p className="text-2xl md:text-6xl font-extrabold text-center">
          Ready to flood your calendar
          <br /> with qualified leads?
        </p>
        <p className="text-lg px-8 md:px-0 md:text-2xl text-center font-base">
          Book a meeting and get our playbook for FREE.
        </p>
        <CTAButton />
      </AuroraBackground>

    </Link>

  );
};

export default CTASection;
