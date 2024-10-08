import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CTAButton = ({ classes, line }: { classes?: string; line?: string }) => {
  return (
    <Link target="_blank" href={"https://form.jotform.com/241904856397065"}>
      <Button
        className={cn(
          "bg-gradient-to-r from-primary to-dark_primary py-7 md:py-8 text-lg md:text-2xl font-bold px-6 my-2 hover:shadow-primary/60 hover:shadow-[0px_0px_40px_1px] transition",
          classes && classes
        )}
      >
        {/* <p>{line || "Book Your Strategy Call"}</p> */}
        <p>{"Turn Sales On"}</p>
      </Button>
    </Link>
  );
};

export default CTAButton;
