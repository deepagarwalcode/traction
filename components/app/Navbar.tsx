import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export const navItems = [
  {
    name: "Our Service",
    link: "services",
  },
  {
    name: "Process",
    link: "process",
  },
  // {
  //   name: "Testimonials",
  //   link: "testimonials",
  // },
  {
    name: "Results",
    link: "work",
  },
  
];

const Navbar = () => {
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
