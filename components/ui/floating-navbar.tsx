"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn, scrollToSection } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu } from "lucide-react";
import CTAButton from "../app/CTAButton";

export interface INavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[92vw] bg-dark_secondary/20 backdrop-blur-md fixed top-6 inset-x-0 mx-auto rounded-md  text-white  z-[49] pr-4 pl-8 py-4 gap-4 items-center justify-between space-x-4",
          className
        )}
      >
        <Link href={"/"} onClick={(e) => scrollToSection(e, "home")}>
          <div className="flex items-center gap-4">
            {/* <Image
              src={""}
              height={500}
              width={500}
              alt="EvolvFit"
              className="h-12 w-12 bg-primary"
            /> */}
            <h1 className="hidden lg:block text-2xl font-bold uppercase">
              TRACTION
            </h1>
          </div>
        </Link>
        <div className="flex items-center lg:gap-8 gap-4">
          {navItems.map((navItem: INavItem, idx: number) => (
            <Link
              onClick={(e) => scrollToSection(e, navItem.link)}
              key={`link=${idx}`}
              href={"/"}
              // href={navItem.link}
              className={cn(
                "hidden lg:flex  relative text-neutral-50 items-center space-x-1  hover:text-neutral-300"
              )}
            >
              {/* <span className="block sm:hidden">{navItem.icon}</span> */}
              <span className="hidden font-semibold sm:block text-lg">
                {navItem.name}
              </span>
            </Link>
          ))}
          {/* <button className="text-lg font-semibold relative px-6 py-3 rounded-md bg-secondary  shadow-sm transition-all hover:shadow-primary/80 bg-[linear-gradient(110deg,#000103,46%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer">
            <span className="hidden lg:flex items-center gap-3">
              Book Your Strategy Call

            </span>
            <span className="lg:hidden flex items-center gap-2">Evolv Now</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent  h-px" />
          </button> */}
          <CTAButton classes="text-lg py-6 px-4" line="Get In Touch" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
