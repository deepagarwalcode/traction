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
import NavSheet from "../app/NavSheet";

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
            <h1 className="text-2xl font-bold uppercase">TRACTION</h1>
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
          <Link
            href={
              "https://tractionagency.notion.site/Methodology-115a0a088bef80069d99cbaed3854cfa"
            }
            target="_blank"
            className={cn(
              "hidden lg:flex  relative text-neutral-50 items-center space-x-1  hover:text-neutral-300"
            )}
          >
            <span className="hidden font-semibold sm:block text-lg">
              Our Success Framework
            </span>
          </Link>
          <Link
            href={"https://aaron-reid-s-school.teachable.com/"}
            target="_blank"
            className={cn(
              "hidden lg:flex  relative text-neutral-50 items-center space-x-1  hover:text-neutral-300"
            )}
          >
            <span className="hidden font-semibold sm:block text-lg">
              Learn For Free
            </span>
          </Link>
          <CTAButton classes="hidden md:flex md:text-lg px-4 md:py-6" />
          <NavSheet navItems={navItems}>
            <Menu className="lg:hidden mx-2" size={28} />
          </NavSheet>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
