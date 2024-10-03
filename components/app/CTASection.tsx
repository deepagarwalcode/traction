"use client"
import React from "react";
import CTAButton from "./CTAButton";
import { AuroraBackground } from "../ui/aurora-background";
import Link from "next/link";

const CTASection = () => {
  return (
    <Link  target="_blank" href={"https://form.jotform.com/241904856397065"}>

      <AuroraBackground
        className="bg-dark_secondary/40 w-[80vw] h-[max] text-white  flex flex-col items-center justify-center gap-8 py-[16vh] mx-auto rounded-md my-[8vh] cursor-pointer"
        showRadialGradient
      >
        <p className="text-6xl font-extrabold text-center">
          Ready to flood your calendar
          <br /> with qualified leads?
        </p>
        <p className="text-2xl font-base">
          Book a meeting and get our playbook for FREE.
        </p>
        <CTAButton />
      </AuroraBackground>

    </Link>

  );
};

export default CTASection;
