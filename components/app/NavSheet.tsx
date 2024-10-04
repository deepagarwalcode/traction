"use client";
import React, { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { INavItem } from "../ui/floating-navbar";
import Link from "next/link";
import { cn, scrollToSection } from "@/lib/utils";
import Image from "next/image";
import swadhin_dp from "@/public/swadhin_dp.jpg";
import CTAButton from "./CTAButton";

const NavSheet = ({
  children,
  navItems,
}: {
  children: ReactNode;
  navItems: INavItem[];
}) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent className="bg-secondary border-none text-white ">
          <div className="flex flex-col gap-8 mt-8">
            {navItems.map((navItem: INavItem, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={"/"}
                // href={navItem.link}
                onClick={(e) => scrollToSection(e, navItem.link)}
                className={cn(
                  "relative text-neutral-50 items-center space-x-1  hover:text-neutral-300"
                )}
              >
                <SheetClose>
                  {/* <span className="block sm:hidden">{navItem.icon}</span> */}
                  <span className="font-semibold sm:block text-lg">
                    {navItem.name}
                  </span>
                </SheetClose>
              </Link>
            ))}
            <Link
              href={
                "https://tractionagency.notion.site/Methodology-115a0a088bef80069d99cbaed3854cfa"
              }
              target="_blank"
              className={cn(
                "relative text-neutral-50 items-center space-x-1  hover:text-neutral-300"
              )}
            >
              <span className="font-semibold sm:block text-lg">
                Our Success Framework
              </span>
            </Link>
            <Link
              href={"https://aaron-reid-s-school.teachable.com/"}
              target="_blank"
              className={cn(
                "relative text-neutral-50 items-center space-x-1  hover:text-neutral-300"
              )}
            >
              <span className="font-semibold sm:block text-lg">
                Learn For Free
              </span>
            </Link>
          </div>
          <CTAButton classes="mt-10" />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavSheet;
