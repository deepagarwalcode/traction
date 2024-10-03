import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export const navItems = [
  {
    name: "Results",
    link: "results",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Process",
    link: "process",
  },
  {
    name: "Pricing",
    link: "pricing",
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
